<template>
    <div class="container">
        <div class="row cols-3 g-2 mt-2">
            <div class="col" skeleton>
                <img data-src="https://source.unsplash.com/random" alt="img1" class="skeleton img-demo">
            </div>
            <div class="col" skeleton>
                <div class="fill" skeleton></div>
            </div>
            <div class="col" skeleton>
                <img data-src="https://source.unsplash.com/random" alt="img1" class="skeleton img-demo">
            </div>
            <div class="col" skeleton>
                <img data-src="https://source.unsplash.com/random" alt="img1" class="skeleton img-demo">
            </div>
            <div class="col" skeleton>
                <img data-src="https://source.unsplash.com/random" alt="img1" class="skeleton img-demo">
            </div>
            <div class="col" skeleton>
                <img data-src="https://source.unsplash.com/random" alt="img1" class="skeleton img-demo">
            </div>
            <div class="col" skeleton>
                <img data-src="https://source.unsplash.com/random" alt="img1" class="skeleton img-demo">
            </div>
        </div>
    </div>
</template>
  
<script>
import { imgFade } from 'suspendors';

  export default {
    setup() {
      return {
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

.blackWhite{
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}

// .skeleton{
//     background-color: hsla(0, 0%, 50%, 0.5);
// }
</style>