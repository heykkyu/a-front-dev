<template>
  <div id="app">
    <!-- <Header /> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "@/assets/_style.scss";
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');
</style>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header,
  }
}
</script>


