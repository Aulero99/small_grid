<template>
    <div class="row mt-2">
        <div class="col-12">
            <h2>
              Volume
            </h2>
            <p>
                Unlike other frameworks which only deal with widths, Suspendors also deals in height as well. Using the built in vol-x class you can set heights of your elements using 1/12 of the screen height, like how col-x sets width based on screen width. The way that Suspendors approaches this is to set a variable equal to the current screen height in px, and not change that variable unless either a rotation or a change in screen width is detected. This stops pages from either locking or jumping when the screen resizes (like when a user scrolls on thier phone, pulling up the address bar). 
            </p>
        </div>
    </div>

    <div div class="row mt-2 cols-1 gx-1 full">
        <div class="col vol-1 example flex-col justify-center align-center">1</div>
        <div class="col vol-2 example flex-col justify-center align-center">2</div>
        <div class="col vol-3 example flex-col justify-center align-center">3</div>
        <div class="col vol-4 example flex-col justify-center align-center">4</div>
        <div class="col vol-5 example flex-col justify-center align-center">5</div>
        <div class="col vol-6 example flex-col justify-center align-center">6</div>
        <div class="col vol-7 example flex-col justify-center align-center">7</div>
        <div class="col vol-8 example flex-col justify-center align-center">8</div>
        <div class="col vol-9 example flex-col justify-center align-center">9</div>
        <div class="col vol-10 example flex-col justify-center align-center">10</div>
        <div class="col vol-11 example flex-col justify-center align-center">11</div>
        <div class="col vol-12 example flex-col justify-center align-center">12</div>
    </div>

    <div class="row mt-2">
        <div class="col-12">
            <h2>
              How vol-x works
            </h2>
            <p>
                The way that Suspendors approaches vol-x is to set a :root CSS variable equal to the current screen height which vol-x classes then use in a calc() to set their height. Then the Suspendors .js file sets two event listeners, one for rotation, and one for resize, and updates this variable on every trigger where either a rotation is detected or a change in both height and width is detected. This stops pages from either locking or jumping when the device screen resizes (like when a user scrolls on their phone, pulling up the address bar) all while keeping in line with the other syntax of the framework. 
            </p>
        </div>
    </div>

    <div class="row mt-2">
        <div class="col-12 vol-6 example">
            <div class="fill blue flex-col justify-center align-center">
                <div>
                    <h3 class="mb-3 mt-0">
                        col-12 vol-6
                    </h3>
                    <p class="mb-2">
                        Absolute Screen Values:
                        <br/>
                        W: {{ width }} H: {{ height }}
                    </p>
                    <p>
                        Suspendors Calculated Values:
                        <br/>
                        W: {{ calcWidth }} H: {{ calcHeight/2 }}
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="row mt-2">
        <div class="col-12">
            <h2>
              Using Vol Dynamically
            </h2>
            <p>
                Just like how all other classes update dynamically based on screen width, so do vol-x classes. In this example, one column stays at vol-4, while the others update from vol-1 on different breakpoints. 
            </p>
        </div>
    </div>

    <div div class="row mt-2 cols-2 gx-1 full">
        <div class="col vol-4 example flex-col justify-center align-center">Static</div>
        <div class="col vol-4 vol-sm-1 example flex-col justify-center align-center">sm</div>
        <div class="col vol-4 vol-md-1 example flex-col justify-center align-center">md</div>
        <div class="col vol-4 vol-lg-1 example flex-col justify-center align-center">lg</div>
        <div class="col vol-4 vol-xl-1 example flex-col justify-center align-center">xl</div>
        <div class="col vol-4 vol-xxl-1 example flex-col justify-center align-center">xxl</div>
    </div>
</template>
  
<script>
import { onMounted, ref } from 'vue'
  export default {
    setup() {
        let w = ref(0)
      let h = ref(0)
      let cw = ref(0)
      let ch = ref(0)

      function update(){
        w.value =  window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        h.value = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

        if(h.value < ch.value && w.value == cw.value){return}

        cw.value = w.value
        ch.value = h.value
      }

      onMounted(()=>{
        update()
        window.addEventListener('resize', update)
      })

      return {
        width: w,
        height: h,
        calcWidth: cw,
        calcHeight: ch,
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

</style>