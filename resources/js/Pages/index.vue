<template>
    <div class="wrapper">
        <Head title="Takinur M Web Developer" />
        <!-- header -->
        <header-vue :sayHello="sayHello" :scrollToElement="scrollToElement" />
        <!-- hero -->
        <!-- <hero-vue :scrollToElement="scrollToElement" /> -->
        <!-- Intro Section-->
        <intro-vue />
        <!--Skills Section-->
        <skills-vue />
        <!--Project Section-->
        <projects-vue :projects="data" />
        <!--Frameworks Section-->
        <Frameworks-vue />
        <!-- TOOls Section-->
        <Tools-vue />
        <!-- other Section-->
        <Other-vue />
        <!-- Contact Section -->
        <contact-section :sayHello="sayHello" />
        <!-- Footer Section -->
        <footer-section />
        <!-- Modal for Contact -->
        <add-contact-form-vue ref="contactModal" />

        <!-- Back to top -->
        <back-to-top />
    </div>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";
import { Head } from "@inertiajs/inertia-vue3";
import HeaderVue from "../Components/Sections/Header.vue";
import BackToTop from "../Components/BackToTop.vue";
import IntroVue from "../Components/Sections/Intro.vue";
import SkillsVue from "../Components/Sections/Skills.vue";
import FrameworksVue from "../Components/Sections/Frameworks.vue";
import ToolsVue from "../Components/Sections/Tools.vue";
import OtherVue from "../Components/Sections/Other.vue";
import ContactSection from "../Components/Sections/Contact.vue";
import FooterSection from "../Components/Sections/Footer.vue";
import HeroVue from "../Components/Sections/Hero.vue";
import AddContactFormVue from "../Components/AddContactForm.vue";
import Loading from "../Components/Loading.vue";

import ProjectsVue from "../Components/Sections/Projects.vue";

// const ProjectsVue = defineAsyncComponent({
//     loader: () =>
//         import(
//             "../Components/Sections/Projects.vue" /* webpackChunkName: "Projects" */
//         ),
//     // loadingComponent: () => Loading,
//     delay: 200,
//     // suspensible: false,
// });

export default defineComponent({
    components: {
        Head,
        HeaderVue,
        BackToTop,
        ProjectsVue,
        IntroVue,
        SkillsVue,
        FrameworksVue,
        ToolsVue,
        OtherVue,
        ContactSection,
        FooterSection,
        HeroVue,
        AddContactFormVue,
    },
    props: ["data", "errors"],
    methods: {
        sayHello() {
            this.$refs.contactModal.showModal();
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
