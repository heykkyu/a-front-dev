<template>
  <div class="Resume">
    <hello />
    <portfolio />
    <intro />
    <profile />
    <project />
    <repository />
  </div>
</template>


<script>
// @ is an alias to /src
import Hello from '@/components/Hello.vue'
import Portfolio from '@/components/Portfolio.vue'
import Intro from '@/components/Intro.vue'
import Profile from '@/components/Profile.vue'
import Project from '@/components/Project.vue'
import Repository from '@/components/Repository.vue'

export default {
  name: 'home',
  components: {
    Hello,
    Portfolio,
    Intro,
    Profile,
    Project,
    Repository
  }
}
</script>