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
          <div class="portfolio__carousel__box boxshadow-tab">
            <img
              :src="item.imagePath" 
              alt=" "
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
          content: 'Made with Vue.js based on Fullpage.js </br> License is own to Corp',
          date: 'September 2019',
          url: 'https://cookierunfont.com',
          imagePath: '/image/cookie.png'
        },
         {
          title: 'Hey Movie',
          content: 'Made with React',
          date: 'September 2019 // not finished yet',
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
  margin-bottom: 100px;
  .portfolio__carousel {
    outline: border-box;
    .portfolio__carousel__box {
      display: flex;
      align-items: center;
      margin-top: 10px;
      .portfolio__carousel__box__title {
        font-size: 16px;
        font-weight: bold;
      }
      img {
        width: 110px;
        height: 110px;
        margin-right: 5%;
        background: linear-gradient(34deg, #642e98 14%, #00d4ff 92%);
        border-radius: 6px;
      }
      .portfolio__carousel__box__desc {
        font-size: 14px;
        .portfolio__carousel__box__date {
          opacity: .6;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
