<template>
  <div class="section-comp">
    {{this.list}}
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
        list: []
      }
    },
    methods: {
      get() {
        axios.get('//api.github.com/user/repos', 
        // {headers: "Authorization: 'token 06e50a5aed2c45f3434eac3082d050e819998ca7'"})
         {
            headers: { Authorization: "token 06e50a5aed2c45f3434eac3082d050e819998ca7"}
        })
        .then(res => {
          console.log(res);
          this.list = res;
        })

      }
    }
  }
</script>