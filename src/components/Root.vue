<template>
<div class="container pb-5">
    <section class="row mt-2">
        <div class="col-12">
            <h2>
                _Root
            </h2>
        </div>
    </section>
    <section class="row">

        <div class="col-4 col-md-12">
            <div class="container">
                <section class="row px-2">
                    <div class="col-12">
                        <div class="title py-2 flex-row justify-between">
                            Typography
                        </div>
                    </div>
                    <div class="col-6">
                        <h1>H1 Light</h1>
                        <h2>H2 Light</h2>
                        <h3>H3 Light</h3>
                        <h4>H4 Light</h4>
                        <h5>H5 Light</h5>
                    </div>
                    <div class="col-6">
                        <h1><b>H1 Bold</b></h1>
                        <h2><b>H2 Bold</b></h2>
                        <h3><b>H3 Bold</b></h3>
                        <h4><b>H4 Bold</b></h4>
                        <h5><b>H5 Bold</b></h5>
                    </div>
                    <div class="col-12">
                        <p>Paragraph Text</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vitae adipisci corporis molestias quis architecto vel est dicta, illum atque dolore fugiat veritatis culpa! Dolores minus veniam in obcaecati totam.
                        </p>
                    </div>
                </section>
            </div>
        </div>

        <div class="col-4 col-md-12">
            <div class="container">
                <section class="row px-2">
                    <div class="col-12">
                        <div class="title py-2 flex-row justify-between">
                            Buttons
                        </div>
                    </div>
                    <div class="col-12">
                        buttons
                    </div>
                </section>
            </div>
        </div>

        <div class="col-4 col-md-12">
            <div class="container">
                <section class="row px-2">
                    <div class="col-12">
                        <div class="title py-2 flex-row justify-between">
                            Colors and Elevation
                        </div>
                    </div>
                    <div class="col-12 colors flex-row ">
                        <div class="card one"></div>
                        <div class="card two"></div>
                        <div class="card three"></div>
                        <div class="card four"></div>
                        <div class="card five"></div>
                    </div>
                </section>
            </div>
        </div>

        <div class="col-4 col-md-12">
            <div class="container">
                <section class="row px-2">
                    <div class="col-12">
                        <div class="title py-2 flex-row justify-between">
                            Gradients
                        </div>
                    </div>
                    <div class="col-12">
                        content
                    </div>
                </section>
            </div>
        </div>
        <div class="col-4 col-md-12">
            <div class="container">
                <section class="row px-2">
                    <div class="col-12">
                        <div class="title py-2 flex-row justify-between">
                            Text Fields
                        </div>
                    </div>
                    <div class="col-12">
                        content
                    </div>
                </section>
            </div>
        </div>
        <div class="col-4 col-md-12">
            <div class="container">
                <section class="row px-2">
                    <div class="col-12">
                        <div class="title py-2 flex-row justify-between">
                            Tabs
                        </div>
                    </div>
                    <div class="col-12">
                        content
                    </div>
                </section>
            </div>
        </div>
    </section>
</div>
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

.title{
    border-bottom: 2px solid black;
}

.colors{
    .card{
        height: calc(0.1 * $vh100);
        aspect-ratio: 1/1;
        border-radius: 0.15rem;
        
        &.one{ background-color: $cs1; }
        &.two{ background-color: $cs2; }
        &.three{ background-color: $cs3; }
        &.four{ background-color: $cs4; }
        &.five{ background-color: $cs5; }
    }
}

</style>