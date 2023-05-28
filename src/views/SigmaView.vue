<template>
  <div class="sigma">
    <HeaderComponents />
    <div class="sigma-main">
      <p>{{ response }}</p>
<!--      <input type="text" v-model="responseField" />-->
    </div>
    <div class="sigma-footer">
      <div class="sigma-role-dropdown">
        <DropDown class="DropDown-text" />
        <div style="display: flex; justify-content: space-between; width: 100%">
          <input
              class="input-footer-sigma"
              type="text"
              placeholder="Введите ваш запрос"
              v-model="query"
          />
          <img src="../assets/footer-icon-sigma.svg" alt="Картинка" @click.prevent="sendQuery"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponents from "../components/HeaderComponents.vue";
import DropDown from "@/components/DropDown.vue";
import axios from "axios";

export default {
  name: "SigmaView",
  data() {
    return {
      query: "",
      response: "",
      responseField: ""
    };
  },
  components: { HeaderComponents, DropDown },
  methods: {
    async sendQuery() {
      try {
        const apiUrl = 'http://172.20.10.5:8080/api/chat';
        const response = await axios.post(apiUrl, { message: this.query });

        // this.responseField = response.data.reply;
        this.response = response.data.reply;
        // console.log(response.data.reply);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style>

.sigma-footer img{
  overflow: hidden;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.sigma-footer img:hover{
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
}

.sigma-main{
  padding: 20px 15px;
}

.sigma-main p{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
}



@media (max-width: 715px) {
  .sigma .sigma-role-dropdown {
    flex-direction: column;
  }
  .sigma-footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #ffffff;
    box-shadow: 0px 4px 17px rgb(0 0 0 / 17%);
    border-radius: 15px;
    height: 100px;
    width: 100%;
  }


}

@media (max-width: 1000px){
  .sigma-main p{
    font-size: 12px;
    line-height: 20px;
  }
}

/* Медиа-запрос для экранов шириной меньше 576 пикселей */
@media (max-width: 576px) {
  .header-nav-text-login,
  .header-nav-text {
    font-size: 14px;
    line-height: 18px;
  }
}

.input-footer-sigma {
  border: none;
  outline: none;
  width: 100%;
  max-width: 1000px;
  height: 22px;
}

.sigma {
  display: flex;
  flex-direction: column;
  background-color: #b9b8e4;
  background-size: cover;
  width: 100%;
  min-height: 100%; /* Заменил height на min-height для корректного расчета высоты содержимого */
  align-items: center;
  gap: 32px;
  padding: 0 50px 24px;
}

.sigma-role-dropdown {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 20px 35px;
}

.sigma-main {
  width: 1274px;
  height: 832px;
  background: #ffffff;
  border-radius: 16px;
  width: 100%;
  max-width: 1000px;
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
  height: 100px;
  width: 100%;
  max-width: 1000px;
}

</style>
