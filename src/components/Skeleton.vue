<template>
    <div class="container-solid">
        <div class="row cols-12 cols-xxs-6 cols-sm-4 cols-md-3 g-2 mt-2" id="skele-test">
            <div class="col" data-skeleton>
                <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo">
            </div>
            <div class="col">
                <div class="fill-x vol-2" data-skeleton>
                    <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo">
                </div>
                <div class="fill-x p-1">
                    <div class="row">
                        <div class="col-3 flex-row justify-center align-center" data-skeleton-circle>
                            <img data-src="https://source.unsplash.com/random" alt="circle" class="demo-circle-img">
                        </div>
                        <div class="col-9 p-1 flex-row justify-center align-center">
                            <p class="my-0 ms-1">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col" data-skeleton>
                <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo">
            </div>
            <div class="col d-sm-none" data-skeleton>
                <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo">
            </div>
        </div>
        <div class="row cols-12 cols-xxs-6 cols-sm-4 cols-md-3 g-2 mt-2" id="skele-test2">
            <div class="col" data-skeleton>
                <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo">
            </div>
            <div class="col">
                <div class="fill-x vol-2" data-skeleton>
                    <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo">
                </div>
                <div class="fill-x p-1">
                    <div class="row">
                        <div class="col-3 flex-row justify-center align-center" data-skeleton-circle>
                            <img data-src="https://source.unsplash.com/random" alt="circle" class="demo-circle-img">
                        </div>
                        <div class="col-9 p-1 flex-row justify-center align-center">
                            <p class="my-0 ms-1 fill-x" id="skele-text-demo" data-skeleton-bars></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col" data-skeleton>
                <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo">
            </div>
            <div class="col d-sm-none" data-skeleton>
                <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo">
            </div>
            <div class="col-12">
                <button @click="fadeIn2()">
                    Load
                </button>
            </div>
        </div>
    </div>
</template>
  
<script>
import { imgFade } from 'suspendors';
import { onMounted } from 'vue';

  export default {
    setup() {
        function fadeIn2(){
            imgFade.fadeAllInId('skele-test2')
            const txt = document.getElementById('skele-text-demo')
            txt.innerHTML = 'Lorem ipsum dolor sit amet.'
        }
        onMounted(()=>{
            imgFade.fadeAllInId('skele-test')
        })
      return {
        fadeIn2
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

.img-demo{
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    border-radius: 5%;
    object-fit: cover;
}

.demo-circle-img{
    border: 0;
    border-radius: 100%;
    object-fit: cover;
    width: 100%;
    aspect-ratio: 1/1;
}

.blackWhite{
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
</style>