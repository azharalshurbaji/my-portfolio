<template>
    <div class="container">
        <div class="row">
            <div class="title my-5 text-center">
                <span class="fs-4">
                    ..☆*: .｡. o.
                    <span class="fs-1 fw-bold">
                        My Projects
                    </span>
                    .o .｡.:*☆..
                </span>
            </div>
            <div v-for="uiuxItem in uiuxItems" :key="uiuxItem" class="col">
                <div class="card bg-card shadow-sm-3 p-3"><img :src="uiuxItem.image" alt="ui-img" class="rounded img-thumbnail">
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
    </div>
</template>

<script>
import { mapActions } from 'pinia';
import uiuxItems from '../stores/uiuxItems';
import { RouterLink } from 'vue-router';

// cupcake Store
import m1 from "../assets/img/img-uiux/m1.jpg"
import s1 from "../assets/img/img-uiux/s1.jpg"
import s2 from "../assets/img/img-uiux/s2.jpg"
import m2 from "../assets/img/img-uiux/m2.jpg"
// Palette Color
import mp1 from "../assets/img/img-uiux/mp1.jpg"
import mp2 from "../assets/img/img-uiux/mp2.jpg"
import mp3 from "../assets/img/img-uiux/mp3.jpg"

// Milk Store
import ms1 from "../assets/img/img-uiux/milk-pro/ms1.jpg"
import ms3 from "../assets/img/img-uiux/milk-pro/ms3.jpg"
import ms4 from "../assets/img/img-uiux/milk-pro/ms4.jpg"
import ms2 from "../assets/img/img-uiux/milk-pro/ms2.jpg"
// Palette Color
import msc1 from "../assets/img/img-uiux/milk-pro/msc1.jpg"
import msc2 from "../assets/img/img-uiux/milk-pro/msc2.jpg"
import msc3 from "../assets/img/img-uiux/milk-pro/msc3.jpg"

// Medic Application
import c1 from "../assets/img/img-uiux/clinc-pro/c1.png"
import c2 from "../assets/img/img-uiux/clinc-pro/c2.jpg"
import c3 from "../assets/img/img-uiux/clinc-pro/c3.jpg"
import c4 from "../assets/img/img-uiux/clinc-pro/c4.jpg"
// Palette Color
import cp1 from "../assets/img/img-uiux/clinc-pro/cp1.jpg"
import cp2 from "../assets/img/img-uiux/clinc-pro/cp2.jpg"
import cp3 from "../assets/img/img-uiux/clinc-pro/cp3.jpg"

export default {

    components: {
        RouterLink
    },

    data: () => ({
        uiuxItems: [
            {
                id: 1,
                image: m2,
                nameProject: "CupCake Store Application",
                "carouselItems": {
                    m1,
                    s1,
                    s2,
                    m2
                },
                colors: [
                    mp1,
                    mp2,
                    mp3
                ],
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
                ]
            },
            {
                id: 2,
                image: ms2,
                nameProject: "Milk Store Application",
                carouselItems: [
                    ms1,
                    ms3,
                    ms4,
                    ms2
                ],
                colors: [
                    msc1,
                    msc2,
                    msc3
                ],
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
                ]
            },
            {
                id: 3,
                image: c2,
                nameProject: "Medic Application",
                carouselItems: [
                    c2,
                    c3,
                    c4,
                    c1
                ],
                colors: [
                    cp1,
                    cp2,
                    cp3
                ],
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
                ]
            }
        ]
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
