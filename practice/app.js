const app = Vue.createApp({
  data() {
    return {
      score: {
        a: 0,
        b: 0
      },
      teams: {
        a: 'Team A',
        b: 'Team B'
      }
    }
  },
  methods: {
    scoreUp(team, points) {
      this.score[team] = this.score[team] + points;
    }
  }
});

app.mount('#basketScore');