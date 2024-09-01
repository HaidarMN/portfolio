<template>
  <div class="content mt-10 flex flex-col gap-8 bg-black">
    <div
      class="flex h-full flex-col gap-14 rounded-lg bg-gray/10 px-4 py-8 pb-8 shadow md:px-8 md:py-4"
    >
      <div class="flex flex-col gap-4">
        <h2 class="text-lg tracking-[0.25rem] text-secondary">EXPERIENCES</h2>

        <div v-if="dataResponse.length === 0" class="flex flex-col gap-8">
          <div
            v-for="x in 3"
            :key="x"
            class="flex animate-pulse flex-col items-start gap-6"
          >
            <div class="flex w-full flex-col gap-2">
              <div class="h-6 w-full rounded-full bg-secondary md:w-80" />

              <div
                class="flex flex-row items-center gap-1 text-sm text-white md:text-base"
              >
                <div class="h-4 w-20 rounded-full bg-secondary" />
                <Icon name="ph:dot-outline-fill" />
                <div class="h-4 w-20 rounded-full bg-secondary" />
              </div>

              <div class="h-4 w-32 rounded-full bg-secondary" />
            </div>

            <div class="flex w-full flex-col gap-2">
              <div
                v-for="y in 2"
                :key="y"
                class="h-4 w-full rounded-full bg-secondary lg:w-[40rem]"
              />
            </div>

            <div class="flex flex-row flex-wrap gap-4">
              <div
                v-for="z in 3"
                :key="z"
                class="h-6 w-20 rounded-full bg-secondary px-2.5 py-1.5"
              />
            </div>
          </div>
        </div>

        <div v-else class="flex flex-col gap-8">
          <div
            v-for="experience in dataResponse"
            :key="experience.id"
            class="flex flex-col items-start gap-4"
          >
            <div class="flex flex-col gap-0.5">
              <NuxtLink
                v-if="experience.company_url"
                :to="experience.company_url"
                class="group text-base font-bold text-primary md:text-2xl"
                target="_blank"
              >
                {{ experience.position }}

                <Icon
                  v-if="!!experience.company_url"
                  name="ic:round-arrow-outward"
                  class="transition-all group-hover:-translate-y-1 group-hover:scale-110"
                  size="15px"
                />
              </NuxtLink>

              <h3 v-else class="text-base font-bold text-primary md:text-2xl">
                {{ experience.position }}
              </h3>

              <div
                class="flex flex-row items-center gap-1 text-sm text-white md:text-base"
              >
                <span v-if="experience.company_name">
                  {{ experience.company_name }}
                </span>
                <Icon
                  v-if="experience.company_name"
                  name="ph:dot-outline-fill"
                />
                <span>{{ experience.type }}</span>
              </div>

              <span class="text-xs text-gray md:text-sm"
                >{{ experience.start_date }} - {{ experience.end_date }}</span
              >
            </div>

            <ul class="list-inside list-disc">
              <li
                v-for="(description, index) in experience.description"
                :key="index"
                class="text-sm text-white md:text-base"
              >
                {{ description }}
              </li>
            </ul>

            <div class="flex flex-row flex-wrap gap-4">
              <div
                v-for="(skill, index) in experience.skills"
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

<script lang="ts" setup>
import { ref, onMounted } from "vue";

import { firestoreDB } from "~/server/lib/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

import type { ExperienceType } from "~/types";

// Variabel
const dataResponse = ref<ExperienceType[]>([]);
const dataQuery = query(
  collection(firestoreDB, "experiences"),
  orderBy("start_date", "desc"),
);

// Function
const getData = async () => {
  try {
    const response = await getDocs(dataQuery);
    response.forEach((doc) => {
      const startDate = doc.data().start_date?.toDate();
      const endDate = doc.data().end_date?.toDate();

      const data: ExperienceType = {
        id: doc.id,
        position: doc.data().position,
        type: doc.data().type,
        company_name: doc.data().company_name,
        company_url: doc.data().company_url,
        start_date: `${startDate?.toLocaleString("default", {
          month: "long",
        })} ${startDate?.getFullYear()}`,
        end_date: endDate
          ? `${endDate?.toLocaleString("default", {
              month: "long",
            })} ${endDate?.getFullYear()}`
          : "Present",
        description: doc.data().description,
        skills: doc.data().skills,
      };

      dataResponse.value.push(data);
    });
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  getData();
});
</script>

<style lang="scss" scoped></style>
