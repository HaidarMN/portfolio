<template>
  <div class="content mt-10 flex flex-col gap-8 bg-black">
    <div
      class="flex h-full flex-col gap-14 rounded-lg bg-gray/10 px-8 py-4 pb-8 shadow"
    >
      <div class="flex flex-col gap-4">
        <h2 class="text-lg tracking-[0.25rem] text-secondary">EXPERIENCES</h2>
        <div class="flex flex-col gap-8">
          <div
            v-for="value_of_experience in experience"
            :key="value_of_experience.id"
            class="flex flex-col items-start gap-2"
          >
            <span class="text-sm text-gray">{{
              value_of_experience.date
            }}</span>
            <NuxtLink
              :to="value_of_experience.link"
              class="group flex flex-row items-center gap-2.5 text-2xl font-bold text-primary"
              target="_blank"
            >
              {{ value_of_experience.position }}
              <Icon name="octicon:dot-fill-24" size="10px" />
              {{ value_of_experience.location }}
              <Icon
                v-if="!!value_of_experience.link"
                name="bi:box-arrow-up-right"
                class="transition-all group-hover:-translate-y-1 group-hover:scale-110"
                size="15px"
              />
            </NuxtLink>
            <p class="mb-2 text-white">{{ value_of_experience.desc }}</p>
            <div class="flex flex-row gap-4">
              <div
                v-for="(skill, index) in value_of_experience.skills"
                :key="index"
                class="rounded-full bg-primary/20 px-2.5 py-1.5 text-xs font-medium text-primary"
              >
                {{ skill }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { firestoreDB } from "~/server/lib/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { ref } from "vue";

// Variabel
const experience = ref([]);
const q = query(
  collection(firestoreDB, "Experience"),
  orderBy("timestamp", "desc"),
);

// Function
const getDataExperience = onSnapshot(q, (querySnapshot) => {
  experience.value = [];
  querySnapshot.forEach((doc) => {
    var response = {
      id: doc.id,
      date: doc.data().date,
      position: doc.data().position,
      location: doc.data().location,
      link: doc.data().link,
      desc: doc.data().desc,
      skills: doc.data().skills,
    };
    experience.value.push(response);
  });
});
</script>

<style lang="scss" scoped></style>
