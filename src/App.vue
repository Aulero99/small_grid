<template>
  <header></header>
  <main>
    <GridTest/>
    <!-- <Demo/> -->
    <!-- <DesignMock/> -->
  </main>
  <footer></footer>
</template>

<script>
import { computed, onBeforeMount, onMounted } from 'vue';
// @ts-ignore
import { AppState } from './AppState';
// @ts-ignore
import { breakpointLogic } from './services/BreakpointLogic.js';

export default {


  setup(){

    onBeforeMount(()=>{
      // @ts-ignore
      breakpointLogic.respondOnline()
    })
    onMounted(()=>{ 
      console.log('onmount')
    })
    return{ appState: computed(() => AppState) }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
