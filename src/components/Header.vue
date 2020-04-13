<template>
    <div class="menu">
      <div class="container">
      <div class="row">
        <div class="menu__wrapper d-none d-lg-block col-md-12">
          <nav class="">
            <ul>
              <router-link to="#hello">HELLO</router-link>
              <router-link to="#profile">PROFILE</router-link>
              <router-link to="#project">PROJECT</router-link>
              <router-link to="#repository">REPOSITORY</router-link>
            </ul>
          </nav>
        </div>
        <!-- <div class="menu__wrapper col-md-12 d-lg-none">
          <button type="button" class="menu__mobile-button">
            <li class="mobile-lines">
              <span></span>
              <span></span>
              <span></span>
            </li>
          </button>
        </div> -->
      </div>
    </div>
    <div class="mobile-menu d-lg-none">
      <div class="container">
        <div class="mobile-menu__close">
          <span><i class="mdi mdi-close" aria-hidden="true"></i></span>
        </div>
        <nav class="mobile-menu__wrapper">
          <ul>
            <router-link to="#hello">HELLO</router-link>
            <router-link to="#profile">PROFILE</router-link>
            <router-link to="#project">PROJECT</router-link>
            <router-link to="#repository">REPOSITORY</router-link>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  position: fixed;
  background: rgba(0,0,0, 0.2);
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
    margin-top: 30px;
    transition: all .3s;
    nav {
      font-size: 14px;
      line-height: 20px;
      text-transform: uppercase;
      font-weight: 700;
      ul {
        padding-left: 0;
        a {
          padding-right: 50px;
        }
      }
    }
    button {
      background: none;
      border: none;
    }
    .mobile-lines {
      display: block;
      position: relative;
      width: 30px;
      height: 25px;
      text-align: right;
      margin: 3px;
      span {
        display: inline-block;
        -webkit-transition: all .4s;
        transition: all .4s;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        position: relative;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: #1f75fe;
        border-radius: 4px;
      }
    }
  }
  @media screen and (max-width: 990px) {
    display: none;
  }
}
.mobile-menu {
  position: fixed;
  top: 20px;
  left: 0;
  width: 0;
  height: 0;
  overflow: hidden;
  text-align: center;
  z-index: 9999;
  transition: all .3s ease;
  padding: 0;
  background-color: rgba(0,0,0,.8);
  opacity: 0;
  &.active {
    height: 100%;
    width: 100%;
    top: 0;
    opacity: 1;
  }
  .container {
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;
    width: 100%;
    .mobile-menu__close {
      color: #fff;
      transition: all .3s;
      position: absolute;
      top: 50px;
      background-color: transparent;
      border: none;
    }
    .mobile-menu__wrapper {
      padding: 30px 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 100%;
      li {
        list-style: none;
        padding: 6px 0;
        a {
          color: #fff;
          display: inline-block;
          padding: 11px;
          position: relative;
        }
      }
    }
  }
}
</style>