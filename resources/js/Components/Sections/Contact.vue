<template>
  <section id="contact" class="md:-mt-32 -mt-20">
            <div
                class="container px-6 py-10 mx-auto shadow-lg md:mt-11 bg-[#141c3a] rounded-2xl w-4/5 pb-9"
            >
                <div
                    class="md:h-20 relative flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0 p-3 mx-auto"
                >
                    <div class="w-full md:w-1/3 grid place-items-center">
                        <p class="text-3xl font-semibold text-white">
                            Start a project
                        </p>
                    </div>
                    <div class="w-full md:w-1/3 grid place-items-center">
                        <p class="text-white">
                            Interested in working together? We should queue up a
                            chat. I’ll buy the coffee.
                        </p>
                    </div>
                    <div class="w-full md:w-1/3 grid place-items-center">
                        <div
                            class="md:space-x-20 space-y-10 md:space-y-0 mx-auto items-center"
                        >
                            <button
                                @click="sayHello"
                                class="py-3 px-6 text-white rounded-full border-2 border-[#7510F7] shadow-lg block md:inline-block hover:bg-[#7510F7]"
                            >
                                Let's do this
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        sayHello: Function,
    },

    methods: {},
});
</script>
