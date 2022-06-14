<template>
    <div class="wrapper">
        <Head title="Takinur M Web Developer" />
        <!-- header -->
        <header
            class="header py-4 h-16 md:top-0 md:z-50 bg-gray-200 opacity-100 dark:bg-slate-800"
        >
            <!-- container -->
            <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                <!-- header wrapper -->
                <div class="header-wrapper flex items-center justify-between">
                    <!-- header logo -->
                    <div class="header-logo w-12">
                        <a href="/">
                            <img
                                v-bind:src="'/images/' + 'LOGO_T_256.png'"
                                alt="Logo of Takinur"
                                class="bg-cover"
                            />
                        </a>
                    </div>
                    <!-- mobile toggle -->
                    <div class="toggle md:hidden">
                        <button @click="toggleNav">
                            <svg
                                class="h-6 w-6 fill-current text-black dark:text-white"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                    <!-- Navbar -->
                    <nav class="navbar hidden md:block">
                        <ul class="flex space-x-8 text-sm font-semibold">
                            <li>
                                <!-- Toggle Dark -->
                                <div
                                    v-if="!isMobile()"
                                    class="flex items-center justify-center w-full"
                                >
                                    <toggle-dark-mode-vue />
                                </div>
                            </li>
                            <li>
                                <button
                                    @click="sayHello"
                                    class="-mt-1 py-2 px-6 text-[#7510F7] dark:text-white rounded-full border-2 border-[#7510F7] shadow-lg block hover:text-white md:inline-block hover:bg-[#7510F7]"
                                >
                                    Say Hello
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        <!-- end header -->
        <!-- hero -->
        <hero-vue :scrollToElement="scrollToElement" />
        <!-- end hero -->
        <!-- mobile navbar -->
        <div class="mobile-navbar">
            <transition name="slide-fade">
                <!-- navbar wrapper -->
                <div
                    class="navbar-wrapper fixed md:hidden top-0 left-0 h-full bg-white dark:bg-slate-900 z-30 w-64 shadow-lg p-5"
                    v-show="showNav"
                >
                    <div class="close">
                        <button
                            class="absolute top-0 right-0 mt-4 mr-4"
                            @click="toggleNav"
                        >
                            <svg
                                class="w-6 h-6 dark:text-white"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <ul class="divide-y">
                        <li>
                            <a
                                href="#intro"
                                class="my-4 inline-block active font-bold mt-8 dark:text-white"
                                >Introduction</a
                            >
                        </li>
                        <li>
                            <a
                                href="#projects"
                                class="my-4 inline-block hover:text-orange-500 dark:text-white"
                                >Portfolio</a
                            >
                        </li>
                        <li>
                            <a
                                href="#frameworks"
                                class="my-4 inline-block hover:text-orange-500 dark:text-white"
                                >Frameworks</a
                            >
                        </li>
                        <li>
                            <a
                                href="#tools"
                                class="my-4 inline-block hover:text-orange-500 dark:text-white"
                                >Tools</a
                            >
                        </li>
                        <li>
                            <a
                                href="#other"
                                class="my-4 inline-block hover:text-orange-500 dark:text-white"
                                >Other</a
                            >
                        </li>
                        <li>
                            <div
                                class="flex items-center justify-center w-full mt-8"
                            >
                                <toggle-dark-mode-vue />
                            </div>
                            <div
                                class="flex items-center justify-center w-full mt-6"
                            >
                                <button
                                    @click="sayHello"
                                    class="mt-2 py-1 px-6 text-[#7510F7] dark:text-slate-100 dark:border-slate-200 rounded-full border-2 border-[#7510F7] shadow-lg block hover:text-white md:inline-block hover:bg-[#7510F7]"
                                >
                                    Say Hello
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </transition>
        </div>
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
    <!-- end Main Wrapper -->
</template>

<script>
import { defineComponent } from "vue";
import { Head } from "@inertiajs/inertia-vue3";
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
import ToggleDarkModeVue from "../Components/ToggleDarkMode.vue";
import AddContactFormVue from "../Components/AddContactForm.vue";

export default defineComponent({
    components: {
        Head,
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
        ToggleDarkModeVue,
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
        toggleNav: function () {
            this.showNav = !this.showNav;
        },
        isMobile() {
            if (
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                )
            ) {
                return true;
            } else {
                return false;
            }
        },
        sayHello() {
            this.$refs.contactModal.showModal();
        },

        scrollToElement(section) {
            let elementToScroll = document.getElementById(section);
            if (elementToScroll) {
                // Smooth scroll to the element
                elementToScroll.scrollIntoView({ behavior: "smooth" });
            }
        },
    },
});
</script>

<style scoped>
/* Mobile Nav Animation */
.slide-fade-enter-active {
    transition: all 0.5s ease 0s;
    -webkit-transition: all 0.5s ease 0s;
}

.slide-fade-leave-active {
    transition: all 0.5s ease 0s;
    transform: translate3d(0px, 0px, 0px);
    -webkit-transition: all 0.5s ease 0s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translate3d(-100%, 0px, 0px);
    opacity: 0;
}
</style>
