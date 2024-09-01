<template>
  <div
    class="flex w-full items-center justify-center p-4 text-center text-xs text-white md:text-base"
  >
    Copyright &copy; {{ year }} Haidar Muhammad Naufal
  </div>
</template>

<script setup>
const year = ref(new Date().getFullYear());
</script>
