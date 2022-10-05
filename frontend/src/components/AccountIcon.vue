<script setup lang="ts">
    
const props = defineProps<{
    owner: string
}>()

const initials = props.owner.split(/\s/).map(name => name.slice(0,1)).join('');

</script>

<template>
    <div class="icon">
        {{ initials }}
    </div>
</template>

<style scoped>
    .icon {
        font-size: 1.5em;
        width: 2.25em;
        height: 2.25em;
        background-color: var(--color-primary);
        color: var(--color-white);
        border-radius: 100%;
    }
</style>