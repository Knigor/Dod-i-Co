<template>
  <div class="main">
    <div class="main-page"
         :style="{ backgroundImage:
       `url(${images[currentImageIndex]})` }">
      <div class="main-page-p"
           ref="myElement">
        <h1 class="main-heading">SIGMAGPT -</h1>
        <p class="main-text">
          Исскуственный <br> интелект,
          <br>который <br>
          понимает вас
        </p>
        <div class="buttons">
          <RouterLink to="/sigma"><a>Начать разговор</a></RouterLink>
          <RouterLink to="/registration"><a>Зарегистрироваться</a></RouterLink>
        </div>
      </div>
    </div>
    <div class="scrollable-block">
      <h1 class="scrollable-block-heading">
        Сила выбора: Раскрой свой потенциал с SigmaGPT и выбери свои уникальные способности!
      </h1>
      <div class="scrollable-block-under">
        <div v-for="item in items"
             :key="item.id"
             class="scrollable-block-under2">
          <img
              :src="item.image" alt="Image" class="img"/>
          <h2>{{item.title}}</h2>
          <p>{{item.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isScrolling: false,
      images:[
        require('@/assets/1.jpg'),
        require('@/assets/2.jpg'),
        require('@/assets/3.jpg')
      ],
      currentImageIndex: 0,
      items:[
        {
          id: 1,
          image: require('@/assets/1.svg'),
          title: 'Быстрые и точные ответы',
          description: 'Получайте ' +
              'мгновенные и точные ответы' +
              ' на любые вопросы с' +
              ' помощью SigmaGPT!'
        },
        {
          id: 2,
          image: require('@/assets/2.svg'),
          title: 'Создай свою собственную роль',
          description: 'Возьми на себя' +
              ' главенство и создай ' +
              'собственную роль в чате SigmaGPT' +
              ' с уникальными запросами!'
        },
        {
          id: 3,
          image: require('@/assets/3.svg'),
          title: 'Стань звездой чата',
          description: 'Возьми на себя' +
              ' популярную роль других ' +
              'пользователей в SigmaGPT и ' +
              'стань звездой этого чата!'
        },
        {
          id: 4,
          image: require('@/assets/4.svg'),
          title: 'Твоя цифровая идентичность',
          description: 'Создай свою ' +
              'уникальную цифровую идентичность ' +
              'через персонализацию профиля' +
              ' в SigmaGPT!'
        },
        {
          id: 5,
          image: require('@/assets/5.svg'),
          title: 'История запросов на ладони',
          description: 'Отслеживай свою ' +
              'историю запросов с' +
              ' SigmaGPT и наслаждайся магией' +
              ' возвращения к прошлым разговорам!'
        },
        {
          id: 6,
          image: require('@/assets/6.svg'),
          title: 'Эстетика, которая завораживает',
          description: 'Отправляйся в путешествие с ' +
              'SigmaGPT и наслаждайся ' +
              'его стильным дизайном!'
        }
      ]
    };
  },
  methods: {
    handleScroll() {
      this.isScrolling = true;

      clearTimeout(this.scrollTimer);
      this.scrollTimer = setTimeout(() => {
        this.isScrolling = false;
      }, 50);
    },
    startSlideShow() {
      if (!this.isScrolling) {
        this.slideShowTimer = setInterval(this.nextImage, 4000);
      }
    },
    stopSlideShow() {
      clearInterval(this.slideShowTimer);
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.startSlideShow();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    this.stopSlideShow();
  },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

@media (max-width: 850px) {

  .scrollable-block .scrollable-block-under2 p {
    text-align: center;
  }

  .scrollable-block .scrollable-block-under {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    width: 80%;
  }

  .scrollable-block .scrollable-block-under2 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .scrollable-block{
    padding: 20px 0;
  }

  .main-page-p .main-heading{
    width: 80%;
    font-size: 25px;
  }

  .main-page .main-page-p{
    display: grid;
    row-gap: 50px;
  }

  .main-page-p .main-text{
    font-size: 30px;
    line-height: 50px;
  }

  .main-page-p {
    align-self: center; /* Center on screens smaller than 850px */
    margin-right: 0; /* Remove the right margin */
  }

  .buttons{
    flex-direction: column;
    row-gap: 30px;
  }

  a{
    font-size: 4vw;
    width: 100%;
  }
}

.scrollable-block-under2 p{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #0D082C;
  text-align: left;
}

.scrollable-block-under2 h2{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: left;
  color: #0D082C;
}

.img {
  background: #020202;
  border-radius: 6px;
  padding: 1vw 1vw;
}

.scrollable-block-under{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
}

.scrollable-block-under2{
  flex-basis: 33.33%;
  padding: 10px;
  display: grid;
  justify-items: left;
  row-gap: 10px;
  width: 60%;
}

.scrollable-block-heading{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: calc(2.1vw + 10px);
  line-height: calc(3vw + 20px);
  text-align: center;
  width: 80%;

  color: #0D082C;
}

.scrollable-block {
  height: 100vh;
  background: linear-gradient(180deg, #C6C6C6 0%, rgba(160, 160, 160, 0) 100%);
  display: grid;
  justify-items: center;
  align-items: center;
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-page{
  text-transform: uppercase;
  background: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kym-cdn.com%2Fnews%2Fposts%2Foriginal%2F000%2F001%2F076%2Fcover6.jpg&f=1&nofb=1&ipt=7e89ad11cdc3ddee5c5ff81684f4997c8e64ce2917e2ee944d78c6868218389d&ipo=images")
  no-repeat center center;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  transition: background-image 1s ease-in-out;
}

.main-page-p {
  display: grid;
  align-content: center;
  justify-items: center;
  margin-right: 1.56vw;
}

.main-heading{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 4vw;
  line-height: 98px;
  background: #FFFFFF;
  border-radius: 10px;
  color: #535353;
  text-align: center;
  padding: 0.26vw 2.5vw;
  margin: 0.78vw 0;
}

a{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 37px;
  background: #FFFFFF;
  border-radius: 10px;
  text-align: center;
  border: none;
  padding: 0.26vw 1.5vw;
  text-decoration: none;
  color: #000;
}

.buttons{
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2.60vw;
}

.main-text{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 3.5vw;
  line-height: 8vh;
  color: #FFFFFF;
  text-align: center;
  padding-bottom: 3vw;
}
</style>
