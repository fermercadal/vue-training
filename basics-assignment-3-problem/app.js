const app = Vue.createApp({
  data() {
    return {
      counter: 0
    };
  },
  watch: {
    outputMessage() {
      const that = this;
      setTimeout(() => {
        that.counter = 0;
      }, 5000);
    }
  },
  computed: {
    outputMessage() {
      if(this.counter > 37) {
        return 'To much!';
      } else if (this.counter === 37) {
        return this.counter;
      } else {
        return 'Not there yet..'
      }
    }
  },
  methods: {
    addNumber(num) {
      this.counter = this.counter + num;
    }
  }
});

app.mount('#assignment');