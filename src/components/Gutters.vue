<template>
    <!-- Gutters -->
    <div class="row mt-2">
        <div class="col-12">
            <h2>
              Gutters
            </h2>
            <p>
              In order to space around col-x classes you need to apply a gutter style to the row they inhabit. Using a basic g-x you apply equal space around all the col-x classed objects within, you may also apply full to the row and if you do it will set the spacing to instead only space between the objects instead of around. 
            </p>
        </div>
    </div>
    <div class="row cols-3 g-3 mt-2">
        <div class="col p-3 example">
            g-3
        </div>
        <div class="col p-3 example">
            g-3
        </div>
        <div class="col p-3 example">
            g-3
        </div>
        <div class="col p-3 example">
            g-3
        </div>
        <div class="col p-3 example">
            g-3
        </div>
        <div class="col p-3 example">
            g-3
        </div>
        <div class="col p-3 example">
            g-3
        </div>
        <div class="col p-3 example">
            g-3
        </div>
    </div>
    <div class="row g-3 full my-2">
        <div class="col-3 p-3 example">
            g-3 full
        </div>
        <div class="col-3 p-3 example">
            g-3 full
        </div>
        <div class="col-3 p-3 example">
            g-3 full
        </div>
        <div class="col-3 p-3 example">
            g-3 full
        </div>
        <div class="col-3 p-3 example">
            g-3 full
        </div>
        <div class="col-3 p-3 example">
            g-3 full
        </div>
        <div class="col-3 p-3 example">
            g-3 full
        </div>
        <div class="col-3 p-3 example">
            g-3 full
        </div>
    </div>
    <div class="row gx-3 my-2">
        <div class="col-3 p-3 example">
            gx-3
        </div>
        <div class="col-3 p-3 example">
            gx-3
        </div>
        <div class="col-3 p-3 example">
            gx-3
        </div>
        <div class="col-3 p-3 example">
            gx-3
        </div>
        <div class="col-3 p-3 example">
            gx-3
        </div>
        <div class="col-3 p-3 example">
            gx-3
        </div>
        <div class="col-3 p-3 example">
            gx-3
        </div>
        <div class="col-3 p-3 example">
            gx-3
        </div>
    </div>
    <div class="row gy-3 my-2">
        <div class="col-3 p-3 example">
            gy-3
        </div>
        <div class="col-3 p-3 example">
            gy-3
        </div>
        <div class="col-3 p-3 example">
            gy-3
        </div>
        <div class="col-3 p-3 example">
            gy-3
        </div>
        <div class="col-3 p-3 example">
            gy-3
        </div>
        <div class="col-3 p-3 example">
            gy-3
        </div>
        <div class="col-3 p-3 example">
            gy-3
        </div>
        <div class="col-3 p-3 example">
            gy-3
        </div>
    </div>

    <!-- Reactive Gutters -->
    <div class="row mt-2">
      <div class="col-12">
        <h2>
          Reactive Gutters 
        </h2>
        <p>
          Just like the rest of the grid system, the gutters can also be configured to be reactive to the screen size. You can either implement reactivity to the gutters themselves or use reactive elements within the gutters, or both.
        </p>
      </div>
    </div>
    <div class="row g-md-0 g-4 my-2">
        <div class="col-3 p-3 example">
          g-md-1, g4
        </div>
        <div class="col-3 p-3 example">
          g-md-1, g4
        </div>
        <div class="col-3 p-3 example">
          g-md-1, g4
        </div>
        <div class="col-3 p-3 example">
          g-md-1, g4
        </div>
        <div class="col-3 p-3 example">
          g-md-1, g4
        </div>
        <div class="col-3 p-3 example">
          g-md-1, g4
        </div>
        <div class="col-3 p-3 example">
          g-md-1, g4
        </div>
        <div class="col-3 p-3 example">
          g-md-1, g4
        </div>
    </div>
    <div class="row g-md-4 g-0 my-2">
        <div class="col-3 p-3 example">
          g-1, g-md-4
        </div>
        <div class="col-3 p-3 example">
          g-1, g-md-4
        </div>
        <div class="col-3 p-3 example">
          g-1, g-md-4
        </div>
        <div class="col-3 p-3 example">
          g-1, g-md-4
        </div>
        <div class="col-3 p-3 example">
          g-1, g-md-4
        </div>
        <div class="col-3 p-3 example">
          g-1, g-md-4
        </div>
        <div class="col-3 p-3 example">
          g-1, g-md-4
        </div>
        <div class="col-3 p-3 example">
          g-1, g-md-4
        </div>
    </div>
    <div class="row g-3 my-2">
        <div class="col-md-3 col-6 p-3 example">
          g-1, g-md-4
        </div>
        <div class="col-md-3 col-6 p-3 example">
          g-1, g-md-4
        </div>
        <div class="col-md-3 col-6 p-3 example">
          g-1, g-md-4
        </div>
        <div class="col-md-3 col-6 p-3 example">
          g-1, g-md-4
        </div>
        <div class="col-md-3 col-6 p-3 example">
          g-1, g-md-4
        </div>
        <div class="col-md-3 col-6 p-3 example">
          g-1, g-md-4
        </div>
        <div class="col-md-3 col-6 p-3 example">
          g-1, g-md-4
        </div>
        <div class="col-md-3 col-6 p-3 example">
          g-1, g-md-4
        </div>
    </div>
</template>
  
<script>
  export default {
    props:{

    },
    setup() {
      return {
  
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

</style>]