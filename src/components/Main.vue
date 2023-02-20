<template>
  <div class="main">
    <div class="main-img"><img src="../assets/images/photo.jpg" alt="" /></div>
    <div class="main-text">
      <h2>История</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam illum sed
        dolorem eius dignissimos quam natus aspernatur qui deserunt totam
        eveniet doloremque quas, voluptatum nesciunt sapiente veritatis itaque!
        Maxime, numquam.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam illum sed
        dolorem eius dignissimos quam natus aspernatur qui deserunt totam
        eveniet doloremque quas, voluptatum nesciunt sapiente veritatis itaque!
        Maxime, numquam.
      </p>
    </div>
  </div>
</template>
<style scoped>
.main {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.main-img {
  padding: 10px;
}
.main-img::after {
  content: "Команда мечты";
}
.main-img img {
  width: 100%;
  border-radius: 20px;
}
.main-text {
  padding: 10px;
}
.main-text h2 {
  text-align: center;
}
@media screen and (max-width: 900px) {
  .main {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>