<template>
    <!-- Gutters -->
    <s-row class="mt-2">
        <s-col-12 class="px-2 pt-2 pb-1">
            <h2>
              Gutters
            </h2>
            <p>
              In order to space around s-col-x classes you need to apply a gutter style to the row they inhabit. Using a basic g-x you apply equal space around all the s-col-x classed objects within, you may also apply full to the row and if you do it will set the spacing to instead only space between the objects instead of around. 
            </p>
        </s-col-12>
    </s-row>
    <s-row cols-3 g-3>
        <s-col class="p-3 example">
            g-3
        </s-col>
        <s-col class="p-3 example">
            g-3
        </s-col>
        <s-col class="p-3 example">
            g-3
        </s-col>
        <s-col class="p-3 example">
            g-3
        </s-col>
        <s-col class="p-3 example">
            g-3
        </s-col>
        <s-col class="p-3 example">
            g-3
        </s-col>
        <s-col class="p-3 example">
            g-3
        </s-col>
        <s-col class="p-3 example">
            g-3
        </s-col>
    </s-row>
    <s-row g-3 full class="mt-3">
        <s-col-3 class="p-3 example">
            g-3 full
        </s-col-3>
        <s-col-3 class="p-3 example">
            g-3 full
        </s-col-3>
        <s-col-3 class="p-3 example">
            g-3 full
        </s-col-3>
        <s-col-3 class="p-3 example">
            g-3 full
        </s-col-3>
        <s-col-3 class="p-3 example">
            g-3 full
        </s-col-3>
        <s-col-3 class="p-3 example">
            g-3 full
        </s-col-3>
        <s-col-3 class="p-3 example">
            g-3 full
        </s-col-3>
        <s-col-3 class="p-3 example">
            g-3 full
        </s-col-3>
    </s-row>
    <s-row gx-3 class="mt-3">
        <s-col-3 class="p-3 example">
            gx-3
        </s-col-3>
        <s-col-3 class="p-3 example">
            gx-3
        </s-col-3>
        <s-col-3 class="p-3 example">
            gx-3
        </s-col-3>
        <s-col-3 class="p-3 example">
            gx-3
        </s-col-3>
        <s-col-3 class="p-3 example">
            gx-3
        </s-col-3>
        <s-col-3 class="p-3 example">
            gx-3
        </s-col-3>
        <s-col-3 class="p-3 example">
            gx-3
        </s-col-3>
        <s-col-3 class="p-3 example">
            gx-3
        </s-col-3>
    </s-row>
    <s-row gy-3 class="mt-3">
        <s-col-3 class="p-3 example">
            gy-3
        </s-col-3>
        <s-col-3 class="p-3 example">
            gy-3
        </s-col-3>
        <s-col-3 class="p-3 example">
            gy-3
        </s-col-3>
        <s-col-3 class="p-3 example">
            gy-3
        </s-col-3>
        <s-col-3 class="p-3 example">
            gy-3
        </s-col-3>
        <s-col-3 class="p-3 example">
            gy-3
        </s-col-3>
        <s-col-3 class="p-3 example">
            gy-3
        </s-col-3>
        <s-col-3 class="p-3 example">
            gy-3
        </s-col-3>
    </s-row>

    <!-- Reactive Gutters -->
    <s-row class="mt-2">
      <s-col-12 class="p-2">
        <h2>
          Reactive Gutters 
        </h2>
        <p>
          Just like the rest of the grid system, the gutters can also be configured to be reactive to the screen size. You can either implement reactivity to the gutters themselves or use reactive elements within the gutters, or both.
        </p>
      </s-col-12>
    </s-row>
    <s-row g-3 g-md-0 class="mt-3">
        <s-col-3 class="p-3 example">
          g-md-0, g4
        </s-col-3>
        <s-col-3 class="p-3 example">
          g-md-0, g4
        </s-col-3>
        <s-col-3 class="p-3 example">
          g-md-0, g4
        </s-col-3>
        <s-col-3 class="p-3 example">
          g-md-0, g4
        </s-col-3>
        <s-col-3 class="p-3 example">
          g-md-0, g4
        </s-col-3>
        <s-col-3 class="p-3 example">
          g-md-0, g4
        </s-col-3>
        <s-col-3 class="p-3 example">
          g-md-0, g4
        </s-col-3>
        <s-col-3 class="p-3 example">
          g-md-0, g4
        </s-col-3>
    </s-row>
    <s-row g-md-3 g-0 class="mt-3">
        <s-col-3 class="p-3 example">
          g-0, g-md-4
        </s-col-3>
        <s-col-3 class="p-3 example">
          g-0, g-md-4
        </s-col-3>
        <s-col-3 class="p-3 example">
          g-0, g-md-4
        </s-col-3>
        <s-col-3 class="p-3 example">
          g-0, g-md-4
        </s-col-3>
        <s-col-3 class="p-3 example">
          g-0, g-md-4
        </s-col-3>
        <s-col-3 class="p-3 example">
          g-0, g-md-4
        </s-col-3>
        <s-col-3 class="p-3 example">
          g-0, g-md-4
        </s-col-3>
        <s-col-3 class="p-3 example">
          g-0, g-md-4
        </s-col-3>
    </s-row>
    <s-row g-3 class="row g-3 mt-3">
        <s-col-6 md-3 class="s-col-md-3 s-col-6 p-3 example">
          s-col-6 md-3
        </s-col-6>
        <s-col-6 md-3 class="s-col-md-3 s-col-6 p-3 example">
          s-col-6 md-3
        </s-col-6>
        <s-col-6 md-3 class="s-col-md-3 s-col-6 p-3 example">
          s-col-6 md-3
        </s-col-6>
        <s-col-6 md-3 class="s-col-md-3 s-col-6 p-3 example">
          s-col-6 md-3
        </s-col-6>
        <s-col-6 md-3 class="s-col-md-3 s-col-6 p-3 example">
          s-col-6 md-3
        </s-col-6>
        <s-col-6 md-3 class="s-col-md-3 s-col-6 p-3 example">
          s-col-6 md-3
        </s-col-6>
        <s-col-6 md-3 class="s-col-md-3 s-col-6 p-3 example">
          s-col-6 md-3
        </s-col-6>
        <s-col-6 md-3 class="s-col-md-3 s-col-6 p-3 example">
          s-col-6 md-3
        </s-col-6>
    </s-row>
</template>