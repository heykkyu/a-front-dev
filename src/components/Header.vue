<template>
    <div class="menu">
      <div class="container">
      <div class="row">
        <div class="menu__wrapper d-none d-lg-block col-md-12">
          <nav class="">
            <ul>
              <router-link to="#intro">INTRO</router-link>
              <router-link to="#repository">INFOR</router-link>
              <router-link to="#repository">PROJECTS</router-link>
              <router-link to="#repository">REPOSITORY</router-link>
            </ul>
          </nav>
        </div>
        <div class="menu__wrapper col-md-12 d-lg-none">
          <button type="button" class="menu__mobile-button">
            <span><i class="fa fa-bars" aria-hidden="true"></i></span>
          </button>
        </div>
      </div>
     
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  position: fixed;
  padding: 0;
  height: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 70px;
  transition: all .5s;
  color: #fff;
  &.active {
    background-color: #fff;
    box-shadow: 0 5px 8px 0 rgba(0,0,0,.14);
  }
  .menu__wrapper {
    z-index: 1;
    margin-top: 50px;
    transition: all .3s;
    nav {
      font-size: 14px;
      line-height: 20px;
      text-transform: uppercase;
      font-weight: 700;
      a {
        padding-right: 50px;
      }
    }
  }
}
</style>