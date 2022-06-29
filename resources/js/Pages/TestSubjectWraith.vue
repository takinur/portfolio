<template>
    <Head title="Test Page" />

    <div class="h-screen font-bold bg-gray-200 text-red-600">
        <!-- <skills-sphere-vue /> -->
        <h1 class="text-lg text-green-600 font-serif font-semibold" @click="seehow">
            Just say Hello World.
        </h1>
    </div>

</template>

<script>
import { defineComponent } from "vue";
import { Head } from "@inertiajs/inertia-vue3";
// import Particles from "../Components/Particles.vue";
// import IntroVue from "../Components/Sections/Intro.vue";
// import HeaderVue from "../Components/Sections/Header.vue";
// import SkillsVue from "../Components/Sections/Skills.vue";
// import SkillsSphereVue from "../Components/SkillsSphere.vue";

export default defineComponent({
    props: [],

    components: {
        Head,
        // Particles,
        // IntroVue,
        // HeaderVue,
        // SkillsVue,
        // SkillsSphereVue,
    },
    data() {
        return {
            tags: [],
            options: ["vue", "composition", "js", "mytag1", "mayank1513"],
        };
    },
    mounted() {

    },
    methods: {
        seehow() {
            alert("Hola");
        },
         //Scroll to element
        scrollToElement(section) {
            let elementToScroll = document.getElementById(section);
            // console.log(elementToScroll);
            if (elementToScroll) {
                // Smooth scroll to the element
                elementToScroll.scrollIntoView({ behavior: "smooth" });
            }
        },
    },
});
</script>

<style scoped>

</style>
