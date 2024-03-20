<template>
    <container-solid>
        <ss-row cols-12 cols-md-6 class="mt-2">
            <col-12>
                <h2>
                    Loaders
                </h2>
                <p>
                    Suspendors comes pre-installed with several loader options. 
                </p>
            </col-12>
            <col-12 class="flex-row justify-center py-1 px-3">
                <button @click="fadeIn2()" class="vol-md-1 fill-x">
                    Load
                </button>
            </col-12>
            <ss-col>
                <ss-row cols-12 cols-md-6 g-2 class="mt-2" id="skele-test">
                    <ss-col vol-6 skeleton class="card">
                        <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo e-3"/>
                    </ss-col>
                    <ss-col>
                        <div data-skeleton class="card e-3">
                            <div class="vol-4 fill-x">
                                <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo"/>
                            </div>
                            <ss-row vol-2 class="justify-center align-center px-2">
                                <col-3 vol-1 data-skeleton-circle class="p-1 flex-col justify-center">
                                    <img data-src="https://source.unsplash.com/random" alt="circle" class="demo-circle-img" />
                                </col-3>
                                <col-9 class="py-1 pe-1 flex-row justify-center align-center">
                                    <p class="my-0 ms-2 fill-x">Lorem ipsum dolor sit amet.</p>
                                </col-9>
                            </ss-row>
                        </div>
                    </ss-col>
                </ss-row>
            </ss-col>
            <ss-col id="skele-test2">
                <ss-row cols-12 cols-md-6 g-2 class="mt-2" id="skele-test">
                    <ss-col vol-6 skeleton class="card">
                        <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo e-3"/>
                    </ss-col>
                    <ss-col>
                        <div data-skeleton class="card e-3">
                            <div class="vol-4 fill-x">
                                <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo"/>
                            </div>
                            <ss-row vol-2 class="justify-center align-center px-2">
                                <col-3 vol-1 data-skeleton-circle class="p-1 flex-col justify-center">
                                    <img data-src="https://source.unsplash.com/random" alt="circle" class="demo-circle-img" />
                                </col-3>
                                <col-9 class="py-1 pe-1 flex-row justify-center align-center">
                                    <p id="skele-text-demo" data-skeleton-bars class="my-0 ms-2 fill-x"></p>
                                </col-9>
                            </ss-row>
                        </div>
                    </ss-col>
                </ss-row>
            </ss-col>
        </ss-row>
    </container-solid>
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
    object-fit: cover;
    overflow: hidden;
}

.card{
    border-radius: 1rem;
    overflow: hidden;
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