<template>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
nav {
  background-color: #f8f9fa; /* Light gray background */
  padding: 16px; /* Padding around the nav items */
  text-align: center; /* Center the nav items */
}
</style>

  