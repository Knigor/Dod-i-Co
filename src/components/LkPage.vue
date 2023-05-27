<template>
  <div class="lk-main">
    <div>
      <div>

      </div>
      <div class="lk-page">
        <div>
          <h1>Личный кабинет</h1>
          <div class="input-container ic1">
            <input id="pass" class="input input2" type="text" placeholder=" " />
            <div class="cut-11"></div>
            <label for="pass" class="placeholder">Введите новый пароль</label>
          </div>
        </div>
        <div>
          <h2>Смена пароля</h2>
          <div class="input-container ic1">
            <input id="pass" class="input input2" type="text" placeholder=" " />
            <div class="cut-11"></div>
            <label for="pass" class="placeholder">Введите новый пароль</label>
          </div>
          <div class="input-container ic2">
            <input id="passrep" class="input input2" type="text" placeholder=" " />
            <div class="cut-12"></div>
            <label for="passrep" class="placeholder">Повторите пароль</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.lk-main{
  display: grid;
  justify-items: center;
  align-content: center;
  background: #525252 no-repeat center center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
}

.lk-page {
  display: flex;
  justify-items: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 15px;
  padding: 20px;
}

.cut-11 {
  background-color: #e3c7ff;
  border-radius: 10px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -13px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 130px;
}

.cut-12 {
  background-color: #e3c7ff;
  border-radius: 10px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -13px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 105px;
}

.input2:focus{
  background-color: #E7E7E7;
}

</style>