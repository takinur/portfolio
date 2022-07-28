<template>
    <section id="intro">
        <!-- hero -->
        <div
            class="hero bg-[#7510F7] py-16 h-[700px] md:h-[500px] dark:bg-gray-900"
        >
            <!-- container -->
            <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                <!-- hero wrapper -->
                <div
                    class="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-items-center"
                >
                    <!-- hero text -->
                    <div
                        data-aos="fade-up"
                        class="hero-text text-center col-span-12 items-center content-center md:w-2/3"
                    >
                        <h1
                            class="font-bold text-4xl md:text-3xl text-white leading-tight"
                        >
                            Hi, I’m Takinur. Nice to meet you.
                        </h1>
                        <p
                            class="text-white text-lg text-center leading-relaxed mt-8 font-semibold"
                        >
                            Since beginning my journey as a web
                            developer nearly 3 years ago, I've done remote work
                            for agencies, consulted for startups, and
                            collaborated with talented people to create digital
                            products for both business and consumer use. I'm a
                            quiet confident person who is naturally curious and
                            is constantly working on improving my skills
                            resolving one development problem at a time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- end hero -->
    </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    props: [],

    methods: {},
});
</script>
