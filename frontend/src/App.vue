<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute();

</script>

<template>
  <header v-if="route.name !== 'home'">
    <div class="wrapper">
      <nav>
        <RouterLink to="/">
          <FontAwesomeIcon icon="fa-chevron-left"></FontAwesomeIcon>
          View All Accounts
        </RouterLink>
      </nav>
    </div>
  </header>

    <RouterView v-slot="{ Component }">
      <Suspense timeout="0">
        <template #default>
          <component :is="Component"/>
        </template>
        <template #fallback>
          <div class="loading">
            <FontAwesomeIcon icon="fa-circle-notch" class="fa-spin" size="6x"></FontAwesomeIcon>
          </div>
        </template>
      </Suspense>
    </RouterView>

</template>

<style scoped>

nav {
  text-align: right;
  padding: 1em;
}

nav a {
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
  text-decoration: none;
}

.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-primary);
}
</style>
