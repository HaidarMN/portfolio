<template>
  <div class="content mt-10 flex flex-col gap-8 bg-black">
    <div
      class="flex h-full flex-col gap-14 rounded-lg bg-gray/10 px-4 py-8 pb-8 shadow md:px-8 md:py-4"
    >
      <div class="flex flex-col gap-4">
        <h2 class="text-lg tracking-[0.25rem] text-secondary">ABOUT</h2>
        <div class="flex flex-col items-start gap-2 md:flex-row md:gap-6">
          <NuxtImg
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-4c322.appspot.com/o/avatar%2F20240412_094723.jpg?alt=media&token=e139723a-0f1f-4516-9b3a-3da86a8bc395"
            alt="My image"
            class="mx-auto h-60 w-60 rounded-lg bg-cover bg-center bg-no-repeat grayscale-0 hover:grayscale-0 md:mx-0 md:grayscale"
            quality="80"
            format="webp"
            loading="lazy"
          />

          <p class="w-full text-base text-white md:w-4/5 md:text-lg">
            As a Full Stack Developer, I excel in building dynamic and scalable
            web applications using modern frontend frameworks like Vue.js,
            React.js, Nuxt.js, and Next.js, paired with Node.js for robust
            backend solutions. Proficient in both JavaScript and TypeScript, I
            create seamless user experiences and high-performance applications
            by integrating cutting-edge technologies and best practices. My
            expertise spans from developing intuitive user interfaces to
            crafting efficient server-side solutions, ensuring well-rounded and
            impactful software.
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-lg tracking-[0.25rem] text-secondary">CERTIFICATES</h2>

        <div
          v-if="dataCertificates.length === 0"
          class="grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-2 lg:gap-6"
        >
          <div
            v-for="x in 2"
            :key="x"
            class="flex w-full animate-pulse flex-col items-start gap-4 md:flex-row"
          >
            <div
              class="h-40 w-full rounded-lg bg-secondary object-cover object-center md:w-1/2"
            />

            <div class="flex w-full flex-col gap-2 md:w-1/2">
              <div class="h-6 w-full rounded-full bg-secondary" />
              <div class="h-4 w-full rounded-full bg-secondary" />
              <div class="h-4 w-full rounded-full bg-secondary" />
              <div class="h-4 w-full rounded-full bg-secondary" />
            </div>
          </div>
        </div>

        <div
          v-else
          class="grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-2 lg:gap-6"
        >
          <NuxtLink
            v-for="certificate in dataCertificates"
            :key="certificate.id"
            :to="certificate.credential_url"
            class="group flex w-full flex-col items-start gap-4 md:flex-row"
          >
            <NuxtImg
              :src="certificate.image"
              :alt="certificate.name"
              class="h-40 w-full rounded-lg object-cover object-center md:w-1/2"
              quality="80"
              format="webp"
              loading="lazy"
            />

            <div class="flex w-full flex-col gap-1 md:w-1/2">
              <h3
                class="text-base font-bold text-white group-hover:text-primary md:text-lg"
              >
                {{ certificate.name }}
              </h3>
              <span class="text-sm text-secondary">{{
                certificate.issuing_organization
              }}</span>
              <span class="text-sm text-secondary"
                >Issued {{ certificate.issue_date }}</span
              >
              <span
                v-if="certificate.credential_id"
                class="text-sm text-secondary"
                >Credential ID {{ certificate.credential_id }}</span
              >
            </div>
          </NuxtLink>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-lg tracking-[0.25rem] text-secondary">SKILLS</h2>

        <div
          v-if="dataSkills.length === 0"
          class="grid grid-cols-2 justify-items-center gap-4 md:grid-cols-4 md:gap-10 lg:grid-cols-5"
        >
          <div
            v-for="x in 4"
            :key="x"
            class="flex h-24 w-24 animate-pulse items-center justify-center rounded-full bg-secondary p-6 md:h-32 md:w-32 md:p-8"
          />
        </div>

        <div
          v-else
          class="grid grid-cols-2 justify-items-center gap-4 md:grid-cols-4 md:gap-10 lg:grid-cols-5"
        >
          <div
            v-for="skill in dataSkills"
            :key="skill.id"
            class="flex h-24 w-24 items-center justify-center rounded-full bg-black p-6 md:h-32 md:w-32 md:p-8"
            :title="skill.name"
          >
            <Icon :name="skill.icon" class="text-primary" size="100%" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

import { collection, query, orderBy, getDocs } from "firebase/firestore";

import type { CertificateType, SkillType } from "~/types";

// Variabel
const { $firestoreDB } = useNuxtApp();

const dataSkills = ref<SkillType[]>([]);
const dataCertificates = ref<CertificateType[]>([]);
const skillsQuery = query(
  collection($firestoreDB, "skills"),
  orderBy("order", "asc"),
);
const certificatesQuery = query(
  collection($firestoreDB, "certificates"),
  orderBy("issue_date", "desc"),
);

// Function
const getSkills = async () => {
  try {
    const response = await getDocs(skillsQuery);
    response.forEach((doc) => {
      const data: SkillType = {
        id: doc.id,
        name: doc.data().name,
        icon: doc.data().icon,
      };
      dataSkills.value?.push(data);
    });
  } catch (error) {
    console.error(error);
  }
};
const getCertificates = async () => {
  try {
    const response = await getDocs(certificatesQuery);
    response.forEach((doc) => {
      const date = doc.data().issue_date?.toDate();
      const data: CertificateType = {
        id: doc.id,
        name: doc.data().name,
        issuing_organization: doc.data().issuing_organization,
        issue_date: `${date?.toLocaleString("default", {
          month: "long",
        })} ${date?.getFullYear()}`,
        credential_id: doc.data().credential_id,
        credential_url: doc.data().credential_url,
        image: doc.data().image,
      };
      dataCertificates.value.push(data);
    });
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  getSkills();
  getCertificates();
});
</script>
