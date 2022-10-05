<script setup lang="ts">

import AccountListItem from './AccountListItem.vue';
import type { Account } from '../client';

defineProps<{
  accounts: Account[]
}>()

</script>

<template>
    <ul>
        <AccountListItem
            v-for="account in accounts"
            :key="account.id"
            :account="account"
        ></AccountListItem>
    </ul>
</template>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    @media screen and (min-width: 600px) {
        ul {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (min-width: 1024px) {
        ul {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>