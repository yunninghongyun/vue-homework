<template>
  <div class="newcart">
    <div class="newcart-top">
      <h2>已经成功加入购物车 !</h2>
    </div>
    <div class="newcart-main">
      <div class="main-left">
        <div class="pic">
          <img src="../assets/scar.png" alt />
          <span>龙之谷六周年限定礼包Boos冰龙款男士T恤</span>
        </div>
        <div class="xiangqing">
          <span>款式：iphone 5</span>
          <span>尺码：XL</span>
          <span>数量x1</span>
        </div>
      </div>
      <div class="main-right">
        <router-link class="back" to="/">返回</router-link>
        <router-link class="gocart" to="/cart">去购物车结算</router-link>
      </div>
    </div>
    <div class="newcart-main-bottom">
      <div class="bottom-top">
        <div>
          <span>您可能还需要</span>
        </div>
        <div class="heng"></div>
      </div>
      <div class="bottom-inner">
        <ul>
          <li v-for="good in goods" :key="good.id">
            <div class="text">
              <img src="../assets/scar-goods.png" alt />
              <div class="wenzi">
                <span>{{good.title}}</span>
              </div>
              <div class="inner-bottom">
                <span>￥{{good.price}}</span>
                <img src="../assets/delect.png" alt />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newcart",
  computed: {
    goods() {
      return this.$store.state.carts.goods;
    }
  }
};
</script>

<style>
.newcart {
  background-image: url("../assets/scar-top.png");
  width: 90%;
  margin: 0 auto;
  background-repeat: no-repeat;
  padding: 20px 40px 40px 40px;
}
.newcart .newcart-top {
  border-left: 4px solid #000;
}
.newcart .newcart-top > h2 {
  margin-left: 10px;
  padding: 10px 0;
}
.newcart .newcart-main {
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  margin-top: 80px;
  padding: 20px 15px;
}
.newcart .newcart-main .main-left {
  display: flex;
  justify-content: left;
}
.newcart .newcart-main .main-left .pic {
  display: flex;
  justify-content: left;
  width: 330px;
  border-right: 2px solid yellow;
  padding-right: 10px;
}
.newcart .newcart-main .main-left .pic > img {
  margin-right: 10px;
}
.newcart .newcart-main .main-left .pic > span {
  display: block;
  padding: 25px 0;
}
.newcart .newcart-main .main-left .xiangqing {
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-top: 10px;
}
.newcart .newcart-main .main-left .xiangqing > span {
  display: block;
  color: #ccc;
  font-size: 14px;
  margin-top: 5px;
}
.newcart .newcart-main .main-right {
  padding: 35px 0;
}
.newcart .newcart-main .main-right .back {
  background-color: #000000c9;
  color: #fff;
  padding: 10px 40px;
  margin-right: 10px;
}
.newcart .newcart-main .main-right .gocart {
  background-color: #fdd900;
  color: #000;
  padding: 10px 40px;
}
.newcart .newcart-main-bottom .bottom-top {
  display: flex;
  justify-content: left;
}
.newcart .newcart-main-bottom {
  margin-top: 80px;
  width: 100%;
}
.newcart .newcart-main-bottom .bottom-top {
  margin-bottom: 30px;
}
.newcart .newcart-main-bottom .bottom-top > div {
  width: 100px;
}
.newcart .newcart-main-bottom .bottom-top > div > span {
  display: block;
  font-size: 14px;
}
.newcart .newcart-main-bottom .bottom-top > .heng {
  background-color: #fdd900;
  height: 3px;
  display: block;
  width: 100%;
  margin-top: 10px;
}
.newcart .newcart-main-bottom .bottom-inner > ul {
  padding: 0;
  display: flex;
  justify-content: space-between;
}
.newcart .newcart-main-bottom .bottom-inner > ul > li > .text > img {
  display: block;
}
.newcart .newcart-main-bottom .bottom-inner > ul > li > .text {
  width: 196px;
  border: 1px solid #ccc;
}
.newcart .newcart-main-bottom .bottom-inner > ul > li > .text > .wenzi {
  padding: 0 10px;
  margin: 10px 0 10px;
  width: 150px;
}
.newcart .newcart-main-bottom .bottom-inner > ul > li > .text > .wenzi > span {
  font-size: 14px;
}
.newcart .newcart-main-bottom .bottom-inner > ul > li > .text > .inner-bottom {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px 10px;
}
.newcart
  .newcart-main-bottom
  .bottom-inner
  > ul
  > li
  > .text
  > .inner-bottom
  > span {
  font-size: 20px;
  color: red;
  display: block;
  margin: 0;
  padding: 0;
}
.newcart
  .newcart-main-bottom
  .bottom-inner
  > ul
  > li
  > .text
  > .inner-bottom
  > img {
  border: 2px solid yellow;
  padding: 2px 20px;
}
</style>
