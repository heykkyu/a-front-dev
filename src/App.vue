<template>
  <div id="app">
    <Header />
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
@import "@/assets/_style.scss";
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');
</style>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header,
  }
}
</script>


