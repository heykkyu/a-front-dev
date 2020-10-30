<template>
  <div id="app">
    <!-- <Header /> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "@/assets/_style.scss";
</style>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header,
  }
}
</script>


