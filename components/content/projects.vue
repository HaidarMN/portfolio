<template>
  <div class="content mt-10 flex min-w-full flex-col gap-10 bg-black">
    <div
      class="flex h-full flex-col gap-14 rounded-lg bg-gray/10 px-4 py-8 pb-8 shadow md:px-8 md:py-4"
    >
      <div class="flex flex-col gap-4">
        <h2 class="text-lg tracking-[0.25rem] text-secondary">PROJECTS</h2>
        <!-- <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <GeneralModalHeadless
            v-for="value_of_project in projects"
            :key="value_of_project.id"
            :title="value_of_project.name"
            :type="value_of_project.type"
            :image="value_of_project.background"
            :link="value_of_project.link"
            :description="value_of_project.desc"
          />
        </div> -->
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <NuxtLink
            v-for="value_of_project in projects"
            :key="value_of_project.id"
            :to="value_of_project.link"
            target="_blank"
            class="group flex flex-col items-start gap-2"
          >
            <div
              class="flex flex-row items-center gap-1 text-white group-hover:text-primary"
            >
              <h2 class="text-xl font-semibold">
                {{ value_of_project.name }}
              </h2>
              <Icon
                name="ic:round-arrow-outward"
                class="!hidden text-lg transition-transform group-hover:-translate-y-1 group-hover:scale-110 md:!block"
              />
            </div>

            <div class="flex w-full flex-col items-start gap-4 md:flex-row">
              <img
                :src="value_of_project.background"
                :alt="value_of_project.name"
                class="w-full rounded-lg md:w-1/3"
              />
              <div
                class="flex h-full w-full flex-col items-start justify-between gap-2 md:w-2/3"
              >
                <p class="text-gray">{{ value_of_project.desc }}</p>
                <div class="flex flex-row flex-wrap items-center gap-2">
                  <div
                    v-for="(skill, index_skill) in value_of_project.skills"
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
                v-for="(header, index) in table_header"
                :key="index"
                class="px-2 pb-4 text-left font-bold text-primary"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(body, index_body) in table_body"
              :key="body?.id"
              class="border-b border-gray"
            >
              <td
                v-for="(value_of_body, index) in body"
                :key="index"
                class="px-2 py-4 text-sm lg:text-base"
                :class="
                  index === 'Project' ? 'font-semibold text-white' : 'text-gray'
                "
                :data-label="index"
              >
                <NuxtLink
                  v-if="index == 'Link'"
                  :to="value_of_body"
                  target="_blank"
                  class="group flex cursor-pointer flex-row items-center gap-1 hover:text-primary"
                >
                  {{ value_of_body?.split("/")?.[2] }}
                  <Icon
                    name="ic:round-arrow-outward"
                    class="transition-transform group-hover:-translate-y-1 group-hover:scale-110"
                    size="15px"
                  />
                </NuxtLink>
                <div
                  v-else-if="index === 'Built with'"
                  class="flex flex-row flex-wrap items-center justify-center gap-2 md:justify-normal"
                >
                  <div
                    v-for="(skill, index_skill) in value_of_body"
                    :key="index_skill"
                    class="rounded-full bg-primary/20 px-2 py-1 text-xs font-medium text-primary md:px-2.5 md:py-1.5"
                  >
                    {{ skill }}
                  </div>
                </div>
                <span v-else>
                  {{ value_of_body }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
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
  limit,
  where,
} from "firebase/firestore";
import { ref } from "vue";

// Variabel
const projects = ref([]);
const all_projects = ref([]);
const q_projects = query(
  collection(firestoreDB, "Projects"),
  limit(4),
  where("display", "==", true),
  orderBy("timestamp", "desc"),
);
const q_all_projects = query(
  collection(firestoreDB, "Projects"),
  orderBy("timestamp", "desc"),
);
const table_header = ref(["Year", "Project", "Built with", "Link"]);
const table_body = computed(() => {
  return all_projects.value.map(({ timestamp, name, skills, link }) => {
    return {
      Year: timestamp,
      Project: name,
      "Built with": skills,
      Link: link,
    };
  });
});

// Function
const getDataProjects = onSnapshot(q_projects, (querySnapshot) => {
  projects.value = [];
  querySnapshot.forEach((doc) => {
    var response = {
      id: doc.id,
      name: doc.data().name,
      background: doc.data().background,
      link: doc.data().link,
      type: doc.data().type,
      desc: doc.data().desc,
      skills: doc.data().skills,
      timestamp: doc.data().timestamp?.toDate()?.getFullYear(),
    };
    projects.value.push(response);
  });
});
const getDataAll = onSnapshot(q_all_projects, (querySnapshot) => {
  all_projects.value = [];
  querySnapshot.forEach((doc) => {
    var response = {
      id: doc.id,
      name: doc.data().name,
      link: doc.data().link,
      skills: doc.data().skills,
      timestamp: doc.data().timestamp?.toDate()?.getFullYear(),
    };
    all_projects.value.push(response);
  });
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
