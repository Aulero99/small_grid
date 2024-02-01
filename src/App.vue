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
import { suspendors } from 'suspendors';

export default {


  setup(){
    function respond(text){
      console.log(text)

    }
    onBeforeMount(()=>{
      suspendors.under(respond.bind(null, 'breakpoint: under'))
      suspendors.sm(respond.bind(null, 'breakpoint: sm'))
      suspendors.md(respond.bind(null, 'breakpoint: md'))
      suspendors.lg(respond.bind(null, 'breakpoint: lg'))
      suspendors.xl(respond.bind(null, 'breakpoint: xl'))
      suspendors.xxl(respond.bind(null, 'breakpoint: xxl'))
      suspendors.over(respond.bind(null, 'breakpoint: over'))
      suspendors.portrait(respond.bind(null, 'orientation: portrait'))
      suspendors.landscape(respond.bind(null, 'orientation: landscape'))
    })
    onMounted(()=>{ 
      suspendors.setup() 
    })
    return{ appState: computed(() => AppState) }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
