<template>
  <s-row class="mt-2">
        <s-col-12 class="p-2">
                <h2>
                    Rounded / Circle
                </h2>
                <p>
                    These two utility classes make the element either more rounded or a full circle as needed.
                </p>
            </s-col-12>
    </s-row>
    <s-row>
        <s-col-2 class="p-2">
            <div class="vol-2 fill-x flex-row justify-center align-center round-1 example p-2">
                round-1
            </div>
        </s-col-2>
        <s-col-2 class="p-2">
            <div class="vol-2 fill-x flex-row justify-center align-center round-2 example p-2">
                round-2
            </div>
        </s-col-2>
        <s-col-2 class="p-2">
            <div class="vol-2 fill-x flex-row justify-center align-center round-3 example p-2">
                round-3
            </div>
        </s-col-2>
        <s-col-3 class="p-2">
            <div class="vol-2 fill-x flex-row justify-center align-center round-4 example p-2">
                round-4
            </div>
        </s-col-3>
        <s-col-3 class="p-2">
            <div class="vol-2 fill-x flex-row justify-center align-center round-5 example p-2">
                round-5
            </div>
        </s-col-3>
        <s-col-6 class="flex-row justify-center">
            <div class="vol-2 flex-row justify-center align-center example round-circle">
                round-circle
            </div>
        </s-col-6>
        <s-col-6 class="flex-row justify-center px-4">
            <div class="vol-2 fill-x flex-row justify-center align-center example round-pill">
                round-pill
            </div>
        </s-col-6>
    </s-row>
</template>
  
<script>
  export default {
    setup() {
      return {
  
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

</style>