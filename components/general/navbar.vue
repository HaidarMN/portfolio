<template>
  <nav
    class="fixed top-0 z-40 flex w-screen flex-row items-center justify-between bg-black px-8 py-4 lg:px-20"
  >
    <NuxtLink
      to="/"
      class="cursor-pointer text-xl font-bold text-primary md:text-2xl"
    >
      HaidarMN
    </NuxtLink>

    <div
      class="absolute left-1/2 hidden -translate-x-1/2 flex-row items-center gap-8 lg:flex"
    >
      <NuxtLink
        v-for="navbar in navbarMenu"
        :key="navbar.label"
        :to="navbar.url"
        class="group relative"
      >
        <span class="cursor-pointer font-medium uppercase text-white">
          {{ navbar.label }}
        </span>
        <span
          class="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-3/5"
          :class="route.path === navbar.url ? 'w-3/5' : ''"
        />
      </NuxtLink>
    </div>

    <div class="relative flex lg:hidden">
      <Icon
        name="ic:round-menu"
        size="25px"
        class="cursor-pointer text-white"
        @click="openMenu = !openMenu"
      />
      <div
        class="fixed top-0 z-50 flex h-screen flex-col bg-black px-4 py-10 shadow-lg transition-all duration-500 ease-in-out"
        :class="openMenu ? 'right-0 w-60 md:w-[50vw]' : '-right-10 w-0'"
      >
        <div class="flex flex-col gap-4">
          <div class="flex w-full flex-row items-center justify-between">
            <Icon
              name="material-symbols-light:close-rounded"
              size="25px"
              class="cursor-pointer text-white"
              @click="openMenu = !openMenu"
            />
            <NuxtLink
              class="text-right text-base font-medium uppercase md:text-lg"
              :class="route.path === '/' ? 'text-primary' : 'text-white'"
              to="/"
              >Home</NuxtLink
            >
          </div>

          <NuxtLink
            v-for="(navbar, index) in navbarMenu"
            :key="index"
            class="text-right text-base font-medium uppercase md:text-lg"
            :class="route.path === navbar.url ? 'text-primary' : 'text-white'"
            :to="navbar.url"
            >{{ navbar.label }}</NuxtLink
          >
        </div>

        <div
          class="mt-20 flex w-full flex-row items-center justify-between gap-4"
        >
          <NuxtLink
            v-for="contact in contactsList"
            :key="contact.id"
            :to="contact.url"
            :aria-label="contact.label"
            target="_blank"
          >
            <Icon :name="contact.icon" size="25px" class="peer text-primary" />
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      v-if="openMenu"
      class="fixed inset-0 z-40 h-screen w-screen bg-black/80"
      @click="openMenu = false"
    />
  </nav>
</template>

<script setup>
import { ref } from "vue";

// Variabel
const route = useRoute();
const navbarMenu = ref([
  { label: "ABOUT", url: "/about" },
  { label: "EXPERIENCES", url: "/experiences" },
  { label: "PROJECTS", url: "/projects" },
]);
const openMenu = ref(false);
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
