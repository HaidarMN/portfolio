<template>
  <div
    class="group h-40 w-full cursor-pointer rounded-lg bg-secondary/50 bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${image})` }"
    @click="toggleModal"
  >
    <div
      class="flex h-full flex-col items-center justify-center rounded-lg bg-black/70 px-4 py-2 opacity-100 transition-all duration-200 ease-in-out group-hover:opacity-100 lg:opacity-0"
    >
      <span class="text-center text-xl font-bold text-white">{{ title }}</span>
      <span
        class="text-center text-sm font-medium text-secondary md:text-base"
        >{{ type }}</span
      >
    </div>
  </div>

  <div v-show="is_open" class="absolute z-[99999999999]">
    <div class="fixed inset-0 z-50 overflow-y-auto">
      <div
        @click="toggleModal"
        class="fixed inset-0 h-screen bg-black/50 transition-opacity"
      ></div>
      <div class="z-50 flex min-h-full items-center justify-center p-4">
        <div
          class="flex w-full max-w-4xl transform flex-col gap-4 overflow-hidden rounded-lg bg-white px-4 py-2 shadow-xl transition-all"
        >
          ini judulnya {{ title }} dan ini tipenya {{ type }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

// Variabel
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
const is_open = ref(false);

// Function
function toggleModal() {
  is_open.value = !is_open.value;
}
</script>
