<template>
<div>
  <header>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link class="navbar-brand" to="/">Napat Jiam</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link disabled" to="/API">API</router-link>
      </li>
    </ul>
  </div>
</nav>
  </header>
    <router-view/>
    <footer class="page-footer bg-secondary text-white">
        <div class="center" style="text-align: center;">
          © 2020 Napat Jiam
        </div>
    </footer>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
footer {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  position: absolute;
  width: 100%;
  bottom: 0;
}
header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: auto;
}
.container {padding: 10rem;}
</style>
