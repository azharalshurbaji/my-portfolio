<template>
    <!-- Start Hero Section -->
    <BackgroundSection />
    <div class="hero-section container d-flex justify-content-center align-items-center">
        <DarkMode />
        <div class="container">
            <TypedJs /> 
            <!-- * Contact Me -->
            <div class="contactme-section my-3 d-flex flex-wrap justify-content-center align-items-center position-relative">
                <a class="fs-4 text-center mx-sm-4 m-4 nav-link btn-icon" href="https://github.com/azharalshurbaji" target="_blank" rel="noopener noreferrer">
                    <i class="position-absolute fab fa-github"></i>
                </a>
                <a class="fs-4 text-center mx-sm- m-4 nav-link btn-icon" href="http://" target="_blank" rel="noopener noreferrer">
                    <i class="position-absolute fab fa-linkedin"></i>
                </a>
                <a class="fs-4 text-center mx-sm-4 m-4 nav-link btn-icon" href="https://codepen.io/azharalshurbaji" target="_blank" rel="noopener noreferrer">
                    <i class="position-absolute fab fa-codepen"></i>
                </a>
                <a class="fs-4 text-center mx-sm-4 m-4 nav-link btn-icon" href="https://t.me/Azhar2289" target="_blank" rel="noopener noreferrer">
                    <i class="position-absolute fab fa-telegram"></i>
                </a>
                <a class="fs-4 text-center mx-sm-4 m-4 nav-link btn-icon" href="mailto:azharalsharbaji@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i class="position-absolute fab fa-google"></i>
                </a>
            </div>
            <ul 
                class="nav my-5 justify-content-center"  
                role="tablist"
            >
                <li class="nav-item" role="presentation">
                    <router-link to="/frontend-section" class="nav-link">
                        <button
                            id="frontend-tab"
                            type="button"
                            class="btn fs-5 btn-hover"
                        >
                            Front-End Projects
                            <i class="fa-solid fa-arrow-right"></i>
                        </button> 
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/uiux-projects" class="nav-link">
                        <button
                            id="uiux-tab"
                            type="button"
                            class="btn fs-5 btn-hover"
                        >
                            UI/UX Projects
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
    <!-- <div class="circle"></div> -->
    <!-- End Hero Section -->
</template>


<script>
import { RouterLink } from "vue-router";
import BackgroundSection from "./BackgroundSection.vue";
import TypedJs from "./TypedJs.vue";
import DarkMode from "./DarkMode.vue";

export default {
    components: {
        RouterLink,
        BackgroundSection,
        TypedJs,
        DarkMode,
    },
}

</script>

<style>

.contactme-section a {
    width: 50px;
    color: var(--btn-shadow) !important;
}
.contactme-section a.btn-icon::before {
    content: '';
    display: block;
    width: 5px;
    height: 20px;
    margin: auto;
    transition: .5s ease-in-out;
    /* background-color: #c0c6ce41 !important; */
    position: absolute;
    transform: translate(120% , -25%);
}
.contactme-section a.btn-icon:hover::before {
    content: '';
    display: block;
    width: 50px;
    height: 50px;
    margin: auto;
    border-radius: 5px;
    box-shadow: 0 0px 5px var(--btn-shadow),
                0 0px 25px var(--btn-shadow),
                0 0px 50px var(--btn-shadow),
                0 0px 20px var(--btn-shadow),
                0 0px 5px var(--btn-shadow);
    background-color: var(--btn-shadow) !important;
    transform: translate(20% , -25%);
}
.contactme-section a.btn-icon:hover { 
    color: var(--primary-color) !important;
}

.btn-hover { 
    transition: .5s;
    color: #9797975b;
    /* text-shadow: 0 0 5px #000; */
}
.btn-hover i { 
    opacity: 0;
    transition: .5s;
    transform: translateX(-30%);
}
.btn-hover:hover i{ 
    transform: translateX(40%);
}
.btn-hover:hover,
.btn-hover:hover i{
    opacity: 1;
    color: #8eb9eb !important; 
}
</style>