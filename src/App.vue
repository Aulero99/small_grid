<template>
  <header></header>
  <main>
    <Modals/>
    <Grid/>
    <Utilities/>
    <Masonry/>
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
    onMounted(()=>{ 
      console.log('onmount')
    })
    return{ appState: computed(() => AppState) }
  }
}
</script>

<style lang="scss">
@use './assets/scss/main'
</style>
