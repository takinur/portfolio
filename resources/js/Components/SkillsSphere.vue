<template>
    <span class="sphere_content"></span>
</template>

<script>
import { defineComponent } from "vue";
import TagCloud from "TagCloud";

export default defineComponent({
    name: "skills-sphere",
    mounted() {
        const myTags = [
            "InertiaJS",
            "JavaScript",
            "HTML",
            "CSS",
            "PHP",
            "Laravel",
            "Vue.js",
            "Python",
            "Django",
            "mySql",
            "Node.js",
            "TailwindCSS",
            "Bootstrap",
            "Json",
            "Nuxt.js",
            "Apache",
            "Nginx",

        ];
        // //To change the color of text randomly
        // var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
        // var random_color = colors[Math.floor(Math.random() * colors.length)];
        // document.querySelector('.sphere_content').style.color = random_color;

        const options = {
            // radius in px
            radius: 250,

            // animation speed
            // slow, normal, fast
            maxSpeed: "normal",
            initSpeed: "fast",

            // 0 = top
            // 90 = left
            // 135 = right-bottom
            direction: 135,

            // interact with cursor move on mouse out
            keep: true,
        };

        TagCloud(".sphere_content", myTags, options);
    },
    methods: {
        //
    },
});
</script>

<style>
    .tagcloud{
        width: 100% !important;
    }

</style>
