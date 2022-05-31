'use strict'

Vue.component('footer-component', {
  template: '<footer><div class="inner"><div class="footer"><h2>footer-logo</h2></div></div></footer>'
});

// router
let mainComp = { template: '<main><div class="container">main-contents</div></main>'};
let companyComp = { template: '<main><div class="container">company-contents</div></main>'};
let productComp = { template: '<main><div class="container">product-contents</div></main>'};
let galleryComp = { template: '<main><div class="container">gallery-contents</div></main>'};
let noticeComp = { template: '<main><div class="container">notice-contents</div></main>'};
let routes = [
  // path를 통해 상단 주소창에 저게 붙게 됨. 그럼 뒤에있는 compennt를 넘겨주겠다.->다른 주소로 넘어가면 내용도 바뀌는거
  { path:'/', component: mainComp }, //위에 comp를 변수처리해줄 수 있음
  { path:'/company', component: companyComp },
  { path:'/product', component: productComp },
  { path:'/gallery', component: galleryComp},
  { path:'/notice', component: noticeComp }
]

let router = new VueRouter({
  routes //밖에서 정의해놓고 여기서 routes만 적어줘도 적용 됨
});

let app = new Vue({
  el: "#app",
  data: {
    gnbList: [
      {text: 'company', path: '/company'},
      {text: 'product', path: '/product'},
      {text: 'gallery', path: '/gallery'},
      {text: 'notice', path: '/notice'}
    ]
  },
  router
});
// }).$mount('#app'); //뷰 인스턴스에 라우터 추가 (라우터만쓸때 이렇게 쓰면 됨)
