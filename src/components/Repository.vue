<template>
  <div id="repository" class="container">
    <div class="resume-intro row">
      <div class="col-md-10">
        <h2 id="hello_header" class="section__title">Open Source Projects_</h2>
        <div>
          <div v-for="repo in filteredlist" :key="repo.id">
            <ul v-if="!repo.fork">
              <p>
                <strong>{{repo.name}} </strong>
              </p>
              <p>
                {{repo.description}} 
              </p>
              <li>
                <a target="_blank" :href="repo.html_url" v-text="repo.html_url" /><br>
                <a target="_blank" :href="repo.homepage" v-text="repo.homepage" />
              </li>
              <li class="date">
                 created_at: {{repo.created_at.substring(0,10)}} / updated_at: {{repo.updated_at.substring(0,10)}}
              </li>
              <hr>
            </ul>
          </div>
        </div>
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
  ul {
    strong { 
      text-transform: uppercase;
      font-weight: bold;
      font-size: 20px;
    }
    p {
      margin-bottom: 5px;
      text-transform: uppercase;
      margin-left: -20px;
    }
    .date {
      color: gray;
      font-size: 80%;
    }
      a {
    color: #1f75fe !important;
    }
  }
}
</style>


<script>
import axios from 'axios';

export default {
  mounted() {
    this.get();
  },
  computed: {
    filteredlist() {
      return this.repoList.sort(function (a,b) {
        a.created_at < b.created_at ? -1 : 1;
        // will fix soon.
      });
    }
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