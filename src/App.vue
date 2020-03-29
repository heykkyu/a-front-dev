<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');
#app {
  font-family: 'Roboto Mono', Helvetica, Arial, monospace, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  a { color : unset;}
}

</style>
