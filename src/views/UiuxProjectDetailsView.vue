<template>
    <div id="carouselExampleAutoplaying" class="carousel slide pt-5" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img :src="uiuxDetails.carouselItems[0]" class="rounded img-thumbnail d-block m-auto carousel-img-size" alt="img-uiux">
            </div>
            <div class="carousel-item">
                <img :src="uiuxDetails.carouselItems[1]" class="rounded img-thumbnail d-block m-auto carousel-img-size" alt="img-uiux">
            </div>
            <div class="carousel-item">
                <img :src="uiuxDetails.carouselItems[2]" class="rounded img-thumbnail d-block m-auto carousel-img-size" alt="img-uiux">
            </div>
            <div class="carousel-item">
                <img :src="uiuxDetails.carouselItems[3]" class="rounded img-thumbnail d-block m-auto carousel-img-size" alt="img-uiux">
            </div>
        </div>
        <button class="carousel-control-prev me-auto" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bg-black py-5 rounded-1" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next ms-auto" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon bg-black py-5 rounded-1" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <div class="container my-5">
        <div class="row">
            <div class="col my-5">
                <span class="fs-3 fw-bold opacity-25">01</span>
                <p class="fs-4 fw-semibold">Colors Palette</p>
                <div class="border-bottom my-2"></div>
                <div class="color-palette-items d-flex flex-wrap justify-content-center align-items-center ">
                    <!-- .box$*5 -->
                    <!-- <div v-for="color in colors" :key="color" class="box m-auto ms-2 my-3">
                        {{ color.codeColor }}
                    </div> -->
                    <div class="d-flex flex-wrap ">
                        <img :src="uiuxDetails.colors[0]" class="box ms-2 my-3">
                        <img :src="uiuxDetails.colors[1]" class="box ms-2 my-3">
                        <img :src="uiuxDetails.colors[2]" class="box ms-2 my-3">
                    </div>
                    
                    <!-- <div class="vstack"></div> -->
                </div>
                
            </div>
        </div>
        <div class="row">
            <div class="col mb-5">
                <span class="fs-3 fw-bold opacity-25">02</span>
                <p class="fs-4 fw-semibold">Typography</p>
                <div class="border-bottom mb-2"></div>
                <div class="m-auto d-flex">
                    <div class="first-font-name pe-5 border-end">
                        <p class="m-0 display-3">Aa</p>
                        <p class="m-0 fs-4 text-capitalize">{{ uiuxDetails.fontName[0] }}</p>
                    </div>
                    <div class="font-style mt-md-4 ms-5">
                        <p class="h5 text-capitalize">{{ uiuxDetails.fontWeight[0] }}</p>
                        <p class="h5 text-capitalize">{{ uiuxDetails.fontWeight[1] }}</p>
                    </div>
                    <!-- <div class="vr"></div> -->
                </div>
                <div class="border-bottom mt-5"></div>
                <div class="font-size mt-5">
                    <p class="text-capitalize fs-1">{{ uiuxDetails.fontSize[0] }}</p>
                    <p class="text-capitalize fs-2">{{ uiuxDetails.fontSize[1] }}</p>
                    <p class="text-capitalize fs-3">{{ uiuxDetails.fontSize[2] }}</p>
                    <p class="text-capitalize fs-4">{{ uiuxDetails.fontSize[3] }}</p>
                    <p class="text-capitalize fs-5">{{ uiuxDetails.fontSize[4] }}</p>
                    <p class="text-capitalize fs-6">{{ uiuxDetails.fontSize[5] }}</p>
                    <p class="text-capitalize ">{{ uiuxDetails.fontSize[6] }}</p>
                </div>
                <!-- 
                <div class="second-font-name">
                    <div class="display-3">Aa</div>
                    <div class="">Segoe UI</div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'pinia'
import uiuxItems from '../stores/uiuxItems';


export default {
    data: () => ({

        // colors: [
        //     {
        //         id: 1,
        //         codeColor: '#FFD1DB',
        //     },
        //     {
        //         id: 2,
        //         codeColor: '#5393AC',
        //     },
        //     {
        //         id: 3,
        //         codeColor: '#0E7D96',
        //     },
        //     {
        //         id: 4,
        //         codeColor: '#66E6FF',
        //     },
        //     {
        //         id: 5,
        //         codeColor: '#F9F9F9',
        //     },
        //     {
        //         id: 6,
        //         codeColor: '#FF0000',
        //     },
        //     {
        //         id: 7,
        //         codeColor: '#464646',
        //     },
        //     {
        //         id: 8,
        //         codeColor: '#A5A5A5',
        //     },
        // ],
}),
    computed: {
        carouselItems() {
            return this.uiuxDetails.carouselItems[0],
            this.uiuxDetails.carouselItems[1],
            this.uiuxDetails.carouselItems[2],
            this.uiuxDetails.carouselItems[3]
        },
        ...mapState(uiuxItems ,["uiuxDetails"]),
    },  

}
</script>
