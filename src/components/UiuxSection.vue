<template>
    <div class="container">
        <div class="title my-5 text-center">
            <span class="fs-4">
                ..☆*: .｡. o.
                <span class="fs-1 fw-bold">
                    My Projects
                </span>
                .o .｡.:*☆..
            </span>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5">
            <div v-for="uiuxItem in uiuxItems" :key="uiuxItem" class="col">
                <div class="card bg-card shadow-sm-3 p-3">
                    <img :src="uiuxItem.image" loading="lazy" alt="ui-img" class="rounded img-thumbnail">
                    <div class="card-body">
                        <p class="card-text h6 text-start text-white">
                            {{ uiuxItem.nameProject }}
                        </p>
                    </div>
                    <router-link class="btn btn-outline-info"
                        :to="{ name: 'uiux-project-details', params: { id: uiuxItem.id } }"
                        @click="showProjectDetails(uiuxItem)">
                        show
                    </router-link>
                </div>
            </div>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5">
            <div v-for="uiuxVideo in uiuxVideos" :key="uiuxVideo" class="col">
                <div class="card bg-card shadow-sm-3 p-3">
                    <img :src="uiuxVideo.image" loading="lazy" alt="ui-img" class="rounded img-thumbnail">
                    <div class="card-body">
                        <p class="card-text h6 text-start text-white">
                            {{ uiuxVideo.nameProject }}
                        </p>
                    </div>
                    <router-link class="btn btn-outline-info"
                        :to="{ name: 'uiux-video-details', params: { id: uiuxVideo.id } }"
                        @click="showProjectDetails(uiuxVideo)">
                        show
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'pinia';
import uiuxItems from '../stores/uiuxItems';
import { RouterLink } from 'vue-router';

// cupcake Store
import cupcake1 from "../assets/img/img-uiux/cupcake1.jpg"
import cupcake2 from "../assets/img/img-uiux/cupcake2.jpg"
import cupcake3 from "../assets/img/img-uiux/cupcake3.jpg"
import cupcakeWeb from "../assets/img/img-uiux/cupcakeWeb.jpg"
// Palette Color
import cupcakeColor1 from "../assets/img/img-uiux/cupcakeColor1.jpg"
import cupcakeColor2 from "../assets/img/img-uiux/cupcakeColor2.jpg"
import cupcakeColor3 from "../assets/img/img-uiux/cupcakeColor3.jpg"

// Milk Store
import milk1 from "../assets/img/img-uiux/milk-pro/milk1.jpg"
import milk2 from "../assets/img/img-uiux/milk-pro/milk2.jpg"
import milk3 from "../assets/img/img-uiux/milk-pro/milk3.jpg"
import milk4 from "../assets/img/img-uiux/milk-pro/milk4.jpg"
// Palette Color
import milkColor1 from "../assets/img/img-uiux/milk-pro/milkColor1.jpg"
import milkColor2 from "../assets/img/img-uiux/milk-pro/milkColor2.jpg"
import milkColor3 from "../assets/img/img-uiux/milk-pro/milkColor3.jpg"

// Medic Application
import medic1 from "../assets/img/img-uiux/clinc-pro/medic1.jpg"
import medic2 from "../assets/img/img-uiux/clinc-pro/medic2.jpg"
import medic3 from "../assets/img/img-uiux/clinc-pro/medic3.jpg"
import medic4 from "../assets/img/img-uiux/clinc-pro/medic4.jpg"
// Palette Color
import medicColor1 from "../assets/img/img-uiux/clinc-pro/medicColor1.jpg"
import medicColor2 from "../assets/img/img-uiux/clinc-pro/medicColor2.jpg"
import medicColor3 from "../assets/img/img-uiux/clinc-pro/medicColor3.jpg"

// Pizza Application
import pizza1 from "../assets/img/img-uiux/pizza/pizza1.jpg"
import pizza2 from "../assets/img/img-uiux/pizza/pizza2.jpg"
import pizza3 from "../assets/img/img-uiux/pizza/pizza3.jpg"
import pizzaWebb from "../assets/img/img-uiux/pizza/pizzaWebb.jpg"
// pizza Web
import pizzaWeb1 from "../assets/img/img-uiux/pizza/pizzaWeb1.jpg"
import pizzaWeb2 from "../assets/img/img-uiux/pizza/pizzaWeb2.jpg"
import pizzaWeb3 from "../assets/img/img-uiux/pizza/pizzaWeb3.jpg"
import pizzaWeb4 from "../assets/img/img-uiux/pizza/pizzaWeb4.jpg"
// Palette Color
import colorPizza1 from "../assets/img/img-uiux/pizza/colorPizza1.jpg"
import colorPizza2 from "../assets/img/img-uiux/pizza/colorPizza2.jpg"
import colorPizza3 from "../assets/img/img-uiux/pizza/colorPizza3.jpg"

// share photo
import photoShare1 from "../assets/img/img-uiux/photo-share/photoShare1.jpg"
import photoShare2 from "../assets/img/img-uiux/photo-share/photoShare2.jpg"
import photoShare3 from "../assets/img/img-uiux/photo-share/photoShare3.jpg"
import photoShare4 from "../assets/img/img-uiux/photo-share/photoShare4.jpg"
// Palette Color
import colorPhoto1 from "../assets/img/img-uiux/photo-share/colorPhoto1.jpg"
import colorPhoto2 from "../assets/img/img-uiux/photo-share/colorPhoto2.jpg"
import colorPhoto3 from "../assets/img/img-uiux/photo-share/colorPhoto3.jpg"

// Abstract Design
import abstractDesign from "../assets/img/img-uiux/abstractDesign/abstractDesign.jpg"
import abstractDesignV from "../assets/img/img-uiux/abstractDesign/abstractDesignV.mp4"

import carousel from "../assets/img/img-uiux/switch/carousel.jpg"
import carouselV from "../assets/img/img-uiux/switch/carouselV.mp4"

import darkMode from "../assets/img/img-uiux/switch/darkMode.jpg"
import darkModeV from "../assets/img/img-uiux/switch/darkModeV.mp4"

import cupcakeSlider from "../assets/img/img-uiux/switch/cupcakeSlider.jpg"
import cupcakeSliderV from "../assets/img/img-uiux/switch/cupcakeSliderV.mp4"

import toggleButton from "../assets/img/img-uiux/switch/toggleButton.jpg"
import toggleButtonV from "../assets/img/img-uiux/switch/toggleButtonV.mp4"

import signUpPage from "../assets/img/img-uiux/switch/signUpPage.jpg"
import signUpPageV from "../assets/img/img-uiux/switch/signUpPageV.mp4"

export default {

    components: {
        RouterLink
    },

    data: () => ({
        uiuxItems: [
            {
                id: 1,
                image: milk1,
                nameProject: "Milk Store Application",
                carouselItems: [
                    milk1,
                    milk2,
                    milk3,
                    milk4,
                ],
                colors: [
                    milkColor1,
                    milkColor2,
                    milkColor3
                ],
                tools: ["Adobe XD", "Adobe Photoshop & Adobe illustrator"],
                fontName: ["Lato"],
                fontWeight: ["regular", "black"],
                fontSize: [
                    "Primary heading 45pt",
                    "Secondry heading 25pt",
                    "Section heading 18pt",
                    "section body 16pt",
                    "sub title 14pt",
                    "sub title 11pt",
                    "sub title 8pt"
                ],
            },
            {
                id: 2,
                image: cupcake1,
                nameProject: "CupCake Store Application",
                carouselItems: [
                    cupcake1,
                    cupcake2,
                    cupcake3,
                    cupcakeWeb,
                ],
                colors: [
                    cupcakeColor1,
                    cupcakeColor2,
                    cupcakeColor3
                ],
                tools: ["Adobe XD", "Adobe Photoshop"],
                fontName: ["roboto"],
                fontWeight: ["regular", "medium"],
                fontSize: [
                    "Roboto Medium 34pt",
                    "Roboto Regular 28pt",
                    "Roboto medium 18pt",
                    "Roboto medium 16pt",
                    "Roboto Regular 16pt",
                    "Roboto medium 14pt",
                    "Roboto Regular 14pt"
                ],
            },
            {
                id: 3,
                image: medic1,
                nameProject: "Medic Application",
                carouselItems: [
                    medic1,
                    medic2,
                    medic3,
                    medic4,
                ],
                colors: [
                    medicColor1,
                    medicColor2,
                    medicColor3
                ],
                tools: ["Adobe XD", "Adobe Photoshop"],
                fontName: ["segoe ui"],
                fontWeight: ["regular", "semiBold"],
                fontSize: [
                    "segoe Ui SemiBold 24pt",
                    "segoe Ui SemiBold 18pt",
                    "segoe Ui medium 18pt",
                    "segoe Ui SemiBold 16pt",
                    "segoe Ui Regular 16pt",
                    "segoe Ui SemiBold 14pt",
                    "segoe Ui Italic 14pt"
                ],
            },
            {
                id: 4,
                image: pizza1,
                nameProject: "Pizza Store Application",
                carouselItems: [
                    pizza1,
                    pizza2,
                    pizza3,
                    pizzaWebb,
                ],
                colors: [
                    colorPizza1,
                    colorPizza2,
                    colorPizza3
                ],
                tools: ["Adobe XD", "Adobe Photoshop"],
                fontName: ["segoe ui"],
                fontWeight: ["regular", "Bold"],
                fontSize: [
                    "segoe Ui Regular 32pt",
                    "segoe Ui Bold 24pt",
                    "segoe Ui Bold 20pt",
                    "segoe Ui Bold 16pt",
                    "segoe Ui Bold 14pt",
                    
                ],
            },
            {
                id: 5,
                image: pizzaWebb,
                nameProject: "Pizza Store WebSite",
                carouselItems: [
                    pizzaWeb1,
                    pizzaWeb2,
                    pizzaWeb3,
                    pizzaWeb4,
                ],
                colors: [
                    colorPizza1,
                    colorPizza2,
                    colorPizza3
                ],
                tools: ["Adobe XD", "Adobe Photoshop"],
                fontName: ["inter"],
                fontWeight: ["regular", "Bold"],
                fontSize: [
                    "inter Bold 48pt",
                    "inter SemiBold 38pt",
                    "inter light 24pt",
                    "inter medium 20pt",
                    "inter Bold 20pt",
                    "inter light 16pt",
                    "inter medium 14pt",
                ],
            },
            {
                id: 6,
                image: photoShare1,
                nameProject: "Photo Share App",
                carouselItems: [
                    photoShare1,
                    photoShare2,
                    photoShare3,
                    photoShare4,
                ],
                colors: [
                    colorPhoto1,
                    colorPhoto2,
                    colorPhoto3,
                ],
                tools: ["Adobe XD", "Adobe Photoshop"],
                fontName: ["segoe Ui"],
                fontWeight: ["regular", "SemiBold"],
                fontSize: [
                    "segoe Ui Black 64pt",
                    "segoe Ui Semibold 24pt",
                    "segoe Ui regular 18pt",
                    "segoe Ui regular 16pt",
                    "segoe Ui regular 14pt",
                    "segoe Ui regular 12pt",
                ],
            },
        ],
        
        uiuxVideos: [
            {
                id: '1v',
                image: carousel,
                nameProject: "Carousel animation",
                video: carouselV,
                tools: ["Adobe XD"]
            },
            {
                id: '2v',
                image: abstractDesign,
                nameProject: "Abstract Designs",
                video: abstractDesignV,
                tools: ["Adobe XD"]
            },
            {
                id: '3v',
                image: darkMode,
                nameProject: "Switch Dark Mode and Counter Button",
                video: darkModeV,
                tools: ["Adobe XD"]
            },
            {
                id: '4v',
                image: cupcakeSlider,
                nameProject: "Cupcake Slider Design",
                video: cupcakeSliderV,
                tools: ["Adobe XD"]
            },
            {
                id: '5v',
                image: toggleButton,
                nameProject: "Toggle Button Design",
                video: toggleButtonV,
                tools: ["Adobe XD"]
            },
            {
                id: '6v',
                image: signUpPage,
                nameProject: " Authentication UI Animation (Sign Up and Login Page)",
                video: signUpPageV,
                tools: ["Adobe XD"]
            },
        ],
    }),
    // created() {
    //     this.loadUiuxItems();
    // },
    methods: {
        ...mapActions(uiuxItems, ["showProjectDetails"]),

        // async loadUiuxItems() {
        //     try {
        //         let res = await fetch(`http://localhost:5174/uiuxItems`);
        //         this.uiuxItems = await res.json();
        //         console.log(res);
        //     } catch (error) {
        //         console.log("Loadding Field", error.code);
        //     }
        // },
    },
}
</script>
