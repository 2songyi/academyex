<template>
  <!--template는 자식요소 1개만 노출되어야함 -->
  <div class="main">
    {{msg}}
    <!-- <main>
      <div class="mainbanner"></div>
      <div class="container">
        <div class="content">
          <div class="inner">
            <div class="box items_2">
              <div class="items">
                <h3 class="title">funiture</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ipsam non incidunt saepe quaerat, eos natus ratione, repellat, mollitia voluptate alias accusantium assumenda sit optio, labore reiciendis in pariatur ex.</p>
                <a href="./company/introduce.html" class="gbtn">More View</a>
              </div>
              <div class="items">
                <img src="../assets/img/thumb_nail01.jpg" alt="funiture01">
              </div>
            </div>
            <div class="box items_2">
              <div class="items">
                <img src="../assets/img/thumb_nail02.jpg" alt="funiture01">
              </div>
              <div class="items">
                <h3 class="title">funiture</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ipsam non incidunt saepe quaerat, eos natus ratione, repellat, mollitia voluptate alias accusantium assumenda sit optio, labore reiciendis in pariatur ex.</p>
                <a href="./company/introduce.html" class="gbtn">More View</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main> -->
  </div>
</template>

<script>
export default {
  name: 'main-component', //파일이름과 동일하게
  data () { //함수형태로 data작성
    return {
      msg: 'this is main component'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
