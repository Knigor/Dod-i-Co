<template>
  <div class="lk-main">
    <div class="container">
      <div class="lk-header">
        <HeaderComponents/>
      </div>

      <div class="lk-page" ref="myElement">
        <div>
          <h1 class="lk-page-heading">Личный кабинет</h1>
          <div class="input-container ic1">
            <input id="pass" class="input input2" type="text" placeholder=" " />
            <div class="cut-11"></div>
            <label for="pass" class="placeholder">Введите новый пароль</label>
          </div>
        </div>

        <div>
          <h2 class="lk-page-heading2">Смена пароля</h2>
          <div class="input-container ic1">
            <input id="password" class="input input2" type="text" placeholder=" " />
            <div class="cut-11"></div>
            <label for="password" class="placeholder">Введите новый пароль</label>
          </div>
          <div class="input-container ic2">
            <input id="passrep" class="input input2" type="text" placeholder=" " />
            <div class="cut-12"></div>
            <label for="passrep" class="placeholder">Повторите пароль</label>
          </div>
        </div>

        <div class="lk-pagep">
          <button
              class="lk-page-button1"
              @click="toggleRoleSettings">Настройка роли</button>
          <button class="lk-page-button2">Выйти из профиля</button>
        </div>
      </div>

      <div class="lk-add" ref="myElement2" style="display: none;">
        <div class="lk-add-left">
          <div class="lk-add-subheading">
            <h1 class="lk-left-heading">Выбор роли</h1>
            <select v-model="selectedItem">
              <option disabled value="">Выберите элемент</option>
              <option v-for="item in items" :key="item.id" :value="item">{{ item.name }}</option>
            </select>
          </div>
          <div>
            <input v-model.lazy="inputString" type="text" placeholder="Поиск нужной роли"/>
            <div>{{ parsedData }}</div>
          </div>
          <button class="add-role">Добавить роль</button>
          <button class="back-button"
                  @click="returnToPage">Вернуться назад</button>
          <!--            <p>Выбранный элемент: {{ selectedItem }}</p>-->
        </div>
        <div class="lk-add-right">
          <h1 class="lk-right-heading">История чатов</h1>
          <div class="slider-container" :style="{ display: showSlider ? 'block' : 'none' }">
            <div class="slider">
              <div v-for="item in item_block" :key="item.id" class="slide" :class="{ active: activeSlide === item.id }">
                <h3>{{ item.content }}</h3>
              </div>
            </div>
            <div class="slider-controls">
              <button v-for="item in item_block" :key="item.id" @click="changeSlide(item.id)" :class="{ active: activeSlide === item.id }">{{ item.id }}</button>
            </div>
          </div>
          <button class="clean-history"
                  @click="clearHistory">Очистить историю чата</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import HeaderComponents from "@/components/HeaderComponents";

export default {
  components: {
    HeaderComponents,
  },
  data() {
    return {
      showRoleSettings: false,
      selectedItem: '',
      activeSlide: 1,
      showSlider: true,
      items: [
        { id: 1, name: 'По умолчанию' },
        { id: 2, name: 'Избранное' },
        { id: 3, name: 'По алфавиту' }
      ],
      item_block: [
        { id: 1, content: 'Содержимое блока 1' },
        { id: 2, content: 'Содержимое блока 2' },
        { id: 3, content: 'Содержимое блока 3' },
      ],
      inputString: "",
      parsedData: ""
    };
  },
  watch: {
    inputString(newValue) {
      this.parseInputString(newValue);
    }
  },
  methods: {
    toggleRoleSettings() {
      this.$refs.myElement.style.display = "none";
      this.$refs.myElement2.style.display = "flex";

      console.log(this.selectedItem);
      this.parseSelectedItem(this.selectedItem);
    },
    parseSelectedItem(selectedItem) {
      console.log(selectedItem.name);
    },
    parseInputString(inputValue) {
      const dataArray = inputValue.split(",");
      this.parsedData = dataArray.join(" ");
    },
    changeSlide(slide) {
      this.activeSlide = slide;
    },
    returnToPage() {
      this.$refs.myElement.style.display = "flex";
      this.$refs.myElement2.style.display = "none";
    },
    clearHistory() {
      this.showSlider = false;
    },
  }
}
</script>

<style>

@media (max-width: 850px) {
  .lk-add {
    flex-direction: column;
    row-gap: 40px;
  }

  .lk-add-left {
    row-gap: 25px;
  }

  .lk-add-right {
    row-gap: 25px;
  }

  .sigma-header .header-nav-text, .sigma-header .header-nav-text2 {
    font-size: 14px;
  }

  .lk-add-right .lk-right-heading {
    font-size: 14px;
  }
}

@media (max-width: 1920px) and (min-width:850px ) {
  .lk-main .lk-add-left {
    row-gap: 20px;
  }

  .lk-main .lk-add{
    width: 80%;
  }
}

.clean-history {
  display: grid;
  width: 100%;
  padding: 10px 30px;
  background: #525252;
  border-radius: 10px;
  color: #FFFFFF;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  text-transform: uppercase;
  margin: 0 auto;
  background: #F40000;
  border-radius: 10px;
  border: none;
  align-items: center;
}

.clean-history:hover{
  background: #dc0000;
}

.add-role, .back-button {
  border: none;
  display: grid;
  width: 80%;
  padding: 10px 30px;
  background: #525252;
  border-radius: 10px;
  color: #FFFFFF;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  text-transform: uppercase;
  margin: 0 auto;
}

.lk-add-left {
  display: grid;
  align-content: space-between;
}

.lk-add-left button:hover, .lk-page-button1:hover{
  background: #0066BB;
}

.lk-add-right{
  display: grid;
  row-gap: 30px;
}

.lk-add-left input{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px;
  gap: 10px;
  width: 100%;
}

option{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.1px;

  color: #525252;
}

.lk-add-subheading{
  display: flex;
  column-gap: 30px;
}

.lk-right-heading{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  color: #000000;

  mix-blend-mode: normal;
}

.lk-pagep{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px 0
}

.lk-left-heading{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  display: flex;
  align-items: center;
  text-transform: uppercase;

  color: #000000;

  mix-blend-mode: normal;
}

.slider-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slider {
  display: flex;
  width: 100%;
  overflow-x: hidden;
}

.slide {
  flex-shrink: 0;
  width: 100%;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  display: none;
}

.slide.active {
  display: block;
}

.slider-controls {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.slider-controls button {
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  background-color: #f5f5f5;
  cursor: pointer;
}

.slider-controls button.active {
  background-color: #ddd;
}

.lk-add {
  background-color: #FFFFFF;
  padding: 35px 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  width: 80%;
  max-width: 1000px;
}

.lk-header{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  top: 0;
  padding: 0 0 10px 0;
  z-index: 1;
}

.container {
  display: grid;
  flex-direction: column;
  justify-items: center;
  width: 100%;
  background: #525252;
}

.lk-main {
  background: #525252 no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100vh;
}

.lk-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 15px;
  padding: 20px;
  margin-top: 20px;
}

.lk-page-heading, .lk-page-heading2{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #000;
}

.lk-page-button1{
  border-radius: 10px;
  width: 100%;
  padding: 10px 30px;
  border: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  text-align: center;
  text-transform: uppercase;
  background: #525252;

  color: #FFFFFF;
}

.lk-page-button2{
  background-color: #F40000;
  border-radius: 10px;
  width: 100%;
  padding: 10px 30px;
  border: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  text-align: center;
  text-transform: uppercase;

  color: #FFFFFF;
}

.lk-page-button2:hover{
  background-color: #dc0000;
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