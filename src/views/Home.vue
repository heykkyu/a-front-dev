<template>
  <div class="Resume">
    <Resume />
    <Intro />
    <Repository />
  </div>
</template>

<script>
// @ is an alias to /src
import Resume from '@/components/Resume.vue'
import Intro from '@/components/Intro.vue'
import Repository from '@/components/Repository.vue'

export default {
  name: 'home',
  components: {
    Resume,
    Intro,
    Repository
  }
}
</script>
