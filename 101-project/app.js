const app = Vue.createApp({
  data() {
    return {
      courseGoalIntro: 'Finish the course and ',
      courseGoalA: 'learn Vue',
      courseGoalB: 'master Vue',
      vueLink: 'https://vuejs.org/'
    }
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if(randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
});

app.mount('#user-goal');