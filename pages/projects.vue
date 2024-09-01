<template>
  <div class="content mt-10 flex min-w-full flex-col gap-10 bg-black">
    <div
      class="flex h-full flex-col gap-14 rounded-lg bg-gray/10 px-4 py-8 pb-8 shadow md:px-8 md:py-4"
    >
      <div class="flex flex-col gap-4">
        <h2 class="text-lg tracking-[0.25rem] text-secondary">PROJECTS</h2>

        <div
          v-if="selectedProjects.length === 0"
          class="grid grid-cols-1 gap-4 lg:grid-cols-2"
        >
          <div
            v-for="x in 4"
            :key="x"
            class="flex animate-pulse flex-col items-start gap-2"
          >
            <div class="h-6 w-full rounded-full bg-secondary md:w-80"/>

            <div class="flex w-full flex-col items-start gap-4 md:flex-row">
              <div class="h-40 w-full rounded-lg bg-secondary md:w-1/3"/>
              <div
                class="flex h-full w-full flex-col items-start justify-normal gap-10 md:w-2/3 md:justify-between md:gap-2"
              >
                <div class="flex w-full flex-col gap-2">
                  <div class="h-4 w-full rounded-full bg-secondary"/>
                  <div class="h-4 w-full rounded-full bg-secondary"/>
                  <div class="h-4 w-full rounded-full bg-secondary"/>
                </div>

                <div class="flex flex-row flex-wrap items-center gap-2">
                  <div
                    v-for="y in 3"
                    :key="y"
                    class="h-6 w-20 rounded-full bg-secondary px-2 py-1 md:px-2.5 md:py-1.5"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <NuxtLink
            v-for="project in selectedProjects"
            :key="project.id"
            :to="project.link"
            target="_blank"
            class="group flex flex-col items-start gap-2"
          >
            <div
              class="flex flex-row items-center gap-1 text-white group-hover:text-primary"
            >
              <h2 class="text-xl font-semibold">
                {{ project.name }}
              </h2>
              <Icon
                v-if="project.link"
                name="ic:round-arrow-outward"
                class="!hidden text-lg transition-transform group-hover:-translate-y-1 group-hover:scale-110 md:!block"
              />
            </div>

            <div class="flex w-full flex-col items-start gap-4 md:flex-row">
              <img
                :src="project.background"
                :alt="project.name"
                class="w-full rounded-lg md:w-1/3"
              >
              <div
                class="flex h-full w-full flex-col items-start justify-between gap-2 md:w-2/3"
              >
                <p class="text-gray">{{ project.description }}</p>
                <div class="flex flex-row flex-wrap items-center gap-2">
                  <div
                    v-for="(skill, index_skill) in project.skills"
                    :key="index_skill"
                    class="rounded-full bg-primary/20 px-2 py-1 text-xs font-medium text-primary md:px-2.5 md:py-1.5"
                  >
                    {{ skill }}
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-lg tracking-[0.25rem] text-secondary">ALL PROJECTS</h2>
        <table class="w-full table-auto">
          <thead>
            <tr class="border-b border-gray">
              <th
                v-for="(header, index) in tableHeader"
                :key="index"
                class="px-2 pb-4 text-left font-bold text-primary"
              >
                {{ header }}
              </th>
            </tr>
          </thead>

          <tbody v-if="allProjects.length === 0">
            <tr
              v-for="x in 3"
              :key="x"
              class="animate-pulse border-b border-gray text-gray"
            >
              <td class="px-2 py-4" data-label="Year">
                <div class="h-4 w-full rounded-full bg-secondary"/>
              </td>
              <td class="px-2 py-4" data-label="Project">
                <div class="h-4 w-full rounded-full bg-secondary lg:w-96"/>
              </td>
              <td class="px-2 py-4" data-label="Built with">
                <div
                  class="flex flex-row flex-wrap items-center justify-center gap-2 md:justify-normal"
                >
                  <div
                    v-for="y in 3"
                    :key="y"
                    class="h-6 w-20 rounded-full bg-secondary px-2 py-1 md:px-2.5 md:py-1.5"
                    />
                </div>
              </td>
              <td class="px-2 py-4">
                <div class="h-4 w-full rounded-full bg-secondary"/>
              </td>
            </tr>
          </tbody>

          <tbody v-else>
            <tr
              v-for="data in allProjects"
              :key="data?.id"
              class="border-b border-gray text-gray"
            >
              <td class="px-2 py-4 text-sm lg:text-base" data-label="Year">
                {{ data.start_date }}
              </td>
              <td
                class="px-2 py-4 text-sm font-semibold text-white lg:text-base"
                data-label="Project"
              >
                {{ data.name }}
              </td>
              <td class="px-2 py-4" data-label="Built with">
                <div
                  class="flex flex-row flex-wrap items-center justify-center gap-2 md:justify-normal"
                >
                  <div
                    v-for="(skill, index_skill) in data.skills"
                    :key="index_skill"
                    class="rounded-full bg-primary/20 px-2 py-1 text-xs font-medium text-primary md:px-2.5 md:py-1.5"
                  >
                    {{ skill }}
                  </div>
                </div>
              </td>
              <td class="px-2 py-4 text-sm lg:text-base">
                <NuxtLink
                  v-if="data.link"
                  :to="data.link"
                  target="_blank"
                  class="group flex cursor-pointer flex-row items-center gap-1 hover:text-primary"
                >
                  {{ data.link.toString().split("/")[2] }}
                  <Icon
                    name="ic:round-arrow-outward"
                    class="transition-transform group-hover:-translate-y-1 group-hover:scale-110"
                    size="15px"
                  />
                </NuxtLink>
                <span v-else>Private project</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

import { firestoreDB } from "~/server/lib/firebase";
import { collection, orderBy, query, getDocs } from "firebase/firestore";

import type { ProjectType } from "~/types";

// Variabel
const selectedProjects = ref<ProjectType[]>([]);
const allProjects = ref<ProjectType[]>([]);
const dataQuery = query(
  collection(firestoreDB, "projects"),
  orderBy("start_date", "desc"),
);
const tableHeader = ref(["Year", "Project", "Built with", "Link"]);

// Function
const getData = async () => {
  try {
    const response = await getDocs(dataQuery);
    response.forEach((doc) => {
      const data: ProjectType = {
        id: doc.id,
        background: doc.data().background,
        description: doc.data().description,
        display: doc.data().display,
        link: doc.data().link,
        name: doc.data().name,
        skills: doc.data().skills,
        start_date: doc.data().start_date?.toDate()?.getFullYear(),
      };

      if (doc.data().display) {
        selectedProjects.value.push(data);
      }
      allProjects.value.push(data);
    });
  } catch (error) {
    console.error(error);
    
  }
};

onMounted(() => {
  getData();
});
</script>

<style lang="scss" scoped>
@media screen and (max-width: 640px) {
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }

  table tr {
    border-bottom: 2px solid #acb5ac;
    display: block;
    margin-bottom: 1rem;
  }

  table td {
    border-bottom: 1px solid #acb5ac;
    display: flex;
    // font-size: 0.8em;
    text-align: right;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  }

  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: 500;
    text-transform: uppercase;
    text-align: left;
    color: #ff7f11;
  }

  table td:last-child {
    border-bottom: 0;
  }
}
</style>
