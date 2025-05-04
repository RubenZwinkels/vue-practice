Vue.createApp({
	data() {
		return {
			text: "",
		};
	},
	methods: {
		show_alert() {
			alert("Wat goed dat je geklikt hebt");
		},
		register_text(event) {
			this.text = event.target.value;
		},
	},
}).mount("#assignment");
