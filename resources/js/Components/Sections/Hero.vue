<template>
    <div
        class="hero pb-24 pt-28 md:h-screen relative border-2 border-red-600 bg-gradient-to-br from-[#512DA8] via-purple-500 to-purple-800 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black"
    >
        <particles-vue />
        <!-- container -->
        <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
            <!-- hero wrapper -->
            <div
                class="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
                <!-- hero text -->
                <div class="hero-text col-span-6">
                    <h1
                        data-aos="zoom-in-left"
                        data-aos-once="false"
                        data-aos-delay="50"
                        data-aos-duration="600"
                        data-aos-easing="ease-in-out"
                        class="font-bold uppercase text-4xl md:text-5xl max-w-xl text-slate-200 leading-tight dark:text-gray-300"
                    >
                        Full-Stack Web Developer
                    </h1>
                    <hr
                        class="w-12 h-1 bg-slate-300 rounded-full mt-8 dark:bg-white"
                    />
                    <p
                        data-aos="zoom-out-up"
                        class="text-slate-200 text-base leading-relaxed mt-8 font-semibold dark:text-gray-100"
                    >
                        I develop Modern, Responsive and SEO Friendly Websites
                        with clean code, and I love what I do.
                    </p>
                </div>

                <!-- hero image -->
                <div class="hero-image col-span-6" data-aos="fade-down-left">
                    <img
                        v-bind:src="'/images/' + 'hero.svg'"
                        alt=""
                        class="bg-cover"
                    />
                </div>
            </div>
        </div>
        <!--Scroll to button -->
        <button
            class="scroll-down absolute md:bottom-28 bottom-3 left-1/2 block w-8 h-8 -ml-3 border-2 border-slate-50 text-slate-50 bg-auto rounded-full"
            @click="scrollToElement('intro')"
            address="true"
        ></button>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import ParticlesVue from "../Particles.vue";

export default defineComponent({
    components: {
        ParticlesVue,
    },
    props: {
        scrollToElement: Function,
    },
});
</script>

<style scoped>
/* Scroll down */

.scroll-down {
    opacity: 1;
    -webkit-transition: all 0.5s ease-in 3s;
    transition: all 0.5s ease-in 3s;
}

.scroll-down {
    /* border-radius: 50%; */
    z-index: 2;
    -webkit-animation: bounce 2s infinite 2s;
    animation: bounce 2s infinite 2s;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    transform: scale(1);
}

.scroll-down::before {
    position: absolute;
    top: calc(50% - 8px);
    left: calc(50% - 6px);
    transform: rotate(-45deg);
    display: block;
    width: 12px;
    height: 12px;
    content: "";
    border: 2px solid #ffffff;
    border-width: 0px 0 2px 2px;
}

@keyframes bounce {
    0%,
    100%,
    20%,
    50%,
    80% {
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
    }
    40% {
        -webkit-transform: translateY(-10px);
        -ms-transform: translateY(-10px);
        transform: translateY(-10px);
    }
    60% {
        -webkit-transform: translateY(-5px);
        -ms-transform: translateY(-5px);
        transform: translateY(-5px);
    }
}
</style>
