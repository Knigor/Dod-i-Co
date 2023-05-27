<template>
  <div class="sigma-header">
    <img alt="Картинка" />
    <nav>SIGMAGPT</nav>
    <RouterLink to="/"><nav>Главная</nav></RouterLink>
    <nav>Личный кабинет</nav>
    <img alt="Картинка" />
    <p>{{ Login }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        require("@/assets/1.jpg"),
        require("@/assets/2.jpg"),
        
      ],
    };
  },
};
</script>

<style>
.sigma-header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 32px;
  gap: 48px;
  width: 1274px;
  height: 88px;
  background: #ffffff;
  /* Drop Shadow */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
}
</style>
