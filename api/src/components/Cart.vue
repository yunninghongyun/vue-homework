<template>
  <div class="cart">
    <div class="cart-top">
      <div class="cart-top-left">
        <span>购物车[]</span>
      </div>
      <div class="cart-top-right">
        <span>购物车</span>
        <span>填写订单</span>
        <span>付款,购买成功</span>
      </div>
    </div>
    <div class="cart-main">
      <div class="cart-main-top">
        <div class="cart-main-top-left">
          <label class="text" @click="changeAll">
            <span v-show="allchecked">√</span>
          </label>
          <span>全选</span>
          <span>商品</span>
        </div>
        <div class="cart-main-top-right">
          <span class="danjia">单价</span>
          <span class="shuliang">数量</span>
          <span>小计</span>
          <span>操作</span>
        </div>
      </div>
      <div class="cart-main-inner">
        <ul>
          <li v-for="cart in carts" :key="cart.id">
            <div>
              <div class="cart-main-inner-left">
                <div class="checkboxone">
                  <!-- <input class="checkbox" type="checkbox" :id="cart.id" /> -->
                  <label class="text" :class="cart.checked?'yellow':''" @click="checked(cart.id)">
                    <span v-show="cart.checked">√</span>
                  </label>
                </div>
                <div class="neirong">
                  <img src="../assets/scar.png" alt />
                  <div>
                    <h4>{{cart.title}}</h4>
                    <span>款式：{{cart.style}}</span>
                    <span>尺码：{{cart.size}}</span>
                  </div>
                </div>
              </div>
              <div class="cart-main-inner-right">
                <span class="price">￥{{cart.price}}</span>
                <div>
                  <span class="add" @click="addNum(cart.id)">+</span>
                  <span class="num">{{cart.num}}</span>
                  <span class="sub" @click="subNum(cart.id)">-</span>
                </div>
                <span class="price1">￥{{cart.price*cart.num}}</span>
                <div>
                  <span class="del" @click="showDel(cart.id)">x</span>
                  <br />
                  <div v-if="cart.show">
                    <button @click="delCart(cart.id)">删除</button>
                    <button @click="showDel(cart.id)">不删除</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="cart-main-bottom">
        <div class="cart-main-bottom-left">
          <div class="checkboxall">
            <label class="text" @click="changeAll">
              <span v-show="allchecked">√</span>
            </label>
            <span>全选</span>
          </div>
          <div class="del">
            <img src="../assets/shopcart_44.png" alt />
            <span>删除</span>
          </div>
          <div class="yuanwang">
            <img src="../assets/shopcart_41.png" alt />
            <span>转到愿望单</span>
          </div>
          <div class="shu">
            <span>|</span>
          </div>
          <span>共4件商品，已选择1件</span>
        </div>
        <div class="cart-main-bottom-right">
          <div>
            <span class="heji">合计 :</span>
            <span>[不含运费]</span>
          </div>
          <span>￥{{total}}</span>
          <button>去结算</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart",
  computed: {
    carts() {
      return this.$store.state.shopping.carts;
    },
    total() {
      return this.$store.getters.total;
    },
    allchecked() {
      return this.$store.state.shopping.allchecked;
    }
  },
  methods: {
    addNum(id) {
      this.$store.commit("addNum", id);
    },
    subNum(id) {
      this.$store.commit("subNum", id);
    },
    delCart(id) {
      this.$store.commit("delCart", id);
    },
    showDel(id) {
      this.$store.commit("showDel", id);
    },
    changeAll() {
      this.$store.commit("changeAll");
    },
    checked(id) {
      this.$store.commit("checked", id);
    }
  },
  created() {
    console.log(this.$store.state.shopping);
  }
};
</script>

<style>
.cart {
  background-image: url("../assets/scar-top.png");
  width: 90%;
  margin: 0 auto;

  background-repeat: no-repeat;
}
.cart .cart-top {
  display: flex;
  justify-content: space-between;
  padding: 40px 20px;
}
.cart .cart-top .cart-top-left {
  padding-bottom: 10px;
}
.cart .cart-top .cart-top-left > span {
  border-left: 3px solid #000;
  line-height: 20px;
  padding-left: 10px;
  font-size: 24px;
}
.cart .cart-top .cart-top-right {
  margin-right: 10px;
}
.cart .cart-top .cart-top-right > span {
  margin-left: 10px;
  border-bottom: 2px solid #000;
  padding-bottom: 5px;
}
.cart .cart-main {
  width: 100%;
  padding: 30px 20px;
  margin: 0 auto;
}
.cart .cart-main .cart-main-top {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 2px solid #000;
}
.cart .cart-main .cart-main-top > .cart-main-top-left {
  display: flex;
  justify-content: left;
}
.cart .cart-main .cart-main-top > .cart-main-top-left .checkbox {
  display: none;
}
.cart .cart-main .cart-main-top > .cart-main-top-left .text {
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 20px;
}

.cart .cart-main .cart-main-top > .cart-main-top-left .text > span {
  background-color: yellow;
  color: #000;
  display: block;
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  user-select: none;
}
.cart .cart-main .cart-main-top > .cart-main-top-left > span {
  margin-left: 10px;
  margin-right: 10px;
}
.cart .cart-main .cart-main-top > .cart-main-top-right {
  padding-right: 25px;
}
.cart .cart-main .cart-main-top > .cart-main-top-right span {
  margin-right: 65px;
  margin-left: 50px;
}
.cart .cart-main .cart-main-top > .cart-main-top-right > .danjia {
  margin-right: 110px;
}
.cart .cart-main .cart-main-top > .cart-main-top-right > .shuliang {
  margin-right: 90px;
}
.cart .cart-main .cart-main-inner {
  border-bottom: 2px solid #000;
  margin-bottom: 20px;
}
.cart .cart-main .cart-main-inner > ul > li > div {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
}
.cart .cart-main .cart-main-inner .cart-main-inner-left {
  display: flex;
  justify-content: left;
}
.cart .cart-main .cart-main-inner .cart-main-inner-left .checkboxone {
  padding: 40px 0;
  margin-left: 20px;
  margin-right: 45px;
}
.cart .cart-main .cart-main-inner .cart-main-inner-left .checkboxone .checkbox {
  display: none;
}
.cart .cart-main .cart-main-inner .cart-main-inner-left .checkboxone .text {
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 20px;
  user-select: none;
}
.yellow {
  background-color: yellow;
}
.cart
  .cart-main
  .cart-main-inner
  .cart-main-inner-left
  .checkboxone
  .checkbox:checked
  + .text
  > span {
  display: block;
}
.cart .cart-main .cart-main-inner .cart-main-inner-left .neirong {
  display: flex;
  justify-content: left;
  width: 340px;
}
.cart .cart-main .cart-main-inner .cart-main-inner-left .neirong > div {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.cart .cart-main .cart-main-inner .cart-main-inner-left .neirong > div > h4 {
  margin-bottom: 25px;
  font-size: 14px;
}
.cart .cart-main .cart-main-inner .cart-main-inner-left .neirong > div > span {
  font-size: 12px;
  display: block;
  color: #ccc;
}
.cart .cart-main .cart-main-inner .cart-main-inner-right {
  display: flex;
  justify-content: left;
  margin-top: 30px;
}
.cart .cart-main .cart-main-inner .cart-main-inner-right > span {
  margin-right: 100px;
  margin-left: 20px;
}
.cart .cart-main .cart-main-inner .cart-main-inner-right > .price1 {
  width: 60px;
  color: red;
}
.cart .cart-main .cart-main-inner .cart-main-inner-right > div > .del {
  cursor: pointer;
  user-select: none;
  margin-right: 60px;
}
.cart .cart-main .cart-main-inner .cart-main-inner-right > div {
  margin-right: 40px;
}
.cart .cart-main .cart-main-inner .cart-main-inner-right > div > .num {
  padding: 0 40px;
  user-select: none;
}
.cart .cart-main .cart-main-inner .cart-main-inner-right > div > .add {
  border: 1px solid #000;
  padding: 3px 8px;
  cursor: pointer;
  user-select: none;
}
.cart .cart-main .cart-main-inner .cart-main-inner-right > div > .sub {
  border: 1px solid #000;
  padding: 3px 10px;
  cursor: pointer;
  user-select: none;
}
.cart .cart-main .cart-main-bottom {
  background-color: #000000c9;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.cart .cart-main .cart-main-bottom .cart-main-bottom-left {
  display: flex;
  justify-content: left;
  padding: 20px;
}
.cart
  .cart-main
  .cart-main-bottom
  .cart-main-bottom-left
  .checkboxall
  .checkbox {
  display: none;
}
.cart .cart-main .cart-main-bottom .cart-main-bottom-left .checkboxall {
  display: flex;
  justify-content: left;
}
.cart .cart-main .cart-main-bottom .cart-main-bottom-left .checkboxall span {
  color: #fff;
}
.cart .cart-main .cart-main-bottom .cart-main-bottom-left .checkboxall > span {
  margin: 0 10px;
}
.cart .cart-main .cart-main-bottom .cart-main-bottom-left .checkboxall .text {
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 20px;
}
.cart
  .cart-main
  .cart-main-bottom
  .cart-main-bottom-left
  .checkboxall
  .text
  > span {
  display: block;
  width: 18px;
  height: 18px;
  line-height: 20px;
  text-align: center;
  background-color: yellow;
  color: #000;
  user-select: none;
}

.cart
  .cart-main
  .cart-main-bottom
  .cart-main-bottom-left
  .checkboxall
  .checkbox:checked
  + .text
  > span {
  display: block;
}
.cart .cart-main .cart-main-bottom .cart-main-bottom-left .del {
  margin: 0 10px;
}
.cart .cart-main .cart-main-bottom .cart-main-bottom-left .del span {
  color: #fff;
  font-size: 12px;
  margin-left: 5px;
}
.cart .cart-main .cart-main-bottom .cart-main-bottom-left .yuanwang {
  margin: 0 10px;
}
.cart .cart-main .cart-main-bottom .cart-main-bottom-left .yuanwang > span {
  color: #fff;
  font-size: 12px;
  margin-left: 5px;
}
.cart .cart-main .cart-main-bottom .cart-main-bottom-left .shu {
  margin: 0 10px;
}
.cart .cart-main .cart-main-bottom .cart-main-bottom-left .shu > span {
  color: #fff;
  font-size: 12px;
  margin-left: 5px;
}
.cart .cart-main .cart-main-bottom .cart-main-bottom-left > span {
  color: #fff;
  font-size: 12px;
  margin-left: 5px;
  line-height: 20px;
}
.cart .cart-main .cart-main-bottom .cart-main-bottom-right {
  display: flex;
  justify-content: left;
}
.cart .cart-main .cart-main-bottom .cart-main-bottom-right > div {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
.cart .cart-main .cart-main-bottom .cart-main-bottom-right > div .heji {
  padding-left: 30px;
}
.cart .cart-main .cart-main-bottom .cart-main-bottom-right > div > span {
  color: #fff;
  font-size: 14px;
}
.cart .cart-main .cart-main-bottom .cart-main-bottom-right > span {
  color: yellow;
  font-size: 40px;
  line-height: 60px;
  margin: 0 10px 0 5px;
}
.cart .cart-main .cart-main-bottom .cart-main-bottom-right button {
  background-color: yellow;
  border: none;
  outline: none;
  padding: 0 60px;
  font-size: 20px;
  cursor: pointer;
}
</style>
