<template>
  <div class="content mt-10 flex min-w-full flex-col gap-10 bg-black">
    <div
      class="flex h-full flex-col gap-14 rounded-lg bg-gray/10 px-8 py-4 pb-8 shadow"
    >
      <div class="flex flex-col gap-4">
        <h2 class="text-lg tracking-[0.25rem] text-secondary">PROJECTS</h2>
        <div class="grid grid-cols-4 gap-4">
          <NuxtLink
            v-for="value_of_project in non_personal_projects"
            :key="value_of_project.id"
            :to="value_of_project.link"
            target="_blank"
            class="group h-40 w-full cursor-pointer rounded-lg bg-secondary/50 bg-cover bg-center bg-no-repeat"
            :style="{ backgroundImage: `url(${value_of_project.background})` }"
          >
            <div
              class="flex h-full flex-col items-center justify-center rounded-lg bg-black/70 px-4 py-2 opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100"
            >
              <span class="text-center text-xl font-bold text-white">{{
                value_of_project.name
              }}</span>
              <span class="text-center font-medium text-secondary">{{
                value_of_project.type
              }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-lg tracking-[0.25rem] text-secondary">
          PERSONAL PROJECTS
        </h2>
        <div class="grid grid-cols-4 gap-4">
          <NuxtLink
            v-for="value_of_project in personal_projects"
            :key="value_of_project.id"
            :to="value_of_project.link"
            target="_blank"
            class="group h-40 w-full cursor-pointer rounded-lg bg-secondary/50 bg-cover bg-center bg-no-repeat"
            :style="{ backgroundImage: `url(${value_of_project.background})` }"
          >
            <div
              class="flex h-full flex-col items-center justify-center rounded-lg bg-black/70 px-4 py-2 opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100"
            >
              <span class="text-center text-xl font-bold text-white">{{
                value_of_project.name
              }}</span>
              <span class="text-center font-medium text-secondary">{{
                value_of_project.type
              }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { firestoreDB } from "~/server/lib/firebase";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { ref } from "vue";

// Variabel
const personal_projects = ref([]);
const non_personal_projects = ref([]);
const q_personal = query(
  collection(firestoreDB, "Projects"),
  where("personal", "==", true),
  orderBy("timestamp", "desc"),
);
const q_non_personal = query(
  collection(firestoreDB, "Projects"),
  where("personal", "==", false),
  orderBy("timestamp", "desc"),
);

// Function
const getDataPersonal = onSnapshot(q_personal, (querySnapshot) => {
  personal_projects.value = [];
  querySnapshot.forEach((doc) => {
    var response = {
      id: doc.id,
      name: doc.data().name,
      background: doc.data().background,
      link: doc.data().link,
      type: doc.data().type,
      timestamp: doc.data().timestamp,
    };
    personal_projects.value.push(response);
  });
});
const getDataNonPersonal = onSnapshot(q_non_personal, (querySnapshot) => {
  non_personal_projects.value = [];
  querySnapshot.forEach((doc) => {
    var response = {
      id: doc.id,
      name: doc.data().name,
      background: doc.data().background,
      link: doc.data().link,
      type: doc.data().type,
      timestamp: doc.data().timestamp,
    };
    non_personal_projects.value.push(response);
  });
});
</script>

<style lang="scss" scoped></style>
