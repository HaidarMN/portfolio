<template>
  <div
    class="flex h-[calc(100vh-4rem)] min-w-full flex-col items-center justify-center gap-10"
  >
    <h1 class="text-6xl font-bold text-primary">Haidar Muhammad Naufal</h1>
    <h2
      class="w-[475px] overflow-hidden whitespace-nowrap text-2xl font-medium text-white"
    >
      Senior Frontend Developer at Telkomsigma
    </h2>
    <button
      @click="changePage('Projects')"
      class="group relative inline-flex items-center justify-start overflow-hidden rounded-lg border-2 border-primary transition-all"
    >
      <span
        class="absolute left-0 top-0 -z-10 h-full w-0 bg-primary transition-all duration-300 group-hover:w-full"
      ></span>
      <span class="z-10 p-4 text-xl font-medium text-white"
        >Checkout My Projects</span
      >
    </button>
  </div>
</template>

<script setup>
import { useStore } from "~/stores/index";
import "animate.css";
// Variabel
const store = useStore();

// Function
const changePage = (val) => {
  store.current_page = val;
};
</script>

<style lang="scss" scoped>
.icon {
  color: #acb5ac;
}

.icon:hover {
  color: #ff7f11;
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
