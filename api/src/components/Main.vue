<template>
  <div class="main">
    <Banner />
    <Yushou />
    <Img />
  </div>
</template>

<script>
import Banner from "../components/Banner";
import Yushou from "../components/Yushou";
import Img from "../components/Img";
export default {
  name: "contain",
  components: {
    Banner,
    Yushou,
    Img
  }
};
</script>

<style>
.main {
  background-image: url("../assets/mainbgc.png");
  background-repeat: repeat;
  width: 100%;
  height: 4500px;
}
</style>
