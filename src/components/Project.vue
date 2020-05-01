<template>
  <div id="project" class="container section">
    <div class="row">
      <div class="col-md-12">
        <h2 class="section__title">Projects_</h2>
      </div>
    </div>
    <div class="portfolio-cards"
      v-for="item in projectList"
      :key="item.title"
    >
      <div class="row project-card col-md-10">
        <div class="col-md-6 col-lg-4 project-card__img">
          <img 
            :src="imgPath(item.title)"
            alt="project-img"
          />
        </div>
        <div class="col-md-6 col-lg-8 project-card__info">
          <h3 class="project-card__title">{{item.title}}</h3>
          <p class="project-card__description">
            <span v-html="item.desc"></span>
          </p>
          <p class="project-card__stack">Used stack:</p>
          <ul class="tags">
            <li v-for="stack in item.stack" :key="stack">
              {{stack}}
            </li>
          </ul>
          <template v-for="link in item.link">
            <a :href="link" class="project-card__link" target="_blank" :key="link">
              {{link.length > 30 ? 'amazon-short-url' :link}}
            </a>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  data () {
    return {
      projectList: [
        {title: 'front-dev', desc: 'Resume Page of Jeongkyu Kim', stack: ['Vue.js', 'Sass(Scss)', 'Javascript', 'Netlify Page', 'github API'], link: ['https://heykkyu.com']},
        {title: 'online-store', desc: '모바일 쇼핑 웹 페이지 구축 진행', stack: ['Angular', 'RxJS'], link: ['https://www.amazon.com/clouddrive/share/5P2UUP3nwTSMAcpysfz8f3b6LGfansPEKYlGtjqffud']},
        {title: 'cookierun-font', desc: '쿠키런폰트 PC/Mobile 반응형 페이지 구현 ', stack: ['Vue.js', 'fullpage.js', 'Sass(Scss)', 'Javascript', 'Project Build'], link: ['https://cookierunfont.com']},
        {title: 'parcel-return', desc: '카카오톡을 통해 쇼핑몰 공용 반품&회수 페이지 구현 <br> -	전 페이지 퍼블리싱<br>-	카카오톡 인앱 브라우저 및 모바일 기기 최적화 및 호환성 고려<br>-	반품 섹션별 SPA PAGE 구성', stack: ['vue.js', 'scss', 'Javascript', 'php/Laravel'], link: ''},
        {title: 'chatbot-page', desc: '상담톡 파트너사들을 위한 어드민 페이지 리뉴얼 ', stack: ['Vue.js', 'Sass(Scss)', 'Javascript'], link: ''},
        {title: 'image-error', desc: '오류이미지 검출 로직 서비스 리팩토링', stack: ['Vue.js', 'php/Laravel', 'SQL', 'Sass(Scss)' ], link: ''},
      ]
    }
  },
  methods: {
    imgPath(title) {
      return `/image/${title}.png`;
    }
  }
}

</script>

<style lang="scss" scoped>
.container {
  margin-top: 100px;
  .section__title {
    margin-bottom: 40px;
    font-size: 36px;
    line-height: 42px;
    text-indent: 0px;
  }
  .project-card {
    margin-left: 0;
    margin-bottom: 40px;
    transition: box-shadow .3s;
    border: 1px solid #f1f1f1;
    margin-right: 0;
    .project-card__img {
      img {
        width: 100%;
        height: inherit;
        object-fit: cover;
        max-height: 370px;
        position: absolute;
        top: 50%;
        transform: translate(-15px, -50%);
        @media screen and (max-width: 990px) {
          position: relative;
          top: unset;
          transform: unset;
          height: 100%;
        }
      }
    }
    .project-card__info {
      padding: 50px 5px 40px 30px;
      // background-size: 25%;
      // background-position: left;
      // background-repeat: no-repeat;
      // padding-left: 30%;
      // &.front-dev { background-image: url('../assets/front-dev.png');}
      .project-card__title {
        font-size: 18px;
        line-height: 30px;
        text-transform: uppercase;
        margin-bottom: 15px;
        font-weight: 700;
      }
      .project-card__description {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 45px;
      }
      .tags {
        padding-inline-start: 5px;
        li {
          display: inline-block;
          font-size: 14px;
          line-height: 20px;
          background-color: #fff;
          box-shadow: 0 1px 4px rgba(0,0,0,.14);
          padding: 5px 10px;
          margin-right: 10px;
          border-radius: 3px;
          margin-top: 5px;
        }
      }
      .project-card__link {
        margin-bottom: -25px;
        font-size: 14px;
        line-height: 20px;
        float: right;
        color: #1f75fe !important;
      }
    }
  }
}
</style>