<template>
  <s-container-solid>
    <s-row>
        <s-col-12 class="px-2 pt-2 pb-1">
            <h2>
              Vertical Masonry
            </h2>
            <p>
              Added in 1.6.2, suspendors comes pre-equiped to handle a vertical masonry layout. Simply apply a gap-1 to gap-5 and cols-1 to cols-12 attribute to a s-masonry tag every first child element in the masonry layout will become a masonry grid.
            </p>
        </s-col-12>
        <s-col-12 class="px-2">
            <s-masonry gap-3 gap-md-2 gap-lg-1 cols-2 cols-xs-3 cols-md-5 cols-lg-7 id="masonry-example">
                <div class="e-2 round-1" data-skeleton>
                    <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo"/>
                </div>
                <div class="e-2 round-1" data-skeleton>
                    <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo"/>
                </div>
                <div class="e-2 round-1" data-skeleton>
                    <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo"/>
                </div>
                <div class="e-2 round-1" data-skeleton>
                    <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo"/>
                </div>
                <div class="e-2 round-1" data-skeleton>
                    <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo"/>
                </div>
                <div class="e-2 round-1" data-skeleton>
                    <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo"/>
                </div>
                <div class="e-2 round-1" data-skeleton>
                    <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo"/>
                </div>
                <div class="e-2 round-1" data-skeleton>
                    <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo"/>
                </div>
                <div class="e-2 round-1" data-skeleton>
                    <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo"/>
                </div>
                <div class="e-2 round-1" data-skeleton>
                    <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo"/>
                </div>
                <div class="e-2 round-1" data-skeleton>
                    <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo"/>
                </div>
                <div class="e-2 round-1" data-skeleton>
                    <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo"/>
                </div>
                <div class="e-2 round-1" data-skeleton>
                    <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo"/>
                </div>
                <div class="e-2 round-1" data-skeleton>
                    <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo"/>
                </div>
                <div class="e-2 round-1" data-skeleton>
                    <img data-src="https://source.unsplash.com/random" alt="img1" class="img-demo"/>
                </div>
            </s-masonry>
        </s-col-12>
    </s-row>
  </s-container-solid>
</template>

<script>
import { loaders } from 'suspendors';
import { onMounted } from 'vue';

  export default {
    setup() {
        onMounted(()=>{
            loaders.loadAllImgInId('masonry-example')
        })
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

s-masonry{
    >* {
        border: 0;
        // border-radius: 0.5rem;
        font-size: 2rem;
        overflow: hidden;
        img{
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
    } 
  @for $i from 1 through 36 { 
    >*:nth-child(#{$i}) {
      $h: (random(400) + 100) + px;
      height: $h;
      line-height: $h;
    }
  }
}

</style>