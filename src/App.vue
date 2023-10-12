<template>
  <header></header>
  <main>
    <!-- <GridTest/> -->
    <DesignMock/>
  </main>
  <footer></footer>
</template>

<script>
import { computed, onBeforeMount, onMounted } from 'vue';
// @ts-ignore
import { AppState } from './AppState';
// @ts-ignore
import { smallgrid } from './smallgrid/dist/js/smallgrid';

export default {
  setup(){
    onBeforeMount(()=>{
      smallgrid.setup()
    })
    return{ appState: computed(() => AppState) }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
