<template>
    <div id="darkModeButton">
        <label for="toggleDark" class="flex items-center cursor-pointer">
            <span class="mr-2">
                <svg
                    class="h-6 w-6 text-yellow-500 dark:text-white"
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
                    @click="toggleDarkMode"
                />
                <!-- line -->
                <div class="block bg-gray-700 w-16 h-7 rounded-full"></div>
                <!-- dot -->
                <div
                    class="dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition"
                ></div>
            </div>
            <span class="ml-2">
                <svg
                    class="h-6 w-6 text-gray-700 dark:text-cyan-400"
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            isDark: false,
            html: document.querySelector("html"),
        };
    },
    mounted() {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            this.html.classList.add("dark");
            this.isDark = true;
            document.querySelector("#toggleDark").checked = true;
        } else {
            this.html.classList.remove("dark");
            this.isDark = false;
        }
        // console.log("current theme: ", localStorage.theme);
    },

    methods: {
        toggleDarkMode() {
            if (this.isDark == false) {
                this.isDark = true;
                this.html.classList.add("dark");

                localStorage.theme = "dark";
            } else {
                this.isDark = false;
                this.html.classList.remove("dark");

                localStorage.theme = "light";
            }
        },
    },
};
</script>

<style scoped>
#toggleDark:checked ~ .dot {
    transform: translateX(36px);
    background-color: #48bb78;
    transition: transform 0.3s linear;
}
</style>
