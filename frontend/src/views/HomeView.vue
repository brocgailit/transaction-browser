<script setup lang="ts">
import { APIClient, type Account } from '@/client';
import AccountList from '../components/AccountList.vue';

const client = new APIClient();

const accounts = await client.getAllAccounts();

</script>

<template>
  <main>
    <h1>Select an account</h1>
    <AccountList :accounts=accounts />
  </main>
</template>