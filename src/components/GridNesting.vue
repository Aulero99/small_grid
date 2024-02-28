<template>
        <div class="row my-2">
          <div class="col-12">
            <h2>
              Nesting the Grid Classes
            </h2>
            <p>
              You can nest rows within columns to get different forms of behavior. Take note, that when doing so gutters are removed by default.
            </p>
          </div>

          <div class="col-md-12 col-8">
            <div class="example p-3">
              .col-8
            </div>
            <div class="row">
              <div class="col-12 p-3 example-2">
                .col-12
              </div>
              <div class="col-6 col-md-12 p-3 example-2">
                .col-6
              </div>
              <div class="col-6 col-md-12 p-3 example-2">
                .col-6
              </div>
            </div>
          </div>
          <div class="col-md-12 col-4 example p-3">
            .col-md-6 .col-lg-6 .col-6
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

</style>