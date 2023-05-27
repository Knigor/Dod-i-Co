<template>
  <div class="sigma">
    <HeaderComponents/>
    <div class="sigma-main">
      <p>dsadsad</p>
    </div>
    <div class="sigma-footer">
      <p style="color: purple">Роль</p>
    </div>
  </div>
</template>

<script>

import HeaderComponents from '../components/HeaderComponents.vue'

export default {
    name: "SigmaView",
    components: { HeaderComponents }
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
  border: 1px #000 solid;
  padding: 0 50px;
}

.sigma-main {
  width: 1274px; 
  height: 832px;
  background: #ffffff;
  border-radius: 16px;
  width: 100%;
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
    width: 100%;
}
</style>
