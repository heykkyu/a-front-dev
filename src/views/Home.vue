<template>
  <div class="Resume">
    <Resume />
    <Intro />
  </div>
</template>

<script>
// @ is an alias to /src
import Resume from '@/components/Resume.vue'
import Intro from '@/components/Intro.vue'

export default {
  name: 'home',
  components: {
    Resume,
    Intro
  }
}
</script>
