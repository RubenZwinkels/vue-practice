Vue.createApp({
	data() {
		return {
			name: "Ruubje",
			age: 30,
			image_url: "https://cdn.webshopapp.com/shops/313565/files/416212946/de-eekhoorn-in-the-picture.jpg",
		};
	},
	methods: {
		random_num(){
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        return 0;
      } else {
        return 1;
      }
    },
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
