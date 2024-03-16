<template>
    <ss-row class="mt-2">
        <col-12 class="p-2">
            <h2>
                Columns
            </h2>
            <p>
                Suspendors breaks up the width of the screen into 12 sections, and you can set up columns referencing this with with a col-x class where x is between 1-12. Whenever sibling col elements go above a total of 12 they break over into a new row. If the cols don't add exactly to 12 they will still retain their width, however they will break down to another row (see below).
            </p>
        </col-12>
        <col-12 class="p-3 example justify-center align-center">
            col-12
        </col-12>
        <col-6 class="p-3 example justify-center align-center">
            col-6
        </col-6>
        <col-4 class="p-3 example justify-center align-center">
            col-4
        </col-4>
        <col-2 class="p-3 example justify-center align-center">
            col-2
        </col-2>
        <col-7 class="p-3 example justify-center align-center">
            col-7
        </col-7>
        <col-9 class="p-3 example justify-center align-center">
            col-9
        </col-9>
    </ss-row>
</template>