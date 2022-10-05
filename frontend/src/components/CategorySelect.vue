<script setup lang="ts">
import { ref } from 'vue';
import { categories as categoryOptions } from '../util/categories';

defineProps<{
    categories: string[]
}>()

const emit = defineEmits<{
    (e: 'change', categories: string[]): void
}>();

const selectedCategories = ref<string[]>([]);

</script>

<template>
    <div class="categories">
        <div
            class="category"
            v-for="category in categories"
        >
            <input
                type="checkbox"
                name="category"
                :id="category"
                :value="category"
                @change="emit('change', selectedCategories)"
                v-model="selectedCategories"
            >
            <label :for="category" class="button">
                <FontAwesomeIcon
                    :icon="categoryOptions[category].icon"
                    size="2x"
                ></FontAwesomeIcon>
                <span>{{ category }}</span>
            </label>
        </div>
    </div>
</template>

<style scoped>

.categories {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
}

.category {
    display: inline-block;
    position: relative;
    min-width: 100px;
}

input {
    width: 0;
    height: 0;
    opacity: 0;
    float: left;
}

input:checked + label {
    background-color: var(--color-primary);
    color: var(--color-white);
}

label {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    padding: 1em;
    border-radius: var(--radius-lg);
}

</style>