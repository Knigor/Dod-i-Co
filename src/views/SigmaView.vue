<template>
  <div class="sigma">
    <div class="sigma-header">
      <img alt="Картинка" />
      <nav>SIGMAGPT</nav>
      <RouterLink to="/"><nav>Главная</nav></RouterLink>
      
      <nav>Личный кабинет</nav>
      <img alt="Картинка" />
      <p>{{ Login }}</p>
    </div>
    <div class="sigma-main">
      <p>dsadsad</p>
    </div>
    <div class="sigma-footer">
      <p style="color: purple">Роль</p>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: "SigmaView",
    data() {
        return {
            Login: "ACORZ",
        };
    },
    components: { RouterLink }
};
</script>

<style>
.sigma {
  display: flex;
  flex-direction: column;
  background-color: #b9b8e4;
  background-size: cover;
  width: 100%;
  min-height: 100%; /* Заменил height на min-height для корректного расчета высоты содержимого */
  align-items: center;
  gap: 32px;
}

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

.sigma-main {
  width: 1274px; 
  height: 832px;
  background: #ffffff;
  border-radius: 16px;
}

.sigma-footer {
  display: flex;
    flex-direction: row;
    align-items: center;
    /* padding: 24px 32px; */
    /* gap: 10px; */
    background: #ffffff;
    box-shadow: 0px 4px 17px rgb(0 0 0 / 17%);
    border-radius: 15px;
    width: 1274px;
    height: 72px;
    padding-bottom: 46px;
}
</style>
