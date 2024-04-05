<template>
  <s-container-solid>
    <s-row>
      <s-col-12 class="px-2 pt-2 pb-1">
            <h2>
              Modals
            </h2>
            <p>
              Added in 1.6.3, suspendors comes pre-equiped to handle modals using the native 'dialog' tag in html, but with added utility built in. 
            </p>
            <p>
              TX:{{ x }}, TY:{{ y }}
            </p>
            <p>
              ELT:{{ elT }}, ELR:{{ elR }}, ELB:{{ elB }}, ELL:{{ elL }} 
            </p>
            <p v-if="x < elL"> close </p>
            <p v-else> open </p>
        </s-col-12>
        <s-col-12>
          <button @click="openModal('sample-modal-1')">
            open modal
          </button>
          <button @click="toggleModal('sample-modal-1')">
            toggle modal
          </button>
        </s-col-12>
    </s-row>
  </s-container-solid>

  <dialog id="sample-modal-1" role="dialog">
    <p>This is modal 1</p>
    <button @click="openModal('sample-modal-2')">open modal 2</button>
    <button @click="closeModal('sample-modal-1')">close modal 1</button>
    <button @click="toggleModal('sample-modal-2')">toggle modal 2</button>
  </dialog>

  <dialog id="sample-modal-2">
    <p>This is modal 2</p>
    <button @click="openModal('sample-modal-1')">open modal 1</button>
    <button @click="closeModal('sample-modal-2')">close modal 2</button>
  </dialog>
</template>
  
<script>
import { modal } from 'suspendors';
import { onMounted, ref } from 'vue';

  export default {
    setup() {
      let x = ref(0)
      let y = ref(0)
      let elT = ref(0)
      let elR = ref(0)
      let elB = ref(0)
      let elL = ref(0)

      function setLocation(e){
        console.log(e)
        x.value = e.touches[0].clientX
        y.value = e.touches[0].clientY
      }

      function getElDimmen(id){
        const el = document.getElementById(id)
        const rect = el.getBoundingClientRect()

        elT.value = rect.top + window.scrollY
        elL.value = rect.left + window.scrollX

      }

      onMounted(()=>{
        window.addEventListener('touchstart', setLocation)
      })

      return {
        x,
        y,
        elT,
        elR,
        elB,
        elL,
        openModal(id){ 
          modal.open(id)
          getElDimmen(id) 
        },
        closeModal(id){ modal.close(id) },
        toggleModal(id){ modal.toggle(id) }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

</style>