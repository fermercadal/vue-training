const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      //fullname: '',
      //confirmedName: ''
    };
  },
  watch: {
    counter(value) {
      if( value > 50) {
        this.counter = 0;
      }
    }
  },
  computed: {
    fullname() {
      if(this.name === '' || this.lastName === '') {
        return '';
      } 
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    submitForm(event) {
      alert('Submitted');
    },
    resetInput() {
      this.name = '';
      this.lastName = '';
    }
    ,
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
