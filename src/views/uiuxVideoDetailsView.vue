<template>
    <div class="container position-relative z-1">
        <div class="row">
            <div class="col mt-5">
                <div class="text-center object-fit-cover">
                    <video class="w-75" :src="uiuxDetails.video" autoplay muted controls></video>
                </div>
            </div>
        </div>
        <div class="row mb-5">
            <div class="col"> 
                <span class="fs-3 fw-bold opacity-25">01</span>
                <p class="fs-4 fw-semibold">Tools</p>
                <div class="border-bottom mb-2 opacity-25"></div>
                <div class="first-font-name">
                    <p class="m-0 fs-4 text-capitalize">{{ uiuxDetails.tools[0] }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'pinia'
import uiuxItems from '../stores/uiuxItems';

export default {

    computed: {
        ...mapState(uiuxItems ,["uiuxDetails"]),
    },

}
</script>

<style>

</style>