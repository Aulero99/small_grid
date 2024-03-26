<template>
    <s-row class="mt-2">
          <s-col-12 class="p-2">
            <h2>
              Making Complex Grids
            </h2>
            <p>
              By mixing these classes together you can get more complicated behavior. For example, this grid will go from 1 column to 2 then back to 1 with different .col containers flipping values depending on the size of the screen.
            </p>
          </s-col-12>

          <s-col-3 md-12 lg-3  class="example p-3">
            s-col-3 md-12 lg-3
          </s-col-3>
          <s-col-6 md-6 lg-6 class="example p-3">
            .s-col-6 md-6 lg-6
          </s-col-6>
          <s-col-3 md-6 lg-3 class="example p-3">
            .s-col-3 md-6 lg-3
          </s-col-3>
     </s-row>
</template>