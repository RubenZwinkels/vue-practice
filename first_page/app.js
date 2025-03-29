Vue.createApp({
	data() {
		return {
			goals: [],
			enteredValue: "",
		};
	},
	methods: {
		addGoal() {
			this.goals.push(this.enteredValue);
		},
		delGoal(index){
			this.goals.splice(index, 1);
		}
	}
}).mount("#app");
