<template>
<s-container-solid class="pb-5">
    <s-row class="mt-2">
        <s-col-12 class="p-2">
                <h2>
                    Root
                </h2>
                <p>
                    Suspendors comes with several changes made to the root styles of standard html elements. This is a small demonstration of what those changes are:
                </p>
            </s-col-12>
    </s-row>
    <s-row class="mt-2 px-2">
        <s-col-12 sm-6>
            <h1>H1 Light</h1>
            <h2>H2 Light</h2>
            <h3>H3 Light</h3>
            <h4>H4 Light</h4>
            <h5>H5 Light</h5>
        </s-col-12>
        <s-col-12 sm-6 class="mt-2 mt-sm-0">
            <h1><strong>H1 Strong</strong></h1>
            <h2><strong>H1 Strong</strong></h2>
            <h3><strong>H1 Strong</strong></h3>
            <h4><strong>H1 Strong</strong></h4>
            <h5><strong>H1 Strong</strong></h5>
        </s-col-12>
        <s-col-12 sm-6 class="mt-2">
            <div class="py-2 pe-sm-3">
                <p><strong>Paragraph Text</strong></p>
                <p>
                    Lorem ipsum dolor sit <strong>strong bolded text</strong> amet consectetur <b>b bolded text</b> adipisicing elit. Accusamus vitae adipisci corporis molestias quis architecto <i>i italicized text</i> vel est dicta, illum <em>em text</em> atque dolore fugiat veritatis culpa! Dolores minus <a href="#">a link</a> veniam in obcaecati totam.
                </p>
            </div>
        </s-col-12>
        <s-col-12 sm-6 class="mt-2">
            <h2>Lists</h2>
            <ul>
                <li><b>Bold Text</b></li>
                <li><i>Italics Text</i></li>
                <li><a href="#">Link Text</a></li>
                <ul>
                    <li>Sub List 1</li>
                    <ul>
                        <li>Sub List 2</li>
                        <ul>
                            <li>Sub List 3</li>
                        </ul>
                    </ul>
                </ul>
            </ul>
            <ol>
                <li>Text</li>
                <ol>
                    <li>Sub List 1</li>
                    <ol>
                        <li>Sub List 2</li>
                        <ol>
                            <li>Sub List 3</li>
                        </ol>
                    </ol>
                    <li>Sub List 1</li>
                    <ol>
                        <li>Sub List 2</li>
                    </ol>
                </ol>
                <li>Text</li>
            </ol>
        </s-col-12>
    </s-row>
</s-container-solid>
</template>
  
<script>
  export default {
    setup() {
      return {
  
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

// .title{
//     border-bottom: 2px solid black;
// }

// .colors{
//     .card{
//         height: calc(0.1 * $vh100);
//         aspect-ratio: 1/1;
//         border-radius: 0.15rem;
        
//         &.one{ background-color: $cs1; }
//         &.two{ background-color: $cs2; }
//         &.three{ background-color: $cs3; }
//         &.four{ background-color: $cs4; }
//         &.five{ background-color: $cs5; }
//     }
// }

</style>