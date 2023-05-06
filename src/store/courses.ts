import { defineStore } from "pinia";

export const useCoursesStore = defineStore("courses", {
  state: () => {
    return {
      activeFilter: {
        category: "全部",
        tag: "全部",
        feeType: "全部",
        level: "全部",
      },
    };
  },
});
