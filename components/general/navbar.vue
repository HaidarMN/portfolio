<template>
  <div
    class="fixed top-0 z-50 flex w-screen flex-row items-center justify-between bg-black px-8 py-4 lg:px-20"
  >
    <div
      @click="changePage('Home')"
      class="cursor-pointer text-xl font-bold text-primary md:text-2xl"
    >
      HaidarMN
    </div>

    <div
      class="absolute left-1/2 hidden -translate-x-1/2 flex-row items-center gap-8 lg:flex"
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

    <div class="relative flex lg:hidden">
      <Icon
        name="ic:round-menu"
        size="25px"
        class="cursor-pointer text-white"
        @click="open_menu = !open_menu"
      />
      <div
        class="fixed top-0 z-50 flex h-screen flex-col bg-black px-4 py-10 shadow-lg transition-all duration-500 ease-in-out"
        :class="open_menu ? 'right-0 w-60 md:w-[50vw]' : '-right-10 w-0'"
      >
        <div class="flex flex-col gap-4">
          <div class="flex w-full flex-row items-center justify-between">
            <Icon
              name="material-symbols-light:close-rounded"
              size="25px"
              class="cursor-pointer text-white"
              @click="open_menu = !open_menu"
            />
            <span
              class="text-right text-base font-medium uppercase md:text-lg"
              :class="
                store.current_page == 'Home' ? 'text-primary' : 'text-white'
              "
              @click="changePage('Home')"
              >Home</span
            >
          </div>

          <span
            v-for="(navbar, index) in navbar_menu"
            :key="index"
            class="text-right text-base font-medium uppercase md:text-lg"
            :class="
              store.current_page == navbar ? 'text-primary' : 'text-white'
            "
            @click="changePage(navbar)"
            >{{ navbar }}</span
          >
        </div>

        <div
          class="mt-20 flex w-full flex-row items-center justify-between gap-4"
        >
          <NuxtLink
            v-for="value_of_contact in contact"
            :key="value_of_contact.id"
            :to="value_of_contact.path"
            :aria-label="value_of_contact.label"
            target="_blank"
          >
            <Icon
              :name="value_of_contact.icon"
              size="25px"
              class="peer text-primary"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      v-if="open_menu"
      @click="open_menu = false"
      class="fixed inset-0 z-40 h-screen w-screen bg-black/80"
    ></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "~/stores/index";
import { firestoreDB } from "~/server/lib/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import "animate.css";

// Variabel
const store = useStore();
const navbar_menu = ref(["About", "Experiences", "Projects"]);
const open_menu = ref(false);
const contact = ref([]);

// Function
const changePage = (val) => {
  open_menu.value = false;
  store.current_page = val;
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
const getDataContact = onSnapshot(
  collection(firestoreDB, "Contact"),
  (querySnapshot) => {
    contact.value = [];
    querySnapshot.forEach((doc) => {
      var response = {
        id: doc.id,
        label: doc.data().label,
        path: doc.data().path,
        icon: doc.data().icon,
      };
      contact.value.push(response);
    });
  },
);
</script>

<style lang="scss" scoped></style>
