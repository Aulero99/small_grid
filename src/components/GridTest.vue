<template>
  <div class="container">
    <div class="row">
        
        <div class="col-12 p-2">
          <div class="red fill p-2">
            col-12
          </div>
        </div>

        <div class="col-6 col-sm-12 p-2">
          <div class="orange p-2">
            col-6
          </div>
        </div>
        
        <div class="col-6 col-sm-12 col-lg-3 p-2">
          <div class="orange fill flex-row justify-center align-center p-2">
            col-6 centered
          </div>
        </div>
        
        <div class="col-2 flex-col justify-start p-2">
          <div class="blue p-2">
            col-2 
          </div>
        </div>

        <div class="col-fill p-2">
          <div class="orange p-2">
            col-fill
          </div>
        </div>
        
        <div class="col-11 p-2">
          <div class="blue fill p-2">
            col-11
          </div>
        </div>

        <div class="col-12 m-4">
          <div class="red fill p-2">
            col-12 with m-2
          </div>
        </div>

        <div class="col-fill p-2">
          <div class="green p-2">
            fill-1
          </div>
        </div>
        <div class="col-fill p-2">
          <div class="green p-2">
            fill-2
          </div>
        </div>
        <div class="col-fill p-2">
          <div class="green p-2">
            fill-3
          </div>
        </div>
        <div class="col-12 flex-row justify-end p-2">
          <div class="orange p-2">
            Justify End Flex Row
          </div>
        </div>
        <div class="col-6 p-2">
          <div class="blue p-2">
            col-6
          </div>
        </div>
        <div class="col-6">
          <div class="container">
            <div class="row">

              <div class="col-12 p-2">
                <div class="green p-2">
                  new container col-12
                </div>
              </div>

              <div class="col-6 p-2">
                <div class="orange p-2">
                  col-6
                </div>
              </div>

              <div class="col-3 p-2">
                <div class="orange p-2">
                  col-3
                </div>
              </div>

              <div class="col-3 p-2">
                <div class="orange p-2">
                  col-3
                </div>
              </div>
            </div>
          </div>
        </div>
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
.red{ background-color: red; }
.orange{ background-color: orange; }
.blue{ background-color: blue; }
.green{ background-color: green; }
</style>