<template>
  <div
    class="flex h-[calc(100vh-4rem)] w-screen flex-col items-center justify-center gap-10 px-6"
  >
    <h1 class="text-center text-4xl font-bold text-primary lg:text-6xl">
      Haidar Muhammad Naufal
    </h1>
    <h2 class="text-lg font-medium text-white md:text-2xl">
      FULL STACK DEVELOPER
    </h2>
    <button
    class="group relative inline-flex items-center justify-start overflow-hidden rounded-lg border-2 border-primary transition-all"
      @click="goToProjects"
    >
      <span
        class="absolute left-0 top-0 -z-10 h-full w-0 bg-primary transition-all duration-300 group-hover:w-full"
        />
      <span class="z-10 p-4 text-base font-medium text-white md:text-xl"
        >Checkout My Projects</span
      >
    </button>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();

const goToProjects = () => {
  router.push("/projects");
};
</script>

<style lang="scss" scoped>
.icon {
  color: #acb5ac;
}

.icon:hover {
  color: #ff7f11;
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
