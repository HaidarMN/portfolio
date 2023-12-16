import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    current_page: "Home",
  }),
});
