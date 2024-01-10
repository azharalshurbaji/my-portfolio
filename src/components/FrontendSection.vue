<template>
    <div class="container position-relative z-1">
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
            <div class="col" v-for="project in projects" :key="project">
                <div class="card shadow-sm-3 p-3 card-container card-hover">
                    <img :src="project.image" class="rounded img-thumbnail" alt="img">
                    <div class="card-body">
                        <p class="card-text h6 text-start">
                            {{ project.projectName }}
                        </p>
                    </div>
                    <a :href="project.url" target="_blank" type="button">
                        <div class="card-hover-effect">
                            <div>
                                <i class="text-black rounded-circle fa-sharp fa-solid fa-eye"></i>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="title my-5 text-center">
            <span class="fs-4">
                ..☆*: .｡. o.
                <span class="fs-1 fw-bold">
                    My Drawing CSS
                </span>
                .o .｡.:*☆..
            </span>
        </div>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5">
            <div class="col" v-for="drawing in drawings" :key="drawing">
                <div class="card shadow-sm-3 p-3 card-container card-hover">
                    <img :src="drawing.image" class="rounded img-thumbnail" alt="img">
                    <div class="card-body">
                        <p class="card-text h6 text-start">
                            {{ drawing.drawingName }}
                        </p>
                        <a :href="drawing.url" target="_blank" class="" type="button">
                            <div class="card-hover-effect">
                                <div>
                                    <i class="text-black rounded-circle fa-sharp fa-solid fa-eye"></i>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dc from '../assets/img/dc.png'
import cc from '../assets/img/cc.jpg'
import as from '../assets/img/as.png'
import hb from '../assets/img/hb.png'
import bitcoin from '../assets/img/bitcoin.png'
import sw from '../assets/img/sw.png'
import fb from '../assets/img/fb.png'
import flowers from '../assets/img/flowers.png'
import ps from '../assets/img/ps.png'
import is from '../assets/img/is.png'
import f1 from '../assets/img/f1.png'
import f2 from '../assets/img/f2.png'
import nf from '../assets/img/nf.png'
import ts from '../assets/img/ts.png'
import tsv from '../assets/img/tsv.png'
import pc from '../assets/img/pc.png'
import ab from '../assets/img/ab.png'

// Drawings Image
import wc from '../assets/img/drawing/wc.png'
import girls from '../assets/img/drawing/girls.png'
import pkc from '../assets/img/drawing/pkc.png'
import flowerHover2 from '../assets/img/drawing/flowerHover2.png'
import flower2 from '../assets/img/drawing/flower2.png'
import flower1 from '../assets/img/drawing/flower1.png'

export default {
    data: () => ({
        projects: [
            {
                id: 1,
                image: dc,
                projectName: 'Diamond Castle Store - Vue(Vuetify).js',
                url: 'https://azharalshurbaji.github.io/diamond-castle/',
            },
            {
                id: 2,
                image: as,
                projectName: 'Art Sharqi Store - Vue(Vuetify).js',
                url: 'https://azharalshurbaji.github.io/art-sharqi/',
            },
            {
                id: 3,
                image: hb,
                projectName: 'HandBags Store - Vue.js -Bulma',
                url: 'https://azharalshurbaji.github.io/handbag-store/',
            },
            {
                id: 4,
                image: cc,
                projectName: 'CupCake Store - Bootstrap Framework CSS',
                url: 'https://azharalshurbaji.github.io/cupcake-shop/',
            },
            {
                id: 5,
                image: bitcoin,
                projectName: 'Bitcoin - Bulma',
                url: 'https://azharalshurbaji.github.io/bitcoin-website/',
            },
            {
                id: 6,
                image: sw,
                projectName: 'Search engine optimization (SEO) - CSS',
                url: 'https://azharalshurbaji.github.io/seo-one-page-template/',
            },
            {
                id: 7,
                image: fb,
                projectName: 'Fresh - Bulma',
                url: 'https://azharalshurbaji.github.io/fresh/',
            },
            {
                id: 8,
                image: flowers,
                projectName: 'Flower Store - CCS',
                url: 'https://azharalshurbaji.github.io/flower-store/',
            },
            {
                id: 9,
                image: ps,
                projectName: 'Ccori Cristal Rose - Bootstap',
                url: 'https://azharalshurbaji.github.io/Perfume-shop/',
            },
            {
                id: 10,
                image: is,
                projectName: 'Innovative Solutions - Bootstrap',
                url: 'https://azharalshurbaji.github.io/innovative-solutions/',
            },
            {
                id: 11,
                image: f1,
                projectName: 'Form - CSS',
                url: 'https://azharalshurbaji.github.io/',
            },
            {
                id: 12,
                image: f2,
                projectName: 'Form - CSS',
                url: 'https://azharalshurbaji.github.io/',
            },
            {
                id: 13,
                image: nf,
                projectName: 'Neumorphic Form - CSS',
                url: 'https://codepen.io/azharalshurbaji/pen/yLqOvjG',
            },
            {
                id: 14,
                image: ts,
                projectName: 'Todo List - Java Script',
                url: 'https://codepen.io/azharalshurbaji/pen/RwJyROO',
            },
            {
                id: 15,
                image: tsv,
                projectName: 'Todo List - Vue.js',
                url: 'https://azharalshurbaji.github.io/todolist-vue.js/',
            },
            {
                id: 16,
                image: pc,
                projectName: 'Personal Card - CSS',
                url: 'https://azharalshurbaji.github.io/testimonial-card/',
            },
            {
                id: 17,
                image: ab,
                projectName: 'Animated Button - JavaScript',
                url: 'https://azharalshurbaji.github.io/animated-button/',
            },
        ],

        drawings: [
            {
                id: 1,
                image: wc,
                drawingName: 'Women Classic - CSS',
                url: 'https://azharalshurbaji.github.io/classic-woman/',
            },
            {
                id: 2,
                image: girls,
                drawingName: 'Drawing tow Girls in css',
                url: 'https://azharalshurbaji.github.io/Drawing-Avatar/',
            },
            {
                id: 3,
                image: pkc,
                drawingName: 'Drawing Pikachu in css',
                url: 'https://codepen.io/azharalshurbaji/pen/bGKLaqo',
            },
            {
                id: 4,
                image: flowerHover2,
                drawingName: 'Flower on hovering - CSS',
                url: 'https://azharalshurbaji.github.io/animated-flower-on-hover/',
            },
            {
                id: 5,
                image: flower2,
                drawingName: 'Flower (Styling Link) - CSS',
                url: 'https://azharalshurbaji.github.io/links/',
            },
            {
                id: 6,
                image: flower1,
                drawingName: 'Flower - CSS',
                url: 'https://codepen.io/azharalshurbaji/pen/WNyRpeR',
            },
        ]
    }),
}
</script>