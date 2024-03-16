<template>
    <ss-row class="mt-2">
          <col-12 class="col-12 p-2">
            <h2>
              Making Complex Grids
            </h2>
            <p>
              By mixing these classes together you can get more complicated behavior. For example, this grid will go from 1 column to 2 then back to 1 with different .col containers flipping values depending on the size of the screen.
            </p>
          </col-12>

          <col-3 md-12 lg-3  class="example p-3">
            .col-md-12 .col-lg-3 .col-6
          </col-3>
          <col-6 md-6 lg-6 class="example p-3">
            .col-md-6 .col-lg-6 .col-6
          </col-6>
          <col-3 md-6 lg-3 class="example p-3">
            .col-md-6 .col-lg-3 .col-12
          </col-3>
        </ss-row>
</template>