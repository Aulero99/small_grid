<template>
    <!-- Gutters -->
    <ss-row class="mt-2">
        <col-12 class="p-2">
            <h2>
              Gutters
            </h2>
            <p>
              In order to space around col-x classes you need to apply a gutter style to the row they inhabit. Using a basic g-x you apply equal space around all the col-x classed objects within, you may also apply full to the row and if you do it will set the spacing to instead only space between the objects instead of around. 
            </p>
        </col-12>
    </ss-row>
    <ss-row cols-3 g-3 class="mt-2">
        <ss-col class="p-3 example">
            g-3
        </ss-col>
        <ss-col class="p-3 example">
            g-3
        </ss-col>
        <ss-col class="p-3 example">
            g-3
        </ss-col>
        <ss-col class="p-3 example">
            g-3
        </ss-col>
        <ss-col class="p-3 example">
            g-3
        </ss-col>
        <ss-col class="p-3 example">
            g-3
        </ss-col>
        <ss-col class="p-3 example">
            g-3
        </ss-col>
        <ss-col class="p-3 example">
            g-3
        </ss-col>
    </ss-row>
    <ss-row g-3 full class="my-2">
        <col-3 class="p-3 example">
            g-3 full
        </col-3>
        <col-3 class="p-3 example">
            g-3 full
        </col-3>
        <col-3 class="p-3 example">
            g-3 full
        </col-3>
        <col-3 class="p-3 example">
            g-3 full
        </col-3>
        <col-3 class="p-3 example">
            g-3 full
        </col-3>
        <col-3 class="p-3 example">
            g-3 full
        </col-3>
        <col-3 class="p-3 example">
            g-3 full
        </col-3>
        <col-3 class="p-3 example">
            g-3 full
        </col-3>
    </ss-row>
    <ss-row gx-3 class="my-2">
        <col-3 class="p-3 example">
            gx-3
        </col-3>
        <col-3 class="p-3 example">
            gx-3
        </col-3>
        <col-3 class="p-3 example">
            gx-3
        </col-3>
        <col-3 class="p-3 example">
            gx-3
        </col-3>
        <col-3 class="p-3 example">
            gx-3
        </col-3>
        <col-3 class="p-3 example">
            gx-3
        </col-3>
        <col-3 class="p-3 example">
            gx-3
        </col-3>
        <col-3 class="p-3 example">
            gx-3
        </col-3>
    </ss-row>
    <ss-row gy-3 class="my-2">
        <col-3 class="p-3 example">
            gy-3
        </col-3>
        <col-3 class="p-3 example">
            gy-3
        </col-3>
        <col-3 class="p-3 example">
            gy-3
        </col-3>
        <col-3 class="p-3 example">
            gy-3
        </col-3>
        <col-3 class="p-3 example">
            gy-3
        </col-3>
        <col-3 class="p-3 example">
            gy-3
        </col-3>
        <col-3 class="p-3 example">
            gy-3
        </col-3>
        <col-3 class="p-3 example">
            gy-3
        </col-3>
    </ss-row>

    <!-- Reactive Gutters -->
    <ss-row class="mt-2">
      <col-12 class="p-2">
        <h2>
          Reactive Gutters 
        </h2>
        <p>
          Just like the rest of the grid system, the gutters can also be configured to be reactive to the screen size. You can either implement reactivity to the gutters themselves or use reactive elements within the gutters, or both.
        </p>
      </col-12>
    </ss-row>
    <ss-row g-4 g-md-0 class="my-2">
        <col-3 class="p-3 example">
          g-md-0, g4
        </col-3>
        <col-3 class="p-3 example">
          g-md-0, g4
        </col-3>
        <col-3 class="p-3 example">
          g-md-0, g4
        </col-3>
        <col-3 class="p-3 example">
          g-md-0, g4
        </col-3>
        <col-3 class="p-3 example">
          g-md-0, g4
        </col-3>
        <col-3 class="p-3 example">
          g-md-0, g4
        </col-3>
        <col-3 class="p-3 example">
          g-md-0, g4
        </col-3>
        <col-3 class="p-3 example">
          g-md-0, g4
        </col-3>
    </ss-row>
    <ss-row g-md-4 g-0 class="my-2">
        <col-3 class="p-3 example">
          g-0, g-md-4
        </col-3>
        <col-3 class="p-3 example">
          g-0, g-md-4
        </col-3>
        <col-3 class="p-3 example">
          g-0, g-md-4
        </col-3>
        <col-3 class="p-3 example">
          g-0, g-md-4
        </col-3>
        <col-3 class="p-3 example">
          g-0, g-md-4
        </col-3>
        <col-3 class="p-3 example">
          g-0, g-md-4
        </col-3>
        <col-3 class="p-3 example">
          g-0, g-md-4
        </col-3>
        <col-3 class="p-3 example">
          g-0, g-md-4
        </col-3>
    </ss-row>
    <ss-row g-3 class="row g-3 my-2">
        <col-6 md-3 class="col-md-3 col-6 p-3 example">
          col-6 md-3
        </col-6>
        <col-6 md-3 class="col-md-3 col-6 p-3 example">
          col-6 md-3
        </col-6>
        <col-6 md-3 class="col-md-3 col-6 p-3 example">
          col-6 md-3
        </col-6>
        <col-6 md-3 class="col-md-3 col-6 p-3 example">
          col-6 md-3
        </col-6>
        <col-6 md-3 class="col-md-3 col-6 p-3 example">
          col-6 md-3
        </col-6>
        <col-6 md-3 class="col-md-3 col-6 p-3 example">
          col-6 md-3
        </col-6>
        <col-6 md-3 class="col-md-3 col-6 p-3 example">
          col-6 md-3
        </col-6>
        <col-6 md-3 class="col-md-3 col-6 p-3 example">
          col-6 md-3
        </col-6>
    </ss-row>
</template>