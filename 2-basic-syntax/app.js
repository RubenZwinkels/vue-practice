const app = Vue.createApp({
  data() {
    return {
			courseGoalA: "doeltje A :)",
			courseGoalB: "doeltje B ;D",
      vueLink: "https://google.com",
			htmlGoal: "<h1>My course goals</h1>",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});
app.mount("#user-goal");

