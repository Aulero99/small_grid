<template>
  <div class="container">
    <section class="row flex-col vh100">
        <div class="col-12 menu-spacer">

        </div>
        <div class="col-12 flex-col justify-center align-center grow-1">
            <div class="logo flex-col justify-center align-center p-3">
                <img src="src/assets/img/logo.svg" alt="Logo" class="fill">
            </div>
        </div>
        <div class="col-12 flex-row justify-center p-3 d-md-none">
            <h1 class="d-flex flex-col justify-center">
                Suspendors Demo
            </h1>    
        </div>
    </section>
    <section class="row">
        <div class="col-12 mb-1">
            <div class="border-box fill flex-row justify-center p-0 m-0"> col-12, no padding, mb-1</div>
        </div>
        <div class="col-6 mt-1">
            <div class="border-box fill flex-row justify-center align-center">
                col-6, no padding, mt-1
            </div>
        </div>
        <div class="col-6 mb-1">
            <div class="border-box fill flex-row justify-center">
                col-6, no padding, mb-1
            </div>
        </div>
    </section>
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
@import "../assets/scss/main.scss";
.logo{
    width: 20%;
    min-width: 200px;
    aspect-ratio: 1/1;
}
.menu-spacer{
    height: 2rem;
}
h1{
    line-height: 1;
    margin: 0;
    padding: 0;
    font-weight: 100;
}
.border-box{
    border-style: solid;
    border-width: 5px;
    border-color: #5f5e5f;
    border-radius: 100rem;
}

.vh100{
    height: cvh(100);
}
</style>