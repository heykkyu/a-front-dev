<template>
  <div id="repository" class="container">
    <div class="resume-intro row">
      <div class="col-md-12">
        <h2 class="section__title">Toy Projects</h2>
        <div>
          <div v-for="repo in filteredlist" :key="repo.id">
            <ul v-if="!repo.fork" class="boxshadow-tab">
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
  ul {
    list-style: none;
    strong { 
      text-transform: uppercase;
      font-weight: bold;
      font-size: 20px;
    }
    p {
      margin-bottom: 5px;
      text-transform: uppercase;
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