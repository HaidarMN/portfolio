<template>
  <div>
    <ContentMain v-if="current_page == 'Home'" />
    <ContentAbout
      v-else-if="current_page == 'About'"
      class="animate__animated animate__slideInUp animate__faster"
    />
    <ContentExperiences
      v-else-if="current_page == 'Experiences'"
      class="animate__animated animate__slideInUp animate__faster"
    />
    <ContentProjects
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
