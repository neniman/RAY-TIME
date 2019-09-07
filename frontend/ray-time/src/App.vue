<template>
  <div id="app">
    <div id="nav">
      <router-view id="main-content"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import StartScreen from '@/components/01_StartScreen.vue';
export default Vue.extend({
  name: 'App',
  components: {
    StartScreen
  }
});
</script>


<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

html {
  width: 100%;
  height: 100%;
  background: #3c3c3c;
}

body {
  width: 100%;
  height: 100%;
}

#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  height: 100%;
}

.menu-btn {
  position: absolute;
  top: 10px;
  left: 0;
  padding: 20px;
  width: 19%;
}

.header-img {
  width: 100%;
}

.welcome-img, .register-img {
  width: 100%;
  margin-top: -37px;
}

.header-label {
  position: absolute;
  top: 26px;
  left: 70px;
  height: 34px;
  font-family: Rubik;
  font-size: 28px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.21;
  letter-spacing: 0.36px;
  color: #ffffff;
}
</style>
