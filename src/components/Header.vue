<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <div class="header">
    <div class="main-menu">
      <router-link to="/"><p>Главная</p></router-link>
      <router-link to="/catalog"><p>Каталог</p></router-link>
      <router-link to="/contacts"><p>Контакты</p></router-link>
    </div>
  </div>
</template>
<style>
.header {
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
}
a {
  text-decoration: none;
  color: white;
  margin: 10px;
}
.main-menu {
  display: flex;


  text-transform: uppercase;
}
</style>