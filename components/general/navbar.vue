<template>
  <div
    class="fixed top-0 flex w-full flex-row items-center justify-between bg-black px-20 py-4"
  >
    <div
      @click="changePage('Home')"
      class="cursor-pointer text-2xl font-bold text-primary"
    >
      HaidarMN
    </div>

    <div
      class="absolute left-1/2 flex -translate-x-1/2 flex-row items-center gap-8"
    >
      <div
        v-for="(navbar, index) in navbar_menu"
        :key="index"
        class="group relative"
      >
        <span
          @click="changePage(navbar)"
          class="cursor-pointer font-medium uppercase text-white"
        >
          {{ navbar }}
        </span>
        <span
          class="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-3/5"
          :class="store.current_page == navbar ? 'w-3/5' : ''"
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "~/stores/index";

// Variabel
const store = useStore();
const navbar_menu = ref(["About", "Experiences", "Projects"]);

// Function
const changePage = (val) => {
  store.current_page = val;
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
</script>

<style lang="scss" scoped></style>
