<template>
    <div class="wrapper">
        <Head title="Takinur M Web Developer" />
        <!-- header -->
        <header-vue  :sayHello="sayHello" :scrollToElement="scrollToElement"/>
        <!-- hero -->
        <hero-vue :scrollToElement="scrollToElement" />
        <!-- Intro Section-->
        <intro-vue />
        <!--Skills Section-->
        <skills-vue />
        <!--Project Section-->
        <Projects-vue :projects="data" />
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
import { defineComponent } from "vue";
import { Head } from "@inertiajs/inertia-vue3";
import HeaderVue from "../Components/Header.vue";
import JetInput from "@/Jetstream/Input.vue";
import JetInputError from "@/Jetstream/InputError.vue";
import JetLabel from "@/Jetstream/Label.vue";
import BackToTop from "../Components/BackToTop.vue";
import IntroVue from "../Components/Sections/Intro.vue";
import SkillsVue from "../Components/Sections/Skills.vue";
import FrameworksVue from "../Components/Sections/Frameworks.vue";
import ToolsVue from "../Components/Sections/Tools.vue";
import OtherVue from "../Components/Sections/Other.vue";
import ContactSection from "../Components/Sections/Contact.vue";
import FooterSection from "../Components/Sections/Footer.vue";
import HeroVue from "../Components/Sections/Hero.vue";
import ProjectsVue from "../Components/Sections/Projects.vue";
import AddContactFormVue from "../Components/AddContactForm.vue";

export default defineComponent({
    components: {
        Head,
        HeaderVue,
        JetInput,
        JetInputError,
        JetLabel,
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
    data() {
        return {
            showNav: false,
            isDark: false,
            isSucceed: false,
            contactModal: false,

            form: this.$inertia.form({
                name: "",
                email: "",
                message: "",
            }),
        };
    },
    mounted() {
        //
    },
    methods: {
        sayHello() {
            this.$refs.contactModal.showModal();
        },
        //Scroll to element
        scrollToElement(section) {
            let elementToScroll = document.getElementById(section);
            console.log(elementToScroll);
            if (elementToScroll) {
                // Smooth scroll to the element
                elementToScroll.scrollIntoView({ behavior: "smooth" });
            }
        },
    },
});
</script>

