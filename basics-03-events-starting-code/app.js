const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  computed: {
    fullname() {
      if(this.name === '') {
        return '';
      } 
      return this.name + ' ' + 'Skywalker';
    }
  },
  methods: {
    submitForm(event) {
      alert('Submitted');
    },
    resetInput() {
      this.name = ''
    }
    ,
    confirmName() {
      this.confirmedName = this.name;
    },
    setName(event, other) {
      this.name = event.target.value + ' and ' + other;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
