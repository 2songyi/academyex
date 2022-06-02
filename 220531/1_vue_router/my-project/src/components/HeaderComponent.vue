<template>
  <div id="header">
    <h1 id="top-logo">
      <a href="/">XWOOD</a>
    </h1>
    <nav id="top-nav">
      <ul>
        <!-- 실습
        : 아래 li메뉴 리스트를 v-for구문을 사용해서 출력하기
        메뉴 리스트는 href text를 data로 생성해서 menuList 배열에 담고 반복문으로 출력하기-->
        <li v-for="(i, index) in menuList">
          <router-link :to="i.alink">{{i.text}}</router-link>
          <!-- company submenu -->

          <ul v-if="index == 0" class="sub-menu">
            <li v-for="company in companySubmenuList">
              <router-link :to="company.alink">{{company.text}}</router-link>
            </li>
          </ul>
          <!-- community submenu -->
          <ul v-if="index == 3" class="sub-menu">
            <li v-for="company in communitySubmenuList">
              <router-link :to="company.alink">{{company.text}}</router-link>
            </li>
          </ul>
        </li>
        <!-- <li>
          <a href="/introduce">Company</a>
          <ul class="sub-menu">
            <li><a href="./company/introduce.html">Introduce</a></li>
            <li><a href="./company/ci.html">CI</a></li>
            <li><a href="./company/history.html">History</a></li>
          </ul>
        </li>
        <li><a href="./product/product.html">Product</a>
        </li>
        <li><a href="./gallery/gallery.html">Gallery</a>
        </li>
        <li><a href="./community/notice.html">Community</a>
          <ul class="sub-menu">
            <li><a href="./community/notice.html">Notice</a></li>
            <li><a href="./community/faq.html">FAQ</a></li>
          </ul>
        </li>
        <li><a href="./location/location.html">Location</a>
        </li> -->
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'header-component',
  data () {
    return {
      msg: 'header',
      menuList: [
        {text: 'Company', alink: '/introduce'},
        {text: 'Product', alink: '/product'},
        {text: 'Gallery', alink: '/gallery'},
        {text: 'Community', alink: '/notice'},
        {text: 'Location', alink: '/location'}
      ],
      companySubmenuList: [
        {text: 'Introduce', alink: '/introduce'},
        {text: 'CI', alink: '/ci'},
        {text: 'History', alink: '/history'}
      ],
      communitySubmenuList: [
        {text: 'Notice', alink: '/notice'},
        {text: 'Faq', alink: '/faq'}
      ]

    }
  }
}
</script>

<style>
</style>
