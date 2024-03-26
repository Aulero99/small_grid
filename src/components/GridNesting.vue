<template>
        <s-row class="my-2">
          <s-col-12 class="p-2">
            <h2>
              Nesting the Grid Classes
            </h2>
            <p>
              You can nest rows within columns to get different forms of behavior. Take note, that when doing so gutters are removed by default.
            </p>
          </s-col-12>

          <s-col-8 md-12>
            <div class="example p-3">
              s-col-8 md-12
            </div>
            <s-row>
              <s-col-12 class="p-3 example-2">
                s-col-12
              </s-col-12>
              <s-col-6 md-12 class="p-3 example-2">
                s-col-6 md-12
              </s-col-6>
              <s-col-6 md-12 class="p-3 example-2">
                s-col-6 md-12
              </s-col-6>
            </s-row>
          </s-col-8>
          <s-col-4 md-12 class="example p-3">
            s-col-4 md-12
          </s-col-4>
        </s-row>
</template>