<script setup lang="ts">

import type { Transaction } from '../client';
import TransactionListItem from './TransactionListItem.vue';

defineProps<{
    transactions: Transaction[]
}>();

</script>

<template>
    <div class="transactions-list">
        <slot></slot>
        <ul>
            <TransactionListItem
                v-for="transaction of transactions"
                :key="transaction.id"
                :transaction="transaction"
            ></TransactionListItem>
        </ul>
    </div>
</template>

<style scoped>
    .transactions-list {
        width: 100%;
    }

    .transactions-list, ul {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
    
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>