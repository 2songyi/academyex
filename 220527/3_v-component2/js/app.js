'use strict'
/*실습
: 전역 컴포넌트 생성 후 html에 추가하기*/
Vue.component('header-logo', {
  template: '<h1><a href="index.html">Home</a></h1>'
});
Vue.component('footer-header', {
  template: '<div class="footerheader"><h2><a href="index.html">logo</a></h2></div>'
});

let app = new Vue({
  el: '#app',
  data: {
    msg: 'hey vue',
    gnblink: [
      {title: 'company', ahref: 'company.html'},
      {title: 'product', ahref: 'product.html'},
      {title: 'gallery', ahref: 'gallery.html'},
      {title: 'notice', ahref: 'notice.html'}
    ]
  },
  // 지역컴포넌트
  components: {
    'footer-list': {
      template: '<ul><li><a href="#">list1</a></li><li><a href="#">list2</a></li><li><a href="#">list3</a></li></ul>'
    }
  }
});
