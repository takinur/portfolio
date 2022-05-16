<template>
    <div class="popover fixed md:h-full w-full overflow-auto flex top-0" v-if="selectedProject">
        <div class="bg-[#1d1e21] md:max-w-xl md:m-auto m-4 rounded-lg ">
            <div class="relative mb-4 h-8">
                <span
                    class="absolute top-2 right-2 cursor-pointer"
                    @click="closeWindow"
                >
                    <svg
                        class="w-6 h-6 text-gray-400"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </span>
            </div>
            <VueAgile
                :navButtons="true"
                :centerMode="true"
                :dots="true"
                :slidesToShow="1"
                :infinite="false"
                class="imgs"
            >
                <img
                    v-for="img in selectedProject.images"
                    :key="img.img"
                    :src="img.img"
                    alt=""
                    class="slide object-contain"
                />
            </VueAgile>
            <div class="pt-0 pb-8 px-5">
                <h3 class="text-2xl text-gray-200 font-bold">{{ selectedProject.title }}</h3>
                <div class="flex font-medium text-base text-gray-400">
                    <span class="py-1 capitalize text-xs font-bold mr-3" v-for="tag in selectedProject.tags" :key="tag">{{
                        tag
                    }}</span>
                </div>
                <div class="mt-4">
                    <a :href="selectedProject.demo" class="mr-3 disabled:cursor-default mx-auto opacity-75 py-1 px-6 text-[#7510F7] font-semibold rounded-full border-2 border-[#7510F7] shadow-lg block md:inline-block hover:bg-[#7510F7] hover:text-gray-100" v-if="selectedProject.demo.length > 1"
                        >Visit Live <i class="fas fa-chevron-right ml-2"></i></a
                    >
                    <a :href="selectedProject.source" class="disabled:cursor-default mx-auto opacity-75 py-1 px-6 text-[#7510F7] font-semibold rounded-full border-2 border-[#7510F7] shadow-lg block md:inline-block hover:bg-[#7510F7] hover:text-gray-100">Source</a>
                </div>
                <div class="description"></div>
            </div>
        </div>
        <!--Trick the browser to Close-->
        <div class=" w-full h-full fixed -z-50 top-0" @click="closeWindow"></div>
    </div>
</template>

<script>
import { VueAgile } from "vue-agile";

export default {
    components: {
        VueAgile,
    },
    props: {
        selectedProject: Object,
        closeWindow: Function,
    },
};
</script>

<style>
div.agile__actions {
    padding: 0 0.7rem;
}
div.agile__actions > button {
    color: #fff;
    font-size: xx-large;
    font-weight: bold;
}

div.agile__actions > button:disabled {
    color: #979292;
}
</style>
