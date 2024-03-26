<template>
    <!-- Reversing default example -->
    <s-row class="row mt-2">
        <s-col-12 class="p-2">
            <h2>
                Reversing Default Behavior
            </h2>
            <p>
                By default, columns revert to 100% width above their breakpoint (.s-col-12). However, you can get reverse this default behavior by changing the default .col class to another, then specify the size of the grid like below.
            </p>
        </s-col-12>

        <s-col-4 md-12 class="example p-3">
            <div class="d-md-none">
                .s-col-4
            </div>
            <div class="d-none d-md-block">
                .s-col-md-12
            </div>
        </s-col-4>
        <s-col-4 md-12 class="example p-3">
            <div class="d-md-none">
                .s-col-4
            </div>
            <div class="d-none d-md-block">
                .s-col-md-12
            </div>
        </s-col-4>
        <s-col-4 md-12 class="example p-3">
            <div class="d-md-none">
                .s-col-4
            </div>
            <div class="d-none d-md-block">
                .s-col-md-12
            </div>
        </s-col-4>
    </s-row>
</template>