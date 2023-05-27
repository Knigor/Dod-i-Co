<template>
  <div class="sigma">
    <div class="sigma-header">
      <img alt="Картинка" />
      <nav>SIGMAGPT</nav>
      <nav>Главная</nav>
      <nav>Личный кабинет</nav>
      <img alt="Картинка" />
      <p>{{ Login }}</p>
    </div>
    <div class="sigma-main">
      <p>dsadsad</p>
    </div>
    <div class="sigma-footer">
      <p>dsadsad</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SigmaView",
  data() {
    return {
      Login: "ACORZ",
    };
  },
};
</script>

<style>
.sigma {
  display: flex;
  flex-direction: column;
  background: #b9b8e4 center no-repeat;
  background-size: cover;
  width: 100vw;
  min-height: 100vh; /* Заменил height на min-height для корректного расчета высоты содержимого */
  align-items: center;
  gap: 32px;
  margin-bottom: 32px; /* Добавил отступ внизу */
}

.sigma-header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 32px;
  gap: 48px;
  width: 100%; /* Установил ширину в 100% */
  height: 88px;
  background: #ffffff;
  /* Drop Shadow */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
}

.sigma-main {
  width: 100%; /* Установил ширину в 100% */
  height: 832px;
  background: #ffffff;
  border-radius: 16px;
}

.sigma-footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 32px;
  gap: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.17);
  border-radius: 15px;
  width: 100%; /* Установил ширину в 100% */
  height: 72px;
  padding-bottom: 20px;
}
</style>
