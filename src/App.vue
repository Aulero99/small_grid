<template>
  <header></header>
  <main>
    <Grid/>
    <Utilities/>
    <Skeleton/>
    <Root/>
  </main>
  <footer></footer>
</template>

<script>
import { computed, onBeforeMount, onMounted } from 'vue';
// @ts-ignore
import { AppState } from './AppState';
// @ts-ignore
import { breakpointLogic } from './services/BreakpointLogic.js';
import { options, suspendors } from 'suspendors';

export default {


  setup(){

    onBeforeMount(()=>{
      // @ts-ignore
      // options.dev()
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
