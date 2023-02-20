<script setup>
import { ref } from "vue";

const contacts = ref([
  {
    name: "Петр Иванов",
    phone: "5-15-55",
    mail: "petr@petr.com",
    img: "../src/assets/images/photo.jpg",
  },
  {
    name: "Петр Иванов",
    phone: "5-15-55",
    mail: "petr@petr.com",
    img: "../src/assets/images/photo.jpg",
  },
  {
    name: "Петр Иванов",
    phone: "5-15-55",
    mail: "petr@petr.com",
    img:"../src/assets/images/photo.jpg",
  },
  {
    name: "Петр Иванов",
    phone: "5-15-55",
    mail: "petr@petr.com",
    img: "../src/assets/images/photo.jpg",
  },
  {
    name: "Петр Иванов",
    phone: "5-15-55",
    mail: "petr@petr.com",
    img: "../src/assets/images/photo.jpg",
  },
  {
    name: "Петр Иванов",
    phone: "5-15-55",
    mail: "petr@petr.com",
    img:"../src/assets/images/photo.jpg",
  },
]);
</script>
<template>
  <div class="contacts">
    <div v-for="(contact, index) in contacts" :key="index" class="contact-card">
      <div><img :src="contact.img" alt="" /></div>

      <div class="contact-text">
        <div>Имя: {{ contact.name }}</div>
        <div>Телефон: {{ contact.phone }}</div>
        <div>Почта: {{ contact.mail }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.contacts {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.contact-card {
  border: 0.5px solid black;
  margin: 10px;
  padding: 10px;
  border-radius: 25px;
  width: 250px;
  aspect-ratio: 2/1;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-content: center;
}
.contact-text{
    padding: 10px;
}
.contact-card img {
  width: 100%;
  margin: 5px;
}
</style>