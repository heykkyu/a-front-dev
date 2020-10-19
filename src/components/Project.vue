<template>
  <div id="project" class="container section">
    <div class="row">
      <div class="col-md-12">
        <h2 class="title">Projects</h2>
      </div>
    </div>
    <div class="portfolio-cards">
      <div class="row project-card col-md-10 boxshadow-tab">
        <div class="col-md-8 col-lg-10 project-card__info">
          <h3 class="project-card__title"></h3>
          <p class="project-card__description">
            Contact me to get a resume.
          </p>
        </div>
        <div class="col-md-6 col-lg-2 project-card__img">
          <!-- <img 
            :src="imgPath(item.title)"
            alt="project-img"
          /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  data () {
    return {
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
  .project-card {
    margin-left: 0;
    .project-card__img {
      img {
        width: 100%;
        height: inherit;
        object-fit: cover;
        max-height: 370px;
        position: absolute;
        top: 50%;
        right: 10%;
        transform: translateY(-50%);
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
      .project-card__title {
        font-size: 18px;
        line-height: 30px;
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
          &:nth-child(1) {
            margin-left: 10px;
          }
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