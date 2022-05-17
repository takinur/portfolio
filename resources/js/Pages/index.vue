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
                                    <label
                                        for="toggleDark"
                                        class="flex items-center cursor-pointer"
                                    >
                                        <span class="mr-2">
                                            <svg
                                                class="h-6 w-6 text-yellow-600 dark:text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                                />
                                            </svg>
                                        </span>
                                        <!-- toggle -->
                                        <div class="relative">
                                            <!-- input -->
                                            <input
                                                type="checkbox"
                                                id="toggleDark"
                                                class="sr-only"
                                            />
                                            <!-- line -->
                                            <div
                                                class="block bg-gray-700 w-16 h-7 rounded-full"
                                            ></div>
                                            <!-- dot -->
                                            <div
                                                class="dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition"
                                            ></div>
                                        </div>
                                        <span class="ml-2">
                                            <svg
                                                class="h-6 w-6 text-gray-500 dark:text-cyan-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                                />
                                            </svg>
                                        </span>
                                    </label>
                                    <!-- label -->
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
        <Hero :scrollToElement="scrollToElement" />
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
                            <button
                                @click="sayHello"
                                class="-mt-2 py-1 px-6 text-[#7510F7] rounded-full border-2 border-[#7510F7] shadow-lg block hover:text-white md:inline-block hover:bg-[#7510F7]"
                            >
                                Say Hello
                            </button>
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
                            <!-- Toggle Dark -->
                            <div
                                class="flex items-center justify-center w-full mt-4"
                            >
                                <label
                                    for="toggleDark"
                                    class="flex items-center cursor-pointer"
                                >
                                    <span class="mr-2">
                                        <svg
                                            class="h-6 w-6 text-yellow-600 dark:text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                            />
                                        </svg>
                                    </span>
                                    <!-- toggle -->
                                    <div class="relative">
                                        <!-- input -->
                                        <input
                                            type="checkbox"
                                            id="toggleDark"
                                            class="sr-only"
                                        />
                                        <!-- line -->
                                        <div
                                            class="block bg-gray-700 w-16 h-7 rounded-full"
                                        ></div>
                                        <!-- dot -->
                                        <div
                                            id="mobileDot"
                                            class="dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition"
                                        ></div>
                                    </div>
                                    <span class="ml-2">
                                        <svg
                                            class="h-6 w-6 text-gray-500 dark:text-cyan-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                            />
                                        </svg>
                                    </span>
                                </label>
                                <!-- label -->
                            </div>
                        </li>
                    </ul>

                    <!-- follow us -->
                    <!-- <div class="follow">
                        <p class="italic font-semibold">follow us:</p>
                        <div class="social flex space-x-5 mt-4">
                            <a href="#">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fab"
                                    data-icon="twitter"
                                    class="h-5 w-5 fill-current text-gray-600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                    ></path>
                                </svg>
                            </a>
                            <a href="#">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fab"
                                    data-icon="facebook-f"
                                    class="h-5 w-5 fill-current text-gray-600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                    ></path>
                                </svg>
                            </a>
                            <a href="#">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fab"
                                    data-icon="instagram"
                                    class="h-5 w-5 fill-current text-gray-600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                    ></path>
                                </svg>
                            </a>
                            <a href="#">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fab"
                                    data-icon="youtube"
                                    class="h-5 w-5 fill-current text-gray-600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div> -->
                </div>
            </transition>
        </div>
        <intro-vue />
        <!--Skills Section-->
        <skills-vue />
        <!--Project Section-->
        <Projects-vue :projects="projects" />
        <!--Frameworks Section-->
        <Frameworks-vue />
        <!-- TOOls Section-->
        <Tools-vue />
        <!-- other Section-->
        <Other-vue />
        <!-- Contact Section -->
        <Contact :sayHello="sayHello" />
        <!-- Footer Section -->
        <Footer />
        <!-- Modal for Contact -->
        <div
            v-show="contactModal"
            @close="closeModal"
            class="min-w-screen h-screen transition-all animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
            style="
                transition-duration: 500ms;
                background-image: url(https://images.unsplash.com/photo-1623600989906-6aae5aa131d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1582&q=80);
            "
            id="modal-id"
        >
            <div
                @click="closeModal"
                class="absolute bg-black opacity-80 inset-0 z-0"
            ></div>
            <div
                :key="ModalReKey"
                class="w-full max-w-2xl max-h-screen p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
            >
                <div class="close">
                    <button
                        class="absolute top-0 right-0 mt-4 mr-4"
                        @click="closeModal"
                    >
                        <svg
                            class="w-6 h-6"
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
                <!--content-->
                <div class="modalContent">
                    <!--Form -->
                    <template v-if="isSucceed === false">
                        <!--body-->
                        <div class="p-5 justify-center">
                            <h2 class="text-3xl font-bold py-2 text-center">
                                Thanks for taking the time to reach out. How can
                                I help you today?
                            </h2>
                            <div class="mt-8">
                                <div class="">
                                    <jet-label for="name" value="Name" />
                                    <jet-input
                                        id="name"
                                        type="text"
                                        class="mt-1 block w-full"
                                        v-model="form.name"
                                        required
                                        autofocus
                                        autocomplete="name"
                                    />
                                    <jet-input-error
                                        :message="form.errors.name"
                                        class="mt-2 h-1"
                                    />
                                </div>

                                <div class="mt-8">
                                    <jet-label for="email" value="Email" />
                                    <jet-input
                                        id="email"
                                        type="email"
                                        class="mt-1 block w-full"
                                        v-model="form.email"
                                        required
                                    />
                                    <jet-input-error
                                        :message="form.errors.email"
                                        class="mt-2 h-1"
                                    />
                                </div>
                                <div>
                                    <div class="w-full flex flex-col mt-8">
                                        <label
                                            class="font-medium text-sm text-gray-700 leading-none"
                                            >Message</label
                                        >
                                        <textarea
                                            type="text"
                                            v-model="form.message"
                                            required
                                            class="h-20 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                                        ></textarea>
                                        <jet-input-error
                                            :message="form.errors.message"
                                            class="mt-2 h-1"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--footer-->
                        <div class="p-3 mt-2 text-center space-x-4 md:block">
                            <button
                                @click="closeModal"
                                class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                            >
                                Cancel
                            </button>
                            <button
                                @click="saveContact"
                                class="mb-2 md:mb-0 bg-white border border-[#7510F7] px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-[#7510F7] rounded-full hover:shadow-lg hover:bg-[#7510F7] hover:text-white"
                            >
                                Submit
                            </button>
                        </div>
                    </template>
                    <!--Success Message -->
                    <template v-else>
                        <div class="">
                            <div
                                class="alert flex flex-row items-center gbg-green-200 p-5 rounded border-b-2 border-green-300"
                            >
                                <div
                                    class="alert-icon flex items-center gbg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full"
                                >
                                    <span class="text-green-500">
                                        <svg
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            class="h-6 w-6"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </span>
                                </div>
                                <div class="alert-content ml-4">
                                    <div
                                        class="alert-title font-semibold text-3xl text-green-800"
                                    >
                                        Message Received Thank you!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
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
import Contact from "../Components/Sections/Contact.vue";
import Footer from "../Components/Sections/Footer.vue";
import Hero from "../Components/Hero.vue";
import ProjectsVue from "../Components/Sections/Projects.vue";

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
        Contact,
        Footer,
        Hero,
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
            projects: [
                {
                    id: 0,
                    images: [
                        {
                            img: "/images/demo-nuance-small.gif",
                        },
                        {
                            img: "/images/01.png",
                        },
                    ],
                    titel: "Social Networking Plattform",
                    tags: ["VueJS", "NodeJS", "mongoDB"],
                    demo: "",
                    source: "https://github.com/w-smesnoj/BehanceApp",
                },
                {
                    id: 1,
                    images: [
                        {
                            img: "https://smesnoj.com/images/demo-diprella-cropped.gif",
                        },
                        {
                            img: "https://smesnoj.com/images/03.png",
                        },
                    ],
                    title: "Semantic Form Application",
                    tags: ["VueJS", "NodeJS", "mongoDB"],
                    demo: "https://diprella-login.herokuapp.com/",
                    source: "https://github.com/w-smesnoj/diprella-login",
                },
                {
                    id: 2,
                    images: [
                        {
                            img: "/images/demo-parallax.gif",
                        },
                        {
                            img: "/images/02.png",
                        },
                    ],
                    titel: "CMS Frontend Webstore",
                    tags: ["VueJS", "Contentful"],
                    demo: "https://fierce-island-96798.herokuapp.com/",
                    source: "https://github.com/w-smesnoj/parallax-swipe",
                },
                {
                    id: 3,
                    images: [
                        {
                            img: "/images/04.png",
                        },
                        {
                            img: "/images/04.png",
                        },
                    ],
                    titel: "Whiteboard Collaboration App",
                    tags: ["React", "NodeJS", "PostgreSQL", "WebSockets"],
                    demo: "",
                    source: "https://github.com/w-smesnoj/visual-collaboration-platform",
                },
            ],
        };
    },
    mounted() {
        //Vanila JS

        // // Dark Mode Toggler
        const checkbox = document.querySelector("#toggleDark");
        const html = document.querySelector("html");
        const toggleDarkMode = function () {
            if (checkbox.checked) {
                html.classList.add("dark");
            } else {
                html.classList.remove("dark");
            }
        };
        //calling the function directly
        toggleDarkMode();
        checkbox.addEventListener("click", toggleDarkMode);

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
            this.contactModal = true;
            // this.form.reset();
            // this.isSucceed = false;
            // setTimeout(() => this.$refs.email.focus(), 250);
        },
        saveContact() {
            this.form.post(route("saveContact"), {
                preserveScroll: true,
                onSuccess: () => this.successModalClose(),
                // onError: () => this.$refs.name.focus(),
                onFinish: () => this.form.reset(),
            });
        },
        closeModal() {
            this.contactModal = false;
        },
        successModalClose() {
            this.isSucceed = true;
            //Close Modal After Few Seconds
            setTimeout(() => this.closeModal(), 4000);
        },
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

<style scoped>
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

/* Toggle DARK MODE */
#toggleDark:checked ~ .dot {
    transform: translateX(36px);
    background-color: #48bb78;
    transition: transform 0.3s linear;
}
</style>
