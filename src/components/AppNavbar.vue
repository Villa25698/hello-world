<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/">Bardh summerProject </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/news">News</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/password-checker">Password Strength Checker</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/vulnerability-scanner">Vulnerability Scanner</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  // component configuration goes here
}
</script>

<style scoped>
/* CSS styles go here */
</style>


  