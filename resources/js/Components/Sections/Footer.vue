<template>
  <footer class="bg-gray-200 h-24">
            <div class="bg-gray-200">
                <div
                    class="w-full mx-auto font-semibold text-gray-900 py-10 dark:bg-slate-800"
                >
                    <div class="text-center">
                        <!-- Footer logo -->
                        <div class="footer-logo w-24 mx-auto">
                            <img
                                v-bind:src="'/images/' + 'LOGO_T_256.png'"
                                alt="Logo of Takinur"
                                class="bg-cover"
                            />
                        </div>
                        <p
                            class="font-semibold mt-5 text-xl md:text-2xl dark:text-zinc-100"
                        >
                            Living, learning, & leveling up one day at a time.
                        </p>
                    </div>
                    <div
                        class="mt-24 md:justify-center items-center text-center text-sm text-gray-400"
                    >
                        <p class="mt-8 md:mt-0">
                            HandCrafted by Me &copy;{{
                                new Date().getFullYear()
                            }}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    props: [],

    methods: {},
});
</script>
