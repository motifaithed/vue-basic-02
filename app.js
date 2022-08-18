const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      accelerator: 5,
      name: ''
    };
  },
  methods:{
    setName(event,lastName){
      this.name = `${event.target.value} ${lastName}` ;
    },
    add(num){
      this.counter += num;
    },
    remove(num){
      if(this.counter > 0){
        if((this.counter - num) < 0){
          this.counter = 0;
        }else{
          this.counter -= num;
        }
      }
    }
  }
});

app.mount('#events');
