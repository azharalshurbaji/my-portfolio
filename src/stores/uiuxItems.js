import { defineStore } from "pinia";

export default defineStore ('uiuxItems' ,{
    // persist: true,
    state: () => ({
        uiuxDetails: [],
    
    }),
    getters: {
        
    },
    actions: {
        showProjectDetails(uiuxItem) {
            this.uiuxDetails = uiuxItem;
        },
    }
})