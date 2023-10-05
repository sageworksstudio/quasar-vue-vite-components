import { defineStore } from "pinia";

export const useApplication = defineStore("application", {
  state: () => ({
    drawer: false,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    setDrawer() {
      this.drawer = !this.drawer;
    },
  },
});
