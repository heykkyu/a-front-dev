<template>
  <div id="repository" class="container">
    <div class="resume-intro row">
      <div class="col-md-10">
        <h2 id="hello_header" class="section__title">Repository_</h2>
        <div>
          <div v-for="repo in repoList" :key="repo.id">
            <div v-if="!repo.fork">
              <p>
                <strong>{{repo.name}} </strong>
                created_at {{repo.created_at.substring(0,10)}}
                updated_at {{repo.updated_at.substring(0,10)}}
              </p>
              <p>
                {{repo.description}} 
              </p>
              <p>
                <a target="_blank" :href="repo.html_url" v-text="repo.html_url" /><br>
                <a target="_blank" :href="repo.homepage" v-text="repo.homepage" />
              </p>
              <hr>
            </div>
          </div>
        </div>
        <!-- <a href="" class="section_btn site-btn">
          <img src="./img_btn_icon.png" alt="">Download CV
        </a> -->
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .resume-intro {
    padding-top: 60px;
    padding-bottom: 60px;
    h2 {
      margin-bottom: 40px;
      font-size: 36px;
      line-height: 42px;
      text-indent: 0px;
    }
    p {
      margin-bottom: 30px;
    }
    a {
      color: #1f75fe !important;
    }
  }
</style>


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