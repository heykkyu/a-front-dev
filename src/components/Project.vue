<template>
  <div id="portfolio" class="container section">
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
            <li><a href="" data-portfolio-target-tag="mobile" class="">mobile</a></li>
            <li><a href="" data-portfolio-target-tag="web" class="">web</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="portfolio-cards">
      <div class="row project-card" data-toggle="modal" data-target="#portfolioModal" data-portfolio-tag="web" style="display: flex;">
        <div class="col-md-6 col-lg-3 project-card__img">
          <img class="" src="../assets/profil-pic-usa.jpeg" alt="project-img">
        </div>
        <div class="col-md-6 col-lg-7 project-card__info">
          <h3 class="project-card__title">Title </h3>
          <p class="project-card__description">
            Description
          </p>
          <p class="project-card__stack">Used stack:</p>
          <ul class="tags">
            <li>html5</li>
            <li>css3</li>
            <li>JavaScript</li>
          </ul>
          <a href="" class="project-card__link">heykkyu.com</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 100px;
}
.portfolio-menu {
  padding: 0;
  list-style: none;
  ul {
    padding-left: 0;
    li {
      display: inline-block;
      padding-right: 15px;
    }
  }
}
.project-card__img {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
.portfolio-card {
  
  .project-card {
    margin-left: 0;
    margin-bottom: 40px;
    transition: box-shadow .3s;
    margin-right: 0;
    .project-card__info {
      border: 1px solid #f1f1f1;
      padding: 50px 50px 40px 30px;
    }
  }
}
</style>