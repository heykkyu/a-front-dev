<template>
  <div class="section-comp">
    <div v-for="repo in repoList" :key="repo.id">
      <div v-if="!repo.fork">
        {{repo.name}} // {{repo.html_url}} // {{repo.description}} // {{repo.homepage}} // {{repo.updated_at}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    mounted() {
      this.get();
    },
    data() {
      return {
        repoList: []
      }
    },
    methods: {
      get() {
        axios
        .get('//api.github.com/users/heykkyu/repos')
        .then(res => {
          console.log(res.data);
          this.repoList = res.data;
        })
        .catch(error => console.log(error))
      }
    }
  }
</script>