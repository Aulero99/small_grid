<template>
    <s-container-solid>
        <s-row cols-12 cols-md-6 class="mt-2">
            <s-col-12 class="p-2">
                <h2>
                    Loaders
                </h2>
                <p>
                    Suspendors comes pre-installed with several loader options. 
                </p>
            </s-col-12>
            <s-col-12 class="flex-row justify-center py-1 px-3">
                <button @click="fadeIn2()" class="vol-1 fill-x">
                    Load
                </button>
            </s-col-12>
            <s-col class="pb-3 d-none d-md-block">
                <s-row cols-12 cols-md-6 g-2 class="mt-2" id="skele-test">
                    <s-col vol-6 skeleton class="card e-3">
                        <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo e-3"/>
                    </s-col>
                    <s-col>
                        <div data-skeleton class="card e-3">
                            <div class="vol-4 fill-x">
                                <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo"/>
                            </div>
                            <s-row vol-2 class="justify-center align-center px-1">
                                <s-col-3 class="fill-y py-1 flex-row align-center justify-center">
                                    <div data-skeleton-circle class="demo-circle-img">
                                        <img data-src="https://source.unsplash.com/random" alt="circle"/>
                                    </div>
                                </s-col-3>
                                <s-col-9 class="py-1 pe-1 flex-row justify-center align-center">
                                    <p class="my-0 ms-2 fill-x">Lorem ipsum dolor sit amet.</p>
                                </s-col-9>
                            </s-row>
                        </div>
                    </s-col>
                </s-row>
            </s-col>
            <s-col class="pb-3 d-flex">
                <s-row cols-12 cols-md-6 g-2 class="mt-2" id="skele-test2">
                    <s-col vol-6 skeleton class="card e-3">
                        <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo e-3"/>
                    </s-col>
                    <s-col class="o-first o-md-last">
                        <div data-skeleton class="card e-3">
                            <div class="vol-4 fill-x">
                                <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo"/>
                            </div>
                            <s-row vol-2 class="justify-center align-center px-1">
                                <s-col-3 class="fill-y py-1 flex-row align-center justify-center">
                                    <div data-skeleton-circle class="demo-circle-img">
                                        <img data-src="https://source.unsplash.com/random" alt="circle" />
                                    </div>
                                </s-col-3>
                                <s-col-9 class="py-1 pe-1 flex-row justify-center align-center">
                                    <p id="skele-text-demo" data-skeleton-bars class="my-0 ms-2 fill-x"></p>
                                </s-col-9>
                            </s-row>
                        </div>
                    </s-col>
                </s-row>
            </s-col>
        </s-row>
    </s-container-solid>
</template>
  
<script>
import { loaders } from 'suspendors';
import { onMounted } from 'vue';

  export default {
    setup() {
        function fadeIn2(){
            loaders.loadAllImgInId('skele-test2')
            const txt = document.getElementById('skele-text-demo')
            txt.innerHTML = 'Lorem ipsum dolor sit amet.'
        }
        onMounted(()=>{
            loaders.loadAllImgInId('skele-test')
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
    object-fit: cover;
    overflow: hidden;
}

.card{
    border-radius: 1rem;
    overflow: hidden;
}

.demo-circle-img{
    border: 0;
    overflow: hidden;
    border-radius: 50%;
    // width: 100vw;
    // height: 100vh;
    max-height: 100%;
    max-width: 100%;
    aspect-ratio: 1 / 1;
    &:has(img[data-src]){
        height: 100vh;
    }
    img{
        height: 100%;
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
    }
}

.blackWhite{
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
</style>