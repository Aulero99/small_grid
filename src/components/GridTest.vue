<template>
  <div class="container">
    <div class="row">
        
        <div class="col-12 col-sm-6 p-2 orange">
          100% on lg, 50% on sm
        </div>

        <div class="col-12 col-sm-6 p-2 red">
          100% on lg, 50% on sm.
        </div>

        <div class="col-6 col-sm-12 p-2 purple"> 
          50% on lg, 100% on sm
        </div>

        <div class="col-6 col-sm-12 p-2 blue">
          50% on lg, 100% on sm
        </div>
        
        <div class="col-12 p-2 teal d-sm-none">
            Only seen on sm up displays
        </div>
        
        <div class="col-12 p-2 green d-none d-sm-flex">
            Only seen on sm down displays
        </div>

        <div class="col-10 p-2 red">
          col-11
        </div>
        
        <div class="col-fill p-2 orange">
            col-fill
        </div>

        <div class="col-12 m-1 p-2 purple">
            col-12 with m-1
        </div>

        <div class="col-12 m-2 p-2 purple">
            col-12 with m-2
        </div>

        <div class="col-12 m-3 p-2 purple">
            col-12 with m-3
        </div>

        <div class="col-12 m-4 p-2 purple">
            col-12 with m-4
        </div>

        <div class="col-12 m-5 p-2 purple">
            col-12 with m-5
        </div>

        <div class="col-12 flex-row justify-end teal">
          <div class="orange p-2">
            Flex Row Justify End Element
          </div>
        </div>

        <div class="col-12 flex-row justify-center teal">
          <div class="orange p-2">
            Flex Row Justify Center Element
          </div>
        </div>

        <div class="col-12 flex-row justify-start teal">
          <div class="orange p-2">
            Flex Row Justify Start Element
          </div>
        </div>

        <div class="col-6 p-2 green flex-col justify-end">
            <div class="orange p-2">
              flex-col justify-end
            </div>
        </div>
        <div class="col-6 p-2 red">
          <div class="container">
            <div class="row">
              <div class="col-12 orange p-2">
                padding added to top and bottom to show spacing
              </div>

              <div class="col-12 pt-2">
                <div class="green p-2">
                  new container col-12
                </div>
              </div>

              <div class="col-6 pt-2">
                <div class="orange p-2">
                  col-6
                </div>
              </div>

              <div class="col-3 pt-2">
                <div class="orange p-2">
                  col-3
                </div>
              </div>

              <div class="col-3 pt-2">
                <div class="orange p-2">
                  col-3
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="vh-100 fill-x blue flex-col justify-center align-center">
            vh-100 
            <br/>
            Absolute Values:
            <br/>
            W: {{ width }} H: {{ height }}
            <br/>
            Calculated Values:
            <br/>
            W: {{ calcWidth }} H: {{ calcHeight }}
          </div>

          <div class="vh-100 fill-x orange flex-col justify-center align-center">
            vh-100
            <br/>
            Notch Values:
            <br/>
            sat:{{ sat }}, sab:{{ sab }}, sar:{{ sar }}, sal:{{ sal }},

          </div>

          <div class="vh-100 fill-x green flex-col justify-center align-center">
            vh-100
          </div>

          <div class="vh-sm-25 vh-md-75 vh-50 fill-x purple flex-col justify-center align-center">
            vh-sm-25, vh-md-75, vh-50
          </div>
        </div>
    </div>
  </div>

  <div class="container">
    <div class="row p-3">
      <div class="col-12 green">
        row with p-3
      </div>
    </div>
  </div>
</template>
  
<script>
import { computed, onMounted, ref } from 'vue'
  export default {
    setup() {

      let w = ref(0)
      let h = ref(0)
      let cw = ref(0)
      let ch = ref(0)
      let sat = ref(null)
      let sab = ref(null)
      let sar = ref(null)
      let sal = ref(null)

      function update(){
        sat.value = getComputedStyle(document.documentElement).getPropertyValue("--sat")
        sab.value = getComputedStyle(document.documentElement).getPropertyValue("--sab")
        sar.value = getComputedStyle(document.documentElement).getPropertyValue("--sar")
        sal.value = getComputedStyle(document.documentElement).getPropertyValue("--sal")
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
        sat: sat,
        sab: sab,
        sar: sar,
        sal: sal,
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.orange{ background-color: orange; color: black;}
.red{ background-color: red; color: white;}
.purple{ background-color: purple; color: white;} 
.blue{ background-color: blue; color: white; }
.teal{ background-color: teal; color: black;}
.green{ background-color: green; color: white; }
</style>