const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      otherInput: ''
    }
  },
  methods: {
    randomAlert() {
      alert('Something happens');
    },
    updateInput(event) {
      this.userInput = event.target.value;
    },
    enterInput(event) {
      this.otherInput = event.target.value;
    }
  }
});

app.mount('#assignment');