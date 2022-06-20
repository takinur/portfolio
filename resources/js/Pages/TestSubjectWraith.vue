<template>
    <Head title="Test Page" />
     <header-vue :scrollToElement="scrollToElement"/>
    <div class="h-screen font-bold">
        DD
    </div>

     <intro-vue />
        <!--Skills Section-->
    <skills-vue />
    <div class="h1 font-semibold">
        Hello
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { Head } from "@inertiajs/inertia-vue3";
import Particles from "../Components/Particles.vue";
import IntroVue from "../Components/Sections/Intro.vue";
import HeaderVue from "../Components/Header.vue";
import SkillsVue from "../Components/Sections/Skills.vue";

export default defineComponent({
    props: [],

    components: {
        Head,
        Particles,
        IntroVue,
        HeaderVue,
        SkillsVue,
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

<style>
.active {
    color: red;
}
</style>
