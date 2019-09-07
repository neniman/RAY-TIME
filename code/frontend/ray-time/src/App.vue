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

</style>
