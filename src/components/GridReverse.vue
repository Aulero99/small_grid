<template>
    <!-- Reversing default example -->
    <div class="row mt-2">
        <div class="col-12 p-2">
            <h2>
                Reversing Default Behavior
            </h2>
            <p>
                By default, columns revert to 100% width above thier breakpoint (.col-12). However, you can get reverse this default behavior by changing the default .col class to another, then specify the size of the grid like below.
            </p>
        </div>

        <div class="col-md-12 col-4 example p-3">
            <div class="d-md-none">
                .col-4
            </div>
            <div class="d-none d-md-block">
                .col-md-12
            </div>
        </div>
        <div class="col-md-12 col-4 example p-3">
            <div class="d-md-none">
                .col-4
            </div>
            <div class="d-none d-md-block">
                .col-md-12
            </div>
        </div>
        <div class="col-md-12 col-4 example p-3">
            <div class="d-md-none">
                .col-4
            </div>
            <div class="d-none d-md-block">
                .col-md-12
            </div>
        </div>
    </div>
</template>