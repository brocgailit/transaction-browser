<script setup lang="ts">

import { categories } from '@/util/categories';
import type { Transaction } from '../client';

const props = defineProps<{
    transaction: Transaction
}>()

const { date, amount, currency, category, id } = props.transaction;

const formattedAmount = amount.toLocaleString(undefined, {
    currency,
    style: 'currency'
});

const d = new Date(date);
const month = d.toLocaleDateString(undefined, { month: 'short' });
const day = d.getDate();

const { icon, color } = categories[category];

</script>

<template>
    <li>
        <div class="date">
            <span class="date-month">{{ month }}</span>
            <span class="date-day">{{ day }}</span>
        </div>
        <span class="detail">
            {{id}}
        </span>
        <span class="category">
            {{ category }}
        </span>
        <span class="amount" :class="{ negative: Math.sign(amount) < 0 }">
            {{ formattedAmount }}
        </span>
        <span class="icon" :style="{'--category-color-rgb': `var(--color-${color}-rgb)`}">
            <FontAwesomeIcon
                :icon="icon"
            ></FontAwesomeIcon>
        </span>
    </li>
</template>

<style scoped>
li {
    display: grid;
    grid-template-columns: 4em 4em 1fr auto;
    grid-template-rows: 2.25em 1.75em;
    grid-template-areas:
        'date icon category amount'
        'date icon detail amount';
    column-gap: 0.5em;
}

.date, .icon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.date {
    grid-area: date;
    flex-direction: column;
}

.date-day {
    font-size: 150%;
}

.detail {
    grid-area: detail;
    opacity: 0.8;
    font-size: 85%;
}

.amount {
    grid-area: amount;
    align-self: center;
    font-size: 150%
}

.amount.negative {
    color: var(--color-danger);
}

.category {
    grid-area: category;
    font-size: 125%;
    align-self: flex-end;
}

.icon {
    grid-area: icon;
    background-color: rgba(var(--category-color-rgb), 0.33);
}

</style>