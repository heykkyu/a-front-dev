<template>
  <div class="Resume">
    <profile />
    <intro />
    <career />
    <!-- <project /> -->
    <repository />
  </div>
</template>


<script>
// @ is an alias to /src
import Profile from '@/components/Profile.vue'
import Intro from '@/components/Intro.vue'
import Career from '@/components/Career.vue'
import Project from '@/components/Project.vue'
import Repository from '@/components/Repository.vue'

export default {
  name: 'home',
  components: {
    Profile,
    Intro,
    Career,
    Project,
    Repository
  }
}
</script>