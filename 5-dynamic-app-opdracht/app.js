Vue.createApp({
	data() {
		return {
			text1: "",
			text2: "",
		};
	},
	methods: {
		show_alert() {
			alert("Wat goed dat je geklikt hebt");
		},
		register_text(event, enter) {
			if (enter == 0) {
				this.text1 = event.target.value;
			}
			if (enter == 1) {
				this.text2 = event.target.value;
			}
		},
	},
}).mount("#assignment");
