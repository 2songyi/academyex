'use strict'

Vue.component('child-component', {
  template: '<button class="g-btn" v-on:click="showLog">show</button>',
  methods: {
    showLog: function(){
      console.log('show log');
      this.$emit('my-log'); //바깥으로 내보냄
      //emit쓰고 이걸 써주면 밑에 app에 정의해준 이벤트 사용 가능
    }
  }
});

let app = new Vue({
  el: '#app',
  methods: {
    showTest: function(){
      console.log('click test');
    }
  }
});
