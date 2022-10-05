<script setup lang="ts">
import { APIClient, type Transaction } from '@/client';
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import TransactionsList from '@/components/TransactionsList.vue';
import CategorySelect from '@/components/CategorySelect.vue';
import { computed } from '@vue/reactivity';

const route = useRoute();
const id = route.params.id as string;

const client = new APIClient();

const account = await client.getAccount(id);
const categories = await client.getCategories();

const transactions = ref<Transaction[]>([]);

const sortDirection = ref<number>(-1);

const selectedCategories = ref<string[]>([]);

const totalAmount = computed(() => {
  return transactions.value.reduce((total, { amount }) => total + amount, 0);
})

const sortedAndGroupedTransactions = computed(() => {
  const sorted = [...transactions.value].sort(({date : a},{date: b}) => new Date(a).getTime() - new Date(b).getTime());
  if(sortDirection.value < 0) sorted.reverse();
  
  return sorted.reduce((groups, transaction) => {
    const month = new Date(transaction.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long' })

    return {
      ...groups,
      [month]: [
        ...(groups[month] || []),
        transaction
      ]
    }
  }, {} as Record<string, Transaction[]>);
})

function formatCurrency(amount: number) {
  return amount.toLocaleString(undefined, { style: 'currency', currency: 'EUR'})
}

watchEffect(async () => {
  transactions.value = await client.getAccountTransactions(id, selectedCategories.value);
})

</script>

<template>
  <main>

    <header>
      <h1>{{ account.owner }}</h1>
      <h2 :class="{negative: Math.sign(totalAmount) < 0}">
        {{formatCurrency(totalAmount)}}
      </h2>
    </header>

    <CategorySelect
      :categories="categories"
      @change="cats => selectedCategories = cats"
    ></CategorySelect>

    <label class="sort">
      Sort
      <select v-model="sortDirection">
        <option selected :value.number="-1">Date, Newest First</option>
        <option :value.number="1">Date, Oldest First</option>
      </select>
    </label>
    
    <div class="transactions">
      <TransactionsList
        v-for="(sortedTransactions, month) in sortedAndGroupedTransactions"
        :transactions="sortedTransactions"
      >
        <h2>{{month}}</h2>
      </TransactionsList>
    </div>

  </main>
</template>

<style scoped>

  header {
    text-align: center;
  }

  .negative {
    color: var(--color-danger);
  }

  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1em;
    max-width: 800px;
    width: 100%;
  }

  .sort {
    display: flex;
    gap: 0.5em;
    align-items: center;
  }

  select {
    width: 100%;
    min-width: 15ch;
    max-width: 30ch;
    border: 1px solid var(--select-border);
    border-radius: var(--radius-sm);
    box-shadow: var(--shadow-shallow);
    padding: 0.5em 0.75em;
    font-size: 1em;
    cursor: pointer;
    line-height: 1.1;
    background-color: var(--color-white);
  }
</style>