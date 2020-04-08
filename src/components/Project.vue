<template>
    <section id="portfolio" class="container section">
    <div class="row">
      <div class="col-md-12">
        <h2 id="portfolio_header" class="section__title" style="text-indent: 0px;">My projects_</h2>
      </div>
    </div>
    <div class="row portfolio-menu">
      <div class="col-md-12">
        <nav>
          <ul>
            <li><a href="" data-portfolio-target-tag="all" class="portfolio-menu__link--active">all</a></li>
            <li><a href="" data-portfolio-target-tag="mobile apps" class="">mobile apps</a></li>
            <li><a href="" data-portfolio-target-tag="web-sites" class="">web-sites</a></li>
            <li><a href="" data-portfolio-target-tag="landing-pages">landing pages</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="portfolio-cards">
      <div class="row project-card" data-toggle="modal" data-target="#portfolioModal" data-portfolio-tag="web-sites" style="display: flex;">
        <div class="col-md-6 col-lg-5 project-card__img">
          <img class="" src="assets/img/img_project_1_mono.png" alt="project-img">
        </div>
        <div class="col-md-6 col-lg-7 project-card__info">
          <h3 class="project-card__title">Mobile and desktop app for London hostel store  </h3>
          <p class="project-card__description">
            Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye.
            Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham.
          </p>
          <p class="project-card__stack">Used stack:</p>
          <ul class="tags">
            <li>html5</li>
            <li>css3</li>
            <li>JavaScript</li>
            <li>bower</li>
            <li>grunt</li>
          </ul>
          <a href="" class="project-card__link">www.superapp.com</a>
        </div>
      </div>
      <div class="row project-card" data-toggle="modal" data-target="#portfolioModal" data-portfolio-tag="mobile apps" style="display: flex;">
        <div class="col-md-6 col-lg-5 project-card__img">
          <img class="" src="assets/img/img_project_2_mono.png" alt="project-img">
        </div>
        <div class="col-md-6 col-lg-7 project-card__info">
          <h3 class="project-card__title">Web app page for trevel company</h3>
          <p class="project-card__description">
            Preference any astonished unreserved mrs. Prosperous understood middletons in conviction an
             uncommonly do. Supposing so be resolving breakfast am or perfectly. Is drew am hill from mr.
          </p>
          <p class="project-card__stack">Used stack:</p>
          <ul class="tags">
            <li>html5</li>
            <li>css3</li>
            <li>JavaScript</li>
            <li>BEM</li>
            <li>bower</li>
            <li>grunt</li>
          </ul>
          <a href="" class="project-card__link">www.travellend.com</a>
        </div>
      </div>
      <div class="row project-card" data-toggle="modal" data-target="#portfolioModal" data-portfolio-tag="landing-pages" style="display: flex;">
        <div class="col-md-6 col-lg-5 project-card__img">
        <img class="" src="assets/img/img_project_3_mono.png" alt="project-img">
      </div>
        <div class="col-md-6 col-lg-7 project-card__info">
        <h3 class="project-card__title">Admin template for Photo Service</h3>
        <p class="project-card__description">
          Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye.
          Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham.
        </p>
        <p class="project-card__stack">Used stack:</p>
        <ul class="tags">
          <li>html5</li>
          <li>css3</li>
          <li>JavaScript</li>
          <li>BEM</li>
          <li>bower</li>
          <li>grunt</li>
        </ul>
        <a href="" class="project-card__link">www.coolphoto.com</a>
      </div>
      </div>
    </div>
  </section>
</template>