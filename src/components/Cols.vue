<template>
    <div class="row mt-2">
        <div class="col-12">
            <h2>
                Columns
            </h2>
            <p>
                Suspendors breaks up the width of the screen into 12 sections, and you can set up columns referencing this with with a col-x class where x is between 1-12. Whenever sibling col elements go above a total of 12 they break over into a new row. If the cols don't add exactly to 12 they will still retain their width, however they will break down to another row (see below).
            </p>
        </div>
        <div class="col-12 p-3 example justify-center align-center">
            col-12
        </div>
        <div class="col-6 p-3 example justify-center align-center">
            col-6
        </div>
        <div class="col-4 p-3 example justify-center align-center">
            col-4
        </div>
        <div class="col-2 p-3 example justify-center align-center">
            col-2
        </div>
        <div class="col-7 p-3 example justify-center align-center">
            col-7
        </div>
        <div class="col-9 p-3 example justify-center align-center">
            col-9
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

</style>