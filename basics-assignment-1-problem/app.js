const app = Vue.createApp({
  data() {
    return {
      myName: 'Fer',
      myAge: 37,
      profilePic: 'https://avatars2.githubusercontent.com/u/36191086?s=460&u=0ca47a2078d36fdd9d736d2221a76a3caf9107e4&v=4'
    }
  },
  methods: {
    plusFive() {
      return this.myAge + 5;
    },
    calculateRandom() {
      return Math.random();
    }
  }
});

app.mount('#assignment');