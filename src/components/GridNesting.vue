<template>
        <ss-row class="my-2">
          <col-12 class="p-2">
            <h2>
              Nesting the Grid Classes
            </h2>
            <p>
              You can nest rows within columns to get different forms of behavior. Take note, that when doing so gutters are removed by default.
            </p>
          </col-12>

          <col-8 md-12>
            <div class="example p-3">
              .col-8
            </div>
            <ss-row>
              <col-12 class="p-3 example-2">
                .col-12
              </col-12>
              <col-6 md-12 class="p-3 example-2">
                .col-6
              </col-6>
              <col-6 md-12 class="p-3 example-2">
                .col-6
              </col-6>
            </ss-row>
          </col-8>
          <col-4 md-12 class="example p-3">
            .col-md-6 .col-lg-6 .col-6
          </col-4>
        </ss-row>
</template>