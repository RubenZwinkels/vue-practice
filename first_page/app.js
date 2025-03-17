//const buttonEl = document.querySelector("button");
//const inputEl = document.querySelector("input");
//const listEl = document.querySelector("ul");
//
//buttonEl.addEventListener("click", addGoalToList);
//
//function addGoalToList() {
//const inputValue = inputEl.value;
//const listItemEl = document.createElement("li");
//listItemEl.textContent = inputValue;
//listEl.appendChild(listItemEl);
//inputEl.value = "";
//}

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
		}
	}
}).mount("#app");
