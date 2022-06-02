<template>
  <div id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="column footer-logo">
            <h3>Logo</h3>
          </div>
          <div class="column">
            <h4>site map</h4>
            <ul>
              <li>
                <a href="./company/introduce.html">Company</a>
              </li>
              <li><a href="./product/product.html">Product</a>
              </li>
              <li><a href="./gallery/gallery.html">Gallery</a>
              </li>
              <li><a href="./community/notice.html">Community</a>
              </li>
              <li><a href="./location/location.html">Location</a>
              </li>
            </ul>
          </div>
          <div class="column">
            <h4>contact us</h4>
            <p>
              A108 Adam street<br>
              New York, NY 535022<br>
              United States<br>
              <strong>Phone : </strong><a href="tel:+82-10-0000-0000">+82-010-0000-0000</a><br>
              <strong>Email : </strong><a href="mailto:mymail@naver.com">mymail@naver.com</a>
            </p>
          </div>
          <div class="column news">
            <h4>news</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <form>
              <input type="text" name="search"><input type="submit" value="search">
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="copyright">
        &copy;copyright <strong>MyPage</strong> .All Rights Reserved
      </div>
      <div class="credits">
        Designed By <a href="mailto:5446911s2@daum.net">MySelf</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer-component',
  data () {
    return {
      msg: 'footer'
    }
  }
}
</script>

<style>
</style>
