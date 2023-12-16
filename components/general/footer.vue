<template>
  <div
    class="flex w-full items-center justify-center p-4 text-center text-white"
  >
    Copyright &copy; {{ year }} Haidar Muhammad Naufal
  </div>
</template>

<script setup>
const year = ref(new Date().getFullYear());
</script>

<style lang="scss" scoped></style>
