<script setup lang="ts">

import type { Account } from '../client';
import AccountIcon from './AccountIcon.vue';

const props = defineProps<{
    account: Account
}>()

const { id, owner, iban } = props.account;

</script>

<template>
    <RouterLink
        :to="{name: 'account', params: { id }}"
        v-slot="{ navigate }"
        custom
    >
        <li
            role="button"
            tabindex="0"
            @click="() => navigate()"
            @keyup.enter="() => navigate()"
        >
            <div class="initials">
                <AccountIcon :owner="owner"></AccountIcon>
            </div>
            <div class="owner">
                <span class="owner-name">{{ owner }}</span>
                <span class="owner-iban">{{ iban }}</span>
            </div>
        </li>
    </RouterLink>
</template>

<style scoped>

.owner {
    display: flex;
    flex-direction: column;
    gap: 0.25em;
}

.owner-name {
    font-weight: var(--font-weight-bold);
    font-size: 1.25em;
}

.owner-iban {
    opacity: 0.8;
}

.initials, .icon {
    display: flex;
    align-items: center;
    justify-content: center;
}

@media screen and (min-width: 1024px) {
    li {
        flex-direction: row;
        text-align: left;
    }
}

</style>