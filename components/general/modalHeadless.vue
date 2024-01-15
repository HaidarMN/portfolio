<template>
  <div
    class="group h-40 w-full cursor-pointer rounded-lg bg-secondary/50 bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${image})` }"
    @click="toggleModal"
  >
    <div
      class="flex h-full flex-col items-center justify-center rounded-lg bg-black/70 px-4 py-2 opacity-100 transition-all duration-200 ease-in-out group-hover:opacity-100 lg:opacity-0"
    >
      <span class="text-center text-xl font-bold text-white">{{ title }}</span>
      <span
        class="text-center text-sm font-medium text-secondary md:text-base"
        >{{ type }}</span
      >
    </div>
  </div>

  <Dialog :open="is_open" @close="toggleModal" class="relative z-50">
    <div class="fixed inset-0 bg-black/50" @click="toggleModal" />

    <div class="fixed inset-0 w-screen overflow-y-auto">
      <div class="flex min-h-full items-center justify-center p-4">
        <DialogPanel class="w-[calc(100vw-25rem)] rounded bg-white p-4">
          <DialogTitle
            as="div"
            class="mb-4 flex w-full flex-row items-center justify-between"
          >
            <h2 class="text-xl font-semibold text-primary">
              {{ title }}
            </h2>
            <Icon
              name="ic:round-close"
              class="cursor-pointer text-xl"
              @click="toggleModal"
            />
          </DialogTitle>

          <DialogDescription as="div" class="flex flex-row items-start gap-4">
            <img :src="image" :alt="title" class="w-1/3" />
            <div class="flex min-h-max w-2/3 flex-col justify-between gap-4">
              {{ description }}

              <NuxtLink
                v-if="!!link"
                :to="link"
                target="_blank"
                class="group flex w-fit cursor-pointer flex-row items-center gap-1 hover:text-primary focus:border-none focus:outline-none"
              >
                {{ split_link?.[2] }}
                <Icon
                  name="ic:round-arrow-outward"
                  class="transition-transform group-hover:-translate-y-1 group-hover:scale-110"
                  size="15px"
                />
              </NuxtLink>
            </div>
          </DialogDescription>
        </DialogPanel>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import { ref, defineProps, computed } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";

// Variabel
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
const is_open = ref(false);
const split_link = computed(() => props.link.split("/"));

// Function
function toggleModal() {
  is_open.value = !is_open.value;
}
</script>

<style lang="scss" scoped></style>
