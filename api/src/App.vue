<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
export default {
  name: "app",
  components: {
    Header,
    Main,
    Footer
  }
};
</script>

<style>
</style>
