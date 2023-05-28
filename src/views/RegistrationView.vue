<template>
  <div class="registration">
    <div class="window-registration">
      <RouterLink to="/"><img class="krest-1" src="@/assets/krest.svg"/></RouterLink>
      <div class="header-registration">
        <div class="name-into">
          <RouterLink :to="{ name: 'auth' }"><p class="login-text">Вход</p></RouterLink>
          <RouterLink v-if="!isButtonDisabled" :to="{ name: 'registration' }"><p class="registration-text">Регистрация</p></RouterLink>
          <p v-else class="registration-text">Регистрация</p>
        </div>
      </div>
      <div class="main-registration">
        <div class="input-container ic1">
          <input v-model="email" id="firstname" class="input" type="text" placeholder=" " />
          <div class="cut-1"></div>
          <label for="firstname" class="placeholder">Введите почту</label>
        </div>
        <div class="input-container ic2">
          <input v-model="username" id="firstname" class="input" type="text" placeholder=" " />
          <div class="cut-2"></div>
          <label for="firstname" class="placeholder">Логин</label>
        </div>
        <div class="input-container ic2">
          <input v-model="password" id="firstname" class="input" type="password" placeholder=" " />
          <div class="cut-3"></div>
          <label for="firstname" class="placeholder">Придумайте пароль</label>
        </div>
      </div>
      <div class="footer-registration">
        <button :disabled="isButtonDisabled" @click="register" class="submit">
          <p class="button-registration">Зарегистрироваться</p>
        </button>  
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import axios from 'axios';

axios.defaults.baseURL = 'http://172.20.10.5:8080/api/';
export default { 
  components: 
  { RouterLink 
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('register', {
          email: this.email,
          login: this.username,
          password: this.password
        });
        console.log(response.data); 

        this.$router.push('/sigma');
      } catch (error) {
        console.error(error); 
        if (error.response && error.response.data && error.response.data.errors && error.response.data.errors.login){
          if (error.response.data.errors.login.includes("The login has already been taken.")) {
            // Устанавливаем флаг, который будет указывать на неактивность кнопки
            this.isButtonDisabled = true;
          }
        }
      }
    }
  },
  data() {
    return {
      email: '',
      username: '',
      password: '',
      isButtonDisabled: false
    };
  },

  }
  ;
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Noto+Sans+Gujarati&family=Noto+Sans:wght@500&family=Oswald:wght@400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;1,600&family=Noto+Sans+Gujarati&family=Noto+Sans:wght@500&family=Oswald:wght@400;500;700&display=swap");

p{
  padding: 0;
}

.krest-1{
  display: flex;
  margin-left: 300px;
  padding-bottom: 22px;
}


.header-registration {
  display: flex;
  margin: -40px;

}

.footer-registration {
  padding-top: 20px;
}

.registration {
  display: flex;
  background: #525252 center no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
}




.window-registration {
  display: flex;
  background: #ffffff;
  width: 459px;
  height: 525px;
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.17);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.login-registration {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-left: 121px;
  gap: 92px;
  padding-top: 102px;
}



.login-text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  text-align: center;
  text-transform: uppercase;
  color: #000000;
}

.registration-text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  text-align: center;
  text-transform: uppercase;

  color: #000000;
}

.registration-text {
  position: relative;
}

.registration-text:after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #E3C7FF;
}


.name-into {
  display: flex;
  gap: 92px;
  margin: 32px;
}

.main-registration {
  display: flex;
  flex-direction: column;
  gap: 9px;
  
}

.input-registration {
  display: flex;
  background: #f8f1ff;
  width: 273px;
  height: 40px;
  border: none;
  outline: none;
  padding-left: 16px;
}

.button-registration {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  
}

.button-footer {
  background: #525252;
  border-radius: 10px;
  width: 273px;
  height: 40px;
  border: none;
}

.subtitle {
  color: #eee;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
}

.input-container {
  height: 50px;
  position: relative;
  width: 100%;
}

.ic1 {
  margin-top: 40px;
}

.ic2 {
  margin-top: 30px;
}

.input {
  background-color: #f8f1ff;
  border-radius: 12px;
  border: 0;
  color: #9891a0;
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
}

.cut-1 {
  background-color: #e3c7ff;
  border-radius: 10px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -13px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 90px;
}
.cut-2 {
  background-color: #e3c7ff;
  border-radius: 10px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -13px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 52px;
}
.cut-3 {
  background-color: #e3c7ff;
  border-radius: 10px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -13px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 112px;
}
.cut-4 {
  background-color: #e3c7ff;
  border-radius: 10px;
  height: 24px;
  left: 20px;
  position: absolute;
  top: -15px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 142px;
}

.cut-short {
  width: 133px;
  height: 15px;
}

.input:focus ~ .cut,
.input:not(:placeholder-shown) ~ .cut {
  transform: translateY(8px);
}

.placeholder {
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  top: 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  color: #000000;
}

.input:focus ~ .placeholder,
.input:not(:placeholder-shown) ~ .placeholder {
  transform: translateY(-30px) translateX(10px) scale(0.75);
}

.input:not(:placeholder-shown) ~ .placeholder {
  color: #808097;
}

.submit {
  background: #525252;
  border-radius: 10px;
  width: 273px;
  height: 40px;
  border: none;
}

.submit:active {
  background-color: #06b;
}

p {
  margin-bottom: 0;
}
a,
a:link,
a:hover,
a:visited {
  color: #808097;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
