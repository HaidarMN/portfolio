<template>
  <div class="content mt-10 flex flex-col gap-8 bg-black">
    <div
      class="flex h-full flex-col gap-14 rounded-lg bg-gray/10 px-4 py-8 pb-8 shadow md:px-8 md:py-4"
    >
      <div class="flex flex-col gap-4">
        <h2 class="text-lg tracking-[0.25rem] text-secondary">ABOUT</h2>
        <div
          class="flex flex-col items-start gap-2 md:flex-row md:gap-6 lg:gap-10"
        >
          <img
            :src="profile.img"
            class="mx-auto h-60 w-60 rounded-lg bg-cover bg-center bg-no-repeat grayscale-0 hover:grayscale-0 md:mx-0 md:grayscale"
          />

          <div class="flex w-full flex-col gap-6 md:w-4/5">
            <p class="text-base text-white md:text-lg">
              I'm a frontend web developer proficient in Vue.js, Vite.js, or
              Nuxt.js and use Bootstrap 5 or TailwindCSS to accelerate web
              development.
            </p>
            <!-- <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div
                v-for="value_of_about in about"
                :key="value_of_about.id"
                class="flex flex-row items-start gap-2"
              >
                <span
                  class="basis-1/3 text-sm font-semibold text-primary md:text-xl"
                  >{{ value_of_about.title }}</span
                >
                <span class="basis-2/3 text-sm text-white md:text-xl"
                  ><span class="text-sm font-semibold text-primary md:text-xl"
                    >:</span
                  >
                  {{ value_of_about.value }}</span
                >
              </div>
            </div> -->
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-lg tracking-[0.25rem] text-secondary">CERTIFICATES</h2>
        <div
          class="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-10"
        >
          <NuxtLink
            v-for="value_of_certificate in certificates"
            :key="value_of_certificate.id"
            :to="value_of_certificate.credential"
            target="_blank"
            class="group h-36 w-full cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat"
            :style="{ backgroundImage: `url(${value_of_certificate.image})` }"
          >
            <div
              class="flex h-full flex-col items-center justify-center gap-2 bg-black/70 px-4 py-2 opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100"
            >
              <span class="text-center font-bold text-white">{{
                value_of_certificate.name
              }}</span>
              <span class="text-center text-sm font-medium text-secondary">{{
                value_of_certificate.provider
              }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-lg tracking-[0.25rem] text-secondary">SKILLS</h2>
        <div
          class="grid grid-cols-2 justify-items-center gap-4 md:grid-cols-4 md:gap-10 lg:grid-cols-5"
        >
          <div
            v-for="value_of_skill in skills"
            :key="value_of_skill.id"
            class="flex h-24 w-24 items-center justify-center rounded-full bg-black p-6 md:h-32 md:w-32 md:p-8"
          >
            <Icon
              :name="value_of_skill.icon"
              class="text-primary"
              size="100%"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { firestoreDB } from "~/server/lib/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { ref } from "vue";

// Variabel
const about = ref([]);
const profile = ref([]);
const skills = ref([]);
const certificates = ref([]);
const certificate_query = query(
  collection(firestoreDB, "Certificate"),
  orderBy("date", "desc"),
);

// Function
const getDataAbout = onSnapshot(
  collection(firestoreDB, "About"),
  (querySnapshot) => {
    about.value = [];
    querySnapshot.forEach((doc) => {
      var response = {
        id: doc.id,
        title: doc.data().title,
        value: doc.data().value,
      };
      about.value.push(response);
    });
  },
);
const getDataProfile = onSnapshot(
  collection(firestoreDB, "Profile"),
  (querySnapshot) => {
    profile.value = [];
    querySnapshot.forEach((doc) => {
      var response = {
        id: doc.id,
        img: doc.data().img,
      };
      profile.value = response;
    });
  },
);
const getDataSkill = onSnapshot(
  collection(firestoreDB, "Skill"),
  (querySnapshot) => {
    skills.value = [];
    querySnapshot.forEach((doc) => {
      var response = {
        id: doc.id,
        name: doc.data().name,
        icon: doc.data().icon,
      };
      skills.value.push(response);
    });
  },
);
const getDataCertificate = onSnapshot(certificate_query, (querySnapshot) => {
  certificates.value = [];
  querySnapshot.forEach((doc) => {
    var response = {
      id: doc.id,
      name: doc.data().name,
      provider: doc.data().provider,
      credential: doc.data().credential,
      image: doc.data().image,
    };
    certificates.value.push(response);
  });
});
</script>

<style lang="scss" scoped></style>
