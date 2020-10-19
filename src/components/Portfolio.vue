<template>
  <div id="portfolio" class="portfolio container">
    <div class="row">
      <div class="col-md-10">
        <h2 class="title">Personal portfolio</h2>
        <div 
          class="portfolio__carousel"
          v-for="item in portfolio"
          :key="item.title"
        >
          <div class="portfolio__carousel__box">
            <img
              :src="item.imagePath" 
              alt="screent shot of cookierunfont"
            />
            <div class="portfolio__carousel__box__desc">
              <p class="portfolio__carousel__box__title">
                {{item.title}}
              </p>
              <p class="portfolio__carousel__box__content" v-html="item.content"/>
              <p class="portfolio__carousel__box__date">
                {{item.date}}
              </p>
              <a class="url small" :href="item.url" target="_blank">
                {{item.url}}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  data () {
    return {
      portfolio: [
        {
          title: 'Cookierun Font',
          content: 'Made with Vue.js based on Fullpage.js </br> License is own to Corp.',
          date: 'September 2019',
          url: 'https://cookierunfont.com',
          imagePath: '/image/cookie.png'
        },
         {
          title: 'Hey Movie',
          content: 'Made with React',
          date: 'September 2019',
          url: 'https://hey-movie.netlify.app',
          imagePath: '/image/heymovie.png'
        },
         {
          title: 'Hey Trip',
          content: 'Made with Vue.js based on Fullpage.js',
          date: 'September 2019',
          url: 'https://hey-trip.netlify.app',
          imagePath: '/image/heytrip.png'
        }
      ]
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.portfolio {
  .portfolio__carousel {
    outline: border-box;
    .portfolio__carousel__box {
      display: flex;
      margin-top: 10px;
      -webkit-box-shadow: 4px 4px 12px -7px #333333;
      box-shadow: 4px 4px 12px -7px #333333;
      border-radius: 8px;
      padding: 5px 10px 20px;
      .portfolio__carousel__box__title {
        font-size: 15px;
        font-weight: bold;
      }
      img {
        width: 25%;
        height: auto;
        margin-right: 5%;
      }
      .portfolio__carousel__box__desc {
          font-size: 14px;
    }
    }
  }
}
</style>
