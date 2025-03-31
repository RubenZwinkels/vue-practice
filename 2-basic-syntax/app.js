const app = Vue.createApp({
  data() {
    return {
      courseGoal: "doeltje!",
      vueLink: "https://google.com",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        return "taakje 1";
      } else {
        return "taakje 2!";
      }
    },
  },
});
app.mount("#user-goal");

//console.log(outputgoal());
