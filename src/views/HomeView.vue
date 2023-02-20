<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
  <Header />
  <div class="container">
    <div class="content"><RouterView /></div>
  </div>
  <Footer />
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.content {
  width: 60%;
  padding: 20px;
  margin: 20px;
  box-shadow: 13px 21px 86px -8px rgba(0, 0, 0, 0.71);
  border-radius: 25px;
  min-height: 400px;
}
@media screen and (max-width: 900px) {
  .content {
    width: 95%;
    padding: 10px;
    margin: 10px;
  }
}
</style>