<template>
    <s-row class="mt-2">
        <s-col-12 class="p-2">
            <h2>
                Columns
            </h2>
            <p>
                Suspendors breaks up the width of the screen into 12 sections, and you can set up columns referencing this with with a s-col-x class where x is between 1-12. Whenever sibling col elements go above a total of 12 they break over into a new row. If the cols don't add exactly to 12 they will still retain their width, however they will break down to another row (see below).
            </p>
        </s-col-12>
        <s-col-12 class="p-3 example justify-center align-center">
            s-col-12
        </s-col-12>
        <s-col-6 class="p-3 example justify-center align-center">
            s-col-6
        </s-col-6>
        <s-col-4 class="p-3 example justify-center align-center">
            s-col-4
        </s-col-4>
        <s-col-2 class="p-3 example justify-center align-center">
            s-col-2
        </s-col-2>
        <s-col-7 class="p-3 example justify-center align-center">
            s-col-7
        </s-col-7>
        <s-col-9 class="p-3 example justify-center align-center">
            s-col-9
        </s-col-9>
    </s-row>
</template>