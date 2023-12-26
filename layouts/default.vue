<template>
  <div class="overflow-x-hidden">
    <GeneralNavbar class="z-10" />
    <slot />
    <LazyGeneralSosmed class="z-10" />
    <GeneralFooter />
  </div>
</template>

<script setup></script>

<style>
@import url("~/assets/css/main.css");
</style>
