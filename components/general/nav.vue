<template>
  <div
    class="absolute bottom-10 right-14 flex flex-col items-center justify-between gap-6"
  >
    <div v-for="(value_of_pages, index) in pages" :key="index" class="relative">
      <Icon
        :name="
          value_of_pages.isOpen ? 'radix-icons:dot-filled' : value_of_pages.icon
        "
        size="30px"
        class="peer transition-all"
        :class="{
          'cursor-pointer': value_of_pages.isOpen == false,
          'text-primary': current_page == 'Home',
          'text-white': current_page == 'About',
        }"
        @click="navigation_page(index)"
      />
      <span
        v-if="value_of_pages.isOpen == false"
        class="invisible absolute right-0 mr-10 rounded-lg p-2 py-1 pr-3 font-medium opacity-0 transition-all duration-200 after:absolute after:-right-1 after:top-1/2 after:h-3 after:w-3 after:-translate-y-1/2 after:rotate-45 peer-hover:visible peer-hover:opacity-100"
        :class="{
          'cursor-pointer': value_of_pages.isOpen == false,
          'bg-primary text-white after:bg-primary': current_page == 'Home',
          'bg-white text-primary after:bg-white': current_page == 'About',
        }"
      >
        {{ value_of_pages.name }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/stores/index";

// Variabel
const store = useStore();
const current_page = computed(() => {
  return store.current_page;
});
const pages = ref([
  {
    name: "Home",
    icon: "ph:house-simple-fill",
    isOpen: true,
  },
  {
    name: "About",
    icon: "material-symbols:person",
    isOpen: false,
  },
  {
    name: "Experiences",
    icon: "mdi:file-document",
    isOpen: false,
  },
  {
    name: "Projects",
    icon: "material-symbols:folder-open-rounded",
    isOpen: false,
  },
  {
    name: "Contact",
    icon: "bxs:contact",
    isOpen: false,
  },
]);

// Function
const navigation_page = (id) => {
  for (let i = 0; i < pages.value.length; i++) {
    if (id == i) {
      pages.value[i].isOpen = true;
      store.current_page = pages.value[i].name;
    } else {
      pages.value[i].isOpen = false;
    }
  }
};
</script>
