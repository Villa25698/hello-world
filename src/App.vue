<template>  
  <nav>  
    <router-link to="/">Home</router-link> |  
    <router-link to="/news">News</router-link> |  
    <router-link to="/password-checker">Password Strength Checker</router-link> |  
    <router-link to="/vulnerability-scanner">Vulnerability Scanner</router-link>  
  </nav>  
  <router-view/>  
</template>


<style>  
 #app {  
  font-family: Avenir, Helvetica, Arial, sans-serif;  
  -webkit-font-smoothing: antialiased;  
  -moz-osx-font-smoothing: grayscale;  
  text-align: center;  
  color: #000000;  
 }  

 nav {  
  padding: 30 px;  
 }  

 nav a {  
  font-weight: bold;  
  color: #2c3e50;
 }
</style>