<template>
  <div id="app">
    <HeaderItem></HeaderItem>
    <router-view></router-view>
  </div>
</template>
<script>
import Vue from 'vue'
import VueHead from 'vue-head'
import HeaderItem from './components/header.vue'

export default {
  name: 'App',
  components : {
    HeaderItem
  },
  head: {
    meta: [
        { name: 'viewport', content: 'width=device-width,initial-scale=1.0,user-scalable=no' },
        { charset: 'utf-8' },
        { property: 'og:type', content: 'website' }
    ]
  }
}

Vue.use(VueHead)

</script>

<style>
@import "./assets/css/reset.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
