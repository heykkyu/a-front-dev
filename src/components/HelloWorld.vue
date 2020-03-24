<template>
  <div class="hello">
   
<!--Header-->
  <header class="main-header" style="background-image: url(assets/img/img_bg_header.jpg)">
    <div class="container">
      <div class="row personal-profile">
        <div class="col-md-4 personal-profile__avatar">
          <img class="" src="" alt="avatar">
        </div>
        <div class="col-md-8">
          <p class="personal-profile__name">Jeongkyu Kim</p>
          <p class="personal-profile__work">Frontend Developer</p>
          <div class="personal-profile__contacts">
            <dl class="contact-list contact-list__opacity-titles">
              <dt>Birth Year:</dt>
              <dd>1991</dd>
              <dt>Phone:</dt>
              <dd><a href="tel:+821099419961">010-9941-9961</a></dd>
              <dt>Email:</dt>
              <dd><a href="mailto:heykkyu@gmail.com">heykkyu@gmail.com</a></dd>
              <dt>Address:</dt>
              <dd>Gangnam-gu, Seoul, South Korea</dd>
            </dl>
          </div>
          <p class="personal-profile__social">
            <a href="https://previews.aspirity.com/spirit/" target="_blank"><i class="fa fa-github"></i></a>
            <a href="https://previews.aspirity.com/spirit/" target="_blank"><i class="fa fa-linkedin-square"></i></a>
            <a href="https://previews.aspirity.com/spirit/" target="_blank"><i class="fa fa-facebook-square"></i></a>
          </p>
        </div>
      </div>
    </div>
  </header>
<!--Header-->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
