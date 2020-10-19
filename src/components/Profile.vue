<template>
  <div id="profile" class="container">
    <div class="row">
      <div class="col-md-10 section__resume resume-list">
        <h2 class="title">Employment</h2>
        <div class="resume-list__block">
          <p class="resume-list__block-title">
            Lunasoft
            <small>Seoul, Korea</small>
          </p>
          <p class="resume-list__block-date">
            Full-Time / 2017.11 - 2020.08
          </p>
          <strong>FrontEnd Developer</strong>
          <p>Lunasoft is a partner company of Kakao & Naver with leading to design and develop conversational experiences across mobile, web and chatbots in Korea.</p>
          
          <p>
            <a class="url" href="https://lunasoft.co.kr" target="_blank">https://lunasoft.co.kr</a>
          </p>
        </div>
        <div class="resume-list__block">
          <p class="resume-list__block-title">
            DevSisters
            <small>Seoul, Korea</small>
          </p>
          <p class="resume-list__block-date">
            Freelancer / 2019.08 - 2019.09
          </p>
          <strong>FrontEnd Developer</strong>
          <p>DevSisters Inc. is a Korean game developer whose main business is mobile games and character products.</p>
          <p>
            <a class="url" href="https://cookierunfont.com" target="_blank">https://cookierunfont.com</a>
          </p>
        </div>
      </div>

      <div class="col-md-10 section__resume resume-list">
        <h2 class="title">education</h2>
        <div class="resume-list__block">
          <p class="resume-list__block-title">
            Sangmyung Unversity
            <small>Cheonan, Korea</small>
          </p>
          <p class="resume-list__block-date">2011.03 - 2017.08</p>
          <p>Business and Industrial Engineering<br/>
              4.1 / 4.5 Scores
          </p>
          <p>
            <a class="url" href="https://www.smu.ac.kr/eng1" target="_blank">https://www.smu.ac.kr/eng1</a>
          </p>
        </div>
        <div class="resume-list__block">
          <p class="resume-list__block-title">University of Missouri St.Louis
            <small>St.Louis, United Sates</small></p>
          <p class="resume-list__block-date">2015.08 - 2016.05</p>
          <p>1 Year Exchange Student Program</p>
          <p>
            <a class="url" href="https://www.umsl.edu/" target="_blank">https://www.umsl.edu</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.resume-list {
  &:nth-child(2) { margin-top: 30px;}
  .resume-list_title {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-weight: 700;
    color: #999;
    margin-bottom: 40px;
   
  }
  .resume-list__block {
    border-left: 2px solid rgba(31, 78, 233, 0.808);
    padding-left: 25px;
    padding-bottom: 50px;
    &::before {
      width: 12px;
      height: 12px;
      border: 2px solid rgba(17, 73, 158, 0.74);
      position: absolute;
      content: "";
      border-radius: 50%;
      background-color: #fff;
      left: 10px;
    }
    small {
      padding-left: 10px;
      color: #222;
    }
    .resume-list__block-title {
      text-transform: uppercase;
      color: rgba(17, 73, 158, 0.74);
      font-size: 17px;
      line-height: 20px;
      font-weight: 700;
      margin-bottom: 0;
    }
    .resume-list__block-date {
      font-size: 14px;
      line-height: 20px;
      color: #999;
      padding-bottom: 10px;
    }
   
    .cal-date {
      color: lightcoral;
    }
  }
}
</style>
