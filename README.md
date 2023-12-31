# Small_Grid, A Smaller Sass Grid System

Using Bootstrap-like naming conventions, Small_Grid is a lightweight scss alternative for use in smaller projects where the weight of bootstrap would be unwarranted. There are no default styles, bloat or otherwise large unnecessary included elements to bog down the project, only a small simple to use grid system with margin and padding built in, just like in bootstrap. 

## Usage Notes

This template comes with nearly everything pre-variabled out in the _variables.scss file. By default the gutter is set to 1.5rem, and all spacing is defined off it, but for a blockier or more condensed look feel free to adjust this to your liking. In addition, this template by default uses max-width for the scss media rules, however this can also be changed by swapping the variable out.

NOTE: After forking this file, you need to run npm i to download and install dependencies of vue and vite, see documentation of vue and vite for more information.

## Just Want the Css?

Current Version:

<https://cdn.jsdelivr.net/gh/Aulero99/small_grid@main/min/min.css>

Or just the grid - 

<https://cdn.jsdelivr.net/gh/Aulero99/small_grid@main/min/min_grid.css>

Earlier Versions:

<https://cdn.jsdelivr.net/gh/Aulero99/small_grid@main/min/min_0_0_0.css>

Or just the grid - 

<https://cdn.jsdelivr.net/gh/Aulero99/small_grid@main/src/min/min_0_0_0_grid.css>


Just replace the 0_0_0 with the desired min file

Versions:

 - 1.0.5
 - 1.0.6
 - 1.0.9 - current 


### 1.0.5 Release Notes

 - Fixed glitch involving scrollbar causing horizontal scroll
 - @media grid rules added
 - Added template for default dark mode  

 ### 1.0.6 Release Notes

 - Issues in container not sizing appropriately when using d-flex, changed to d-block

#### Using: Vite, Vue, & Sass