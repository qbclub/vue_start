<script setup>
import catalog from "../db/catalog";
</script>
<template>
  <div v-for="item in catalog" :key="item.index">
    {{ item }}
  </div>
</template>