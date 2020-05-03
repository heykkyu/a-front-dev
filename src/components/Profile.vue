<template>
  <div id="profile" class="container">
    <div class="row">
      <div class="col-md-10 section__resume resume-list">
        <h3 class="resume-list_title">employment</h3>
        <div class="resume-list__block">
          <p class="resume-list__block-title">Lunasoft</p>
          <p class="resume-list__block-date">
            2017.11 -
          </p>
          <p class="cal-date">
            Total {{careerPeriod}} years career based on today.
          </p>
          <p>Lunasoft is a partner company of Kakao & Naver with leading to design and develop conversational experiences across mobile, web and chatbots in Korea.</p>
          <p>
            <a href="https://lunasoft.co.kr">https://lunasoft.co.kr</a>
          </p>
        </div>
      </div>

      <div class="col-md-10 section__resume resume-list">
        <h3 class="resume-list_title">education</h3>
        <div class="resume-list__block">
          <p class="resume-list__block-title">Sangmyung Unversity <br>(South Korea)</p>
          <p class="resume-list__block-date">2011.03 - 2017.08</p>
          <p>Business and Industrial Engineering</p>
          <p>4.1 / 4.5</p>
        </div>
        <div class="resume-list__block">
          <p class="resume-list__block-title">University of Missouri St.Louis <br>(United States of America)</p>
          <p class="resume-list__block-date">2015.08 - 2016.05</p>
          <p>1 Year Exchange Student Program</p>
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
    .resume-list__block-title {
      text-transform: uppercase;
      color: rgba(17, 73, 158, 0.74);
      font-size: 14px;
      line-height: 20px;
      font-weight: 700;
      padding-bottom: 5px;
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

<script>
export default {
  computed: {
    careerPeriod () {
      const date = new Date();
      const calYear = date.getFullYear() -2017 -1;
      const calMonth = date.getMonth() -11;

      return `${calYear}.${Math.abs(calMonth) -2}`;
    }
  }
}
</script>