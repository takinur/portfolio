<template>
    <header
        :class="{
            'md:!py-4 md:bg-slate-50 dark:bg-slate-800 shadow-2xl ':
                !view.atTopOfPage,
        }"
        class="header md:py-10 py-4 h-16 md:top-0 md:left-0 w-full z-50 md:fixed opacity-100 md:transition-all duration-300 ease-in-out"
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
                    <ul class="flex space-x-8 font-semibold">
                        <li
                            class="items-center justify-center m-auto text-slate-50 hover:text-slate-300 dark:!text-slate-400 dark:hover:!text-slate-100"
                            :class="{
                                '!text-gray-500 hover:!text-gray-900 ':
                                    !view.atTopOfPage,
                            }"
                        >
                            <a href="#intro" class="page-scroll text-md"
                                >About</a
                            >
                        </li>
                        <li
                            class="items-center justify-center m-auto text-slate-50 hover:text-slate-300 dark:!text-slate-400 dark:hover:!text-slate-100"
                            :class="{
                                '!text-gray-500 hover:!text-gray-900 ':
                                    !view.atTopOfPage,
                            }"
                        >
                            <a href="#projects" class="page-scroll text-md"
                                >Work</a
                            >
                        </li>
                        <li
                            class="items-center justify-center m-auto text-slate-50 hover:text-slate-300 dark:!text-slate-400 dark:hover:!text-slate-100"
                            :class="{
                                '!text-gray-500 hover:!text-gray-900 ':
                                    !view.atTopOfPage,
                            }"
                        >
                            <a href="#frameworks" class="page-scroll text-md"
                                >Frameworks</a
                            >
                        </li>
                        <li
                            class="items-center justify-center m-auto text-slate-50 hover:text-slate-300 dark:!text-slate-400 dark:hover:!text-slate-100"
                            :class="{
                                '!text-gray-500 hover:!text-gray-900 ':
                                    !view.atTopOfPage,
                            }"
                        >
                            <a href="#tools" class="page-scroll text-md"
                                >Tools</a
                            >
                        </li>
                        <li
                            class="items-center justify-center m-auto text-slate-50 hover:text-slate-300 dark:!text-slate-400 dark:hover:!text-slate-100"
                            :class="{
                                '!text-gray-500 hover:!text-gray-900 ':
                                    !view.atTopOfPage,
                            }"
                        >
                            <a href="#contact" class="page-scroll text-md"
                                >Contact</a
                            >
                        </li>
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
                                :class="{
                                    '!text-[#7510F7]': !view.atTopOfPage,
                                }"
                                class="-mt-1 py-2 px-6 text-sm text-slate-50 font-semibold dark:!text-white rounded-full border-2 border-[#7510F7] shadow-md block hover:!text-white md:inline-block hover:bg-[#7510F7]"
                            >
                                Say Hello
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <!-- mobile navbar -->
        <div class="mobile-navbar z-[999]">
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
                                @click.prevent="scrollToElement('intro')"
                                href="#intro"
                                class="my-4 inline-block active font-bold mt-8 dark:text-white"
                                >Introduction</a
                            >
                        </li>
                        <li>
                            <a
                                @click.prevent="scrollToElement('projects')"
                                href="#projects"
                                class="my-4 inline-block hover:text-orange-500 dark:text-white"
                                >Portfolio</a
                            >
                        </li>
                        <li>
                            <a
                                @click.prevent="scrollToElement('frameworks')"
                                href="#frameworks"
                                class="my-4 inline-block hover:text-orange-500 dark:text-white"
                                >Frameworks</a
                            >
                        </li>
                        <li>
                            <a
                                @click.prevent="scrollToElement('tools')"
                                href="#tools"
                                class="my-4 inline-block hover:text-orange-500 dark:text-white"
                                >Tools</a
                            >
                        </li>
                        <li>
                            <a
                                @click.prevent="scrollToElement('other')"
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
    </header>
</template>

<script>
import { defineComponent } from "vue";
import ToggleDarkModeVue from "../ToggleDarkMode.vue";

export default defineComponent({
    components: {
        ToggleDarkModeVue,
    },
    props: {
        sayHello: Function,
        scrollToElement: Function,
    },
    data() {
        return {
            showNav: false,
            view: {
                atTopOfPage: true,
            },
        };
    },
    // a beforeMount call to add a listener to the window
    beforeMount() {
        window.addEventListener("scroll", this.handleScroll);
    },
    mounted() {
        //Scroll to element
        var pageLink = document.querySelectorAll(".page-scroll");

        pageLink.forEach((elem) => {
            // console.log(elem);
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
                        .classList.remove(
                            "text-slate-900",
                            "dark:text-slate-50"
                        );
                    currLink.classList.add(
                        "text-slate-900",
                        "dark:text-slate-50"
                    );
                } else {
                    currLink.classList.remove(
                        "text-slate-900",
                        "dark:text-slate-50"
                    );
                }
            }
        }

        window.document.addEventListener("scroll", onScroll);
    },
    methods: {
        // the function to call when the user scrolls, added as a method
        handleScroll() {
            // when the user scrolls, check the pageYOffset
            if (window.pageYOffset > 0) {
                // user is scrolled
                if (this.view.atTopOfPage) this.view.atTopOfPage = false;
            } else {
                // user is at top of page
                if (!this.view.atTopOfPage) this.view.atTopOfPage = true;
            }
        },
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
