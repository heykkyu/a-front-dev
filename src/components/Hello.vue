<template>
  <header id="hello" class="main-header">
    <div class="container">
      <div class="row personal-profile">
        <div class="personal-profile__avatar">
          <img class="" src="//res.cloudinary.com/dx8hdbmhz/image/upload/v1587703210/profile-pic-apple_hcvrbb.png" alt="avatar">
        </div>
        <div class="personal-profile_text">
          <p class="personal-profile__name">Jeongkyu Kim</p>
          <p class="personal-profile__work">Frontend Developer</p>
          <div class="personal-profile__contacts">
            <dl class="contact-list contact-list__opacity-titles">
              <dt>Email</dt>
              <dd><a href="mailto:heykkyu@gmail.com" target="_blank">heykkyu@gmail.com</a></dd>
              <dt>Address</dt>
              <dd>Gangnam-gu, Seoul, South Korea</dd>
            </dl>
          </div>
          <p class="personal-profile__social">
            <a href="//github.com/heykkyu?tab=repositories" target="_blank">
              <img src="/image/git.png"/>
            </a>
            <a href="//www.linkedin.com/in/heykkyu" target="_blank">
             <img src="/image/linkedin.png"/>
            </a>
            <a href="//blog.naver.com/heysiki" target="_blank">
              <img src="/image/blog.png"/>
            </a>
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.main-header {
  background: linear-gradient(34deg, rgba(100,46,152,1) 14%, rgba(0,212,255,1) 92%);
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  position: relative;
  margin-bottom: 40px;
  color: #fff;
  padding-top: 100px;
  @media screen and (max-width: 990px) {
    background: linear-gradient(34deg, rgba(100,46,152,1) 14%, rgba(0,212,255,1) 92%);
  }
  .personal-profile {
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    .personal-profile__avatar {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 33.33333%;
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
      img {
        border-radius: 5px;
        box-shadow: 0 0 27px rgba(96,96,96,.34);
        width: 90%;
        height: 380px;
        -o-object-fit: cover;
        object-fit: cover;
        margin-top: 10px;
        position: relative;
        top: 40px;
      }
      @media screen and (max-width: 990px) {
        display: none;
      }
    }
    .personal-profile_text {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 66.66667%;
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
      margin-top: 40px;
      @media screen and (max-width: 990px) {
        margin-left: 15px;
        flex: none;
        max-width: 100%;
      }
      .personal-profile__name {
        font-size: 44px;
        line-height: 50px;
        font-weight: 700;
        margin-top: 40px;
        margin-bottom: 10px;
      }
      .personal-profile__work {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 40px;
      }
      .personal-profile__contacts {
        margin-bottom: 20px;
        .contact-list {
          font-size: 16px;
          line-height: 24px;
          margin-top: 70px;
          dt {
            opacity: .4;
            float: left;
            font-weight: 700;
            text-transform: uppercase;
          }
          dd {
            padding-left: 100px;
            margin-bottom: 15px;
          }
        }
      }
      .personal-profile__social {
        margin-bottom: 35px;
        a {
          font-size: 24px;
          margin-right: 15px;
          img {
            max-width: 30px;
            opacity: .5;
            &:nth-child(1) {
              max-width: 25px;
            }
          }
        }
      }
    }
  }
}

</style>
