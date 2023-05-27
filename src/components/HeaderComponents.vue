<template>
  <div class="sigma-header">
    <div class="sigma-logo-gpt">
      <img src="../assets/Sigma-logo.svg" alt="Картинка" />
      <nav class="header-nav-text">SIGMAGPT</nav>
    </div>

    <nav class="header-nav-text">Главная</nav>
    <nav class="header-nav-text">Личный кабинет</nav>
    <div class="user-logo-gpt">
      <img src="../assets/user-logo.svg" alt="Картинка" />
      <p class="header-nav-text-login">{{ Login }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Login: "Acorz",
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Noto+Sans+Gujarati&family=Noto+Sans:wght@500&family=Oswald:wght@400;500;700&display=swap");

.user-logo-gpt{
    display: flex;
    gap: 12px;
}

.sigma-logo-gpt {
  display: flex;
  gap: 10px;
}

.header-nav-text-login {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  padding: 0px;
  color: #000000;
}

.header-nav-text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  color: #000000;
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
  width: 100%;
  max-width: 1000px;
}

/* Медиа-запрос для экранов шириной меньше 768 пикселей */
@media (max-width: 768px) {
  .sigma-header {
    flex-direction: column;
    gap: 24px;
    padding: 16px;
    height: auto;
  }

  .sigma-logo-gpt,
  .user-logo-gpt {
    justify-content: center;
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

</style>
