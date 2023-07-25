<template>
  <header></header>
  <main>
    <GridTest/>
  </main>
  <footer></footer>
</template>

<script>
import { computed } from 'vue';
import { AppState } from './AppState';

export default {
  setup(){
    return{
      appState: computed(() => AppState)
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
body{
  margin: 0;
}
</style>
