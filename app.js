const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      accelerator: 5,
      name: '',
      confirmedName:''
    };
  },
  methods:{
    confirmName(){
      this.confirmedName = this.name;
    },
    submitForm(){
      alert('hello world');
    },
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
