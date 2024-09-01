<template>
  <div
    class="fixed bottom-10 left-14 hidden flex-col items-center justify-between gap-4 lg:flex"
  >
    <NuxtLink
      v-for="value_of_contact in contactsList"
      :key="value_of_contact.label"
      :to="value_of_contact.url"
      :aria-label="value_of_contact.label"
      target="_blank"
      class="relative flex flex-row items-center gap-2"
    >
      <Icon
        :name="value_of_contact.icon"
        size="25px"
        class="peer text-primary"
      />
      <span
        class="invisible absolute left-0 ml-10 min-w-max rounded-lg bg-primary py-1 pl-2.5 pr-2 text-sm font-medium text-white opacity-0 transition-all duration-200 after:absolute after:-left-1 after:top-1/2 after:h-3 after:w-3 after:-translate-y-1/2 after:rotate-45 after:bg-primary peer-hover:visible peer-hover:opacity-100"
      >
        {{ value_of_contact.label }}
      </span>
    </NuxtLink>
    <div class="h-10 w-0.5 bg-primary" />
  </div>
</template>

<script setup>
import { ref } from "vue";

// Variabel
const contactsList = ref([
  {
    label: "WhatsApp",
    icon: "ic:round-whatsapp",
    url: "https://wa.me/6285235118859",
  },
  {
    label: "eMail",
    icon: "material-symbols:mail-rounded",
    url: "mailto:haidarmn31@gmail.com",
  },
  {
    label: "LinkedIn",
    icon: "mdi:linkedin",
    url: "https://www.linkedin.com/in/haidar-muhammad-naufal",
  },
  {
    label: "Github",
    icon: "mdi:github",
    url: "https://github.com/HaidarMN",
  },
  {
    label: "Instagram",
    icon: "mdi:instagram",
    url: "https://www.instagram.com/zev_alarick",
  },
]);
</script>
