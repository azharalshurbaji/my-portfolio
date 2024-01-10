<template>
  <div class="lamp-content">
    <button type="button" id="lamp-button"><span></span></button>
    <div class="shap light"></div>
    <div class="shap dark"></div>
  </div>
</template>

<script>
export default {
    mounted() {
        var lampBtn = document.querySelector("#lamp-button")
        var dark = document.querySelector(".lamp-content .dark")

        lampBtn.addEventListener("click" ,function(){
            var bgBody = document.body;
            bgBody.classList.toggle("light-mode")
            // lampBtn.classList.toggle("active")
            dark.classList.toggle("dark")
            // dark.classList = "dark" ? "light" : "";
            })
        },
}
</script>


<style>

body {
    background: radial-gradient(ellipse, #1B2735 ,#090A0F);
    color: #FAFAFA !important;
}
.lamp-content {
    position: absolute;
        top: 0;
        left: 5%;
}
.shap {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    position: absolute;
    transition: .5s;
    
}
/* .dark::before {
    content: '';
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: #1b273518;
    position: inherit;
        top: -25%;
        left: 10%;
} */

.dark {
    background-color: #fafafa ;
    box-shadow: 0 0 20px #cacaca;
}
.light-mode {
    background: radial-gradient(ellipse, #FAFAFA ,#d2d3db);
    color: #1B2735 !important;
}
.light{
    box-shadow: 0 0 20px #fdff71;
    background-color: #fdff71;
}

@media screen and (max-width: 900px) {
    .shap {
        width: 50px;
        height: 50px;
    }
}

</style>