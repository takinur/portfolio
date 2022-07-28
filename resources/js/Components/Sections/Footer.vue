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
                    class="mt-12 px-10 justify-center items-center text-center text-sm text-gray-400"
                >
                    <div class="grid grid-cols-2 gap-4 md:flex md:items-center justify-center md:space-x-3">
                        <a
                            href="https://www.github.com/takinur"
                            target="blank"
                            class="bg-slate-600 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                        >
                            <svg
                                fill="#000000"
                                role="img"
                                class="w-5 h-5 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"
                                />
                            </svg>
                            <span>Github</span>
                        </a>

                        <a
                            href="https://linkedin.com/in/takinur"
                            target="blank"
                            class="bg-[#0288d1] px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                class="w-5 h-5 fill-current"
                                role="img"
                            >
                                <path
                                    fill="#0288D1"
                                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                                />
                                <path
                                    fill="#FFF"
                                    d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                                />
                            </svg>
                            <span>Linkedin</span>
                        </a>
                        <a href="https://twitter.com/_takinur" target="blank"
                            class="bg-blue-400 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                        >
                            <svg
                                class="w-5 h-5 fill-current"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                />
                            </svg>
                            <span>Twitter</span>
                        </a>
                        <!-- <a href="https://www.reddit.com/user/t4kinur" target="blank"
                            class="bg-red-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                        >
                            <svg
                                class="w-5 h-5 fill-current"
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"
                                />
                            </svg>
                            <span>Reddit</span>
                        </a> -->
                    </div>
                </div>
                <div
                    class="mt-12 md:justify-center items-center text-center text-sm text-gray-400"
                >
                    <p class="mt-8 md:mt-0">
                        HandCrafted by Me &copy;{{ new Date().getFullYear() }}
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: 'Footer',
});
</script>
