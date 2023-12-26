<template>
  <div>
    <LazyContentMain v-if="current_page == 'Home'" />
    <LazyContentAbout
      v-else-if="current_page == 'About'"
      class="animate__animated animate__slideInUp animate__faster"
    />
    <LazyContentExperiences
      v-else-if="current_page == 'Experiences'"
      class="animate__animated animate__slideInUp animate__faster"
    />
    <LazyContentProjects
      v-else-if="current_page == 'Projects'"
      class="animate__animated animate__slideInUp animate__faster"
    />
  </div>
</template>

<script setup>
import { useStore } from "~/stores/index";
import "animate.css";

// Variabel
const store = useStore();
const current_page = computed(() => {
  return store.current_page;
});
</script>

<style lang="scss" scoped></style>
