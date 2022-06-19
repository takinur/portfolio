<template>
    <Head title="Test Page" />
     <header-vue :scrollToElement="scrollToElement"/>
    <div class="h-screen">
        DD
    </div>

     <intro-vue />
        <!--Skills Section-->
    <skills-vue />
    <div class="h1">
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
        //Scroll to element
        var pageLink = document.querySelectorAll(".page-scroll");

        pageLink.forEach((elem) => {
            elem.addEventListener("click", (e) => {
                e.preventDefault();
                document
                    .querySelector(elem.getAttribute("href"))
                    .scrollIntoView({
                        behavior: "smooth",
                        offsetTop: 1 - 60,
                    });
            });
        });
        // section menu active
        function onScroll(event) {
            var sections = document.querySelectorAll(".page-scroll");
            var scrollPos =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;

            for (var i = 0; i < sections.length; i++) {
                var currLink = sections[i];
                var val = currLink.getAttribute("href");
                var refElement = document.querySelector(val);
                var scrollTopMinus = scrollPos + 73;
                if (
                    refElement.offsetTop <= scrollTopMinus &&
                    refElement.offsetTop + refElement.offsetHeight >
                        scrollTopMinus
                ) {
                    document
                        .querySelector(".page-scroll")
                        .classList.remove("active");
                    currLink.classList.add("active");
                } else {
                    currLink.classList.remove("active");
                }
            }
        }

        window.document.addEventListener("scroll", onScroll);
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
