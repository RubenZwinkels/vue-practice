Vue.createApp({
	data() {
		return {
			name: "Ruubje",
			age: 30,
		};
	},
	methods: {
		return_age() {
			if (this.age < 30) {
				return `<h3 style="color: pink">${this.age}</h3>`;
			} else if (this.age >= 30 < 60) {
				return `<h2 style="color: red">${this.age}</h2>`;
			} else if (this.age >= 60) {
				return `<h1 style="color: black">${this.age}</h1>`;
			} else {
				return "ongeldige leeftijd";
			}
		},
	},
}).mount("#assignment");
