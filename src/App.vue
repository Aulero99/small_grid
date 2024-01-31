<template>
  <header></header>
  <main>
    <GridTest/>
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
      suspendors.under(respond.bind(null, 'under'))
      suspendors.sm(respond.bind(null, 'sm'))
      suspendors.md(respond.bind(null, 'md'))
      suspendors.lg(respond.bind(null, 'lg'))
      suspendors.xl(respond.bind(null, 'xl'))
      suspendors.xxl(respond.bind(null, 'xxl'))
      suspendors.over(respond.bind(null, 'over'))
      suspendors.portrait(respond.bind(null, 'portrait'))
      suspendors.landscape(respond.bind(null, 'landscape'))
    })
    onMounted(()=>{ suspendors.setup() })
    return{ appState: computed(() => AppState) }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
