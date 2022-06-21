<template>
    <section id="projects" class="py-24 bg-gray-200 dark:bg-slate-800 ">
        <div
            class="container px-2 py-10 mx-auto md:mt-2 bg-gray-200 rounded-2xl md:w-4/5 pb-9 dark:bg-slate-800"
        >
            <h1 class="text-dark text-3xl text-center mb-7 dark:text-gray-200">
                MY RECENT WORKS
            </h1>
            <div class="flex flex-wrap justify-center gap-x-6">
                    <div
                        v-for="(project, index) in projects"
                        :key="index"
                        class="mt-3"
                        data-aos="zoom-in-left"
                        data-aos-once="false"
                        data-aos-delay="50"
                        data-aos-duration="600"
                        Fdata-aos-easing="ease-in-out"
                    >
                        <CardVue :item="project" :txt="viewProject" />
                    </div>
            </div>
        </div>
    </section>
    <PopOver :selectedProject="selectedProject" :closeWindow="closePopOver" />
</template>

<script>
import { defineComponent } from "vue";
import CardVue from "../ShadowCard.vue";
import PopOver from "../PopProjectDetails.vue";


export default defineComponent({
    props: {
        projects: Array,
    },

    components: {
        CardVue,
        PopOver,
    },

    data() {
        return {
            selectedProject: null,
        };
    },
    //Methods
    methods: {
        viewProject: function (id) {
            this.selectedProject = this.projects.find((x) => x.id === id);
        },
        closePopOver() {
            this.selectedProject = null;
        },
    },
});
</script>

<style scoped>
@media screen and (max-width: 680px) {
    .project-card {
        grid-template:
            "thumb"
            "title"
            "time"
            "desc"
            "link"
            "pins" !important;
        grid-template-columns: auto !important;
        grid-template-rows: 1fr auto auto auto auto !important;
        height: auto !important;
        gap: 0.5rem !important;
        max-width: 400px;
        margin: auto;
    }
    .project-card h3 {
        -webkit-line-clamp: 4 !important;
    }
}

.links > a:hover {
    text-decoration: underline;
}
.links > a {
    color: #545454;
    font-weight: 600;
    text-decoration: none;
}
.tag:hover {
    text-decoration: underline;
}
.links {
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    color: gray !important;
    cursor: default;
}
.tags {
    color: gray;
    /* font-style: italic; */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
h3 {
    font-weight: 500 !important;
    color: hsl(25 5% 15% / 1);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
a.tag {
    margin: 0 !important;
    color: gray !important;
    font-weight: 400 !important;
    text-decoration: none;
    /* font-style: italic; */
}
.link a {
    color: gray;
    font-weight: 400;
    font-style: italic;
}
.link {
    padding: 0.5rem 1rem 0.5rem 0rem;
}

.pins.group > button {
    margin-bottom: 0.7rem;
}
.pins > button:focus {
    border: 1px solid black !important;
    outline: 0;
}
.pins > button:hover {
    background: #efefef87;
    border: 1px solid gray;
    cursor: pointer;
}
.pins > button {
    color: #494949;
    border-radius: 100px;
    cursor: default;
    margin-right: 0.7rem;
    display: inline-block;
    background: rgb(0 0 0 / 0.04);
    letter-spacing: 0.03rem;
    padding: 0.4em 1.4em;
    font-size: 15px;
    border: 1px solid transparent;
}
/* .pins { */
/* display: flex; */
/* } */
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.thumbnail {
    grid-area: thumb;
    border-radius: 0.5rem;
    overflow: hidden;
    /* width: 100px; */
    /* height: 60px; */
}
.description {
    color: hsl(0 0% 25% / 1);
    max-width: 500px;
    margin: 0;
    /* font-family: 'Merriweather', 'Montserrat', sans-serif; */
    /* font-style: italic; */
    /* font-weight: 300; */
    font-size: 15px;
    max-height: 80px;
    /* line-height: 1.7; */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.time {
    color: gray;
    font-size: 14px;
    margin: 0.1rem 0;
}

.project-card > a {
    text-decoration: none;
}
.project-card > a:hover {
    text-decoration: underline;
}

.project-card h3 {
    margin-top: 0rem;
    margin-bottom: 0rem;
    font-weight: 400;
    /* letter-spacing: 0.02rem; */
    font-size: x-large;
}
.project-card {
    display: grid;
    grid-template:
        "thumb title"
        "thumb time"
        "thumb desc"
        "thumb link"
        "thumb pins";
    grid-template-rows: auto auto 1fr auto;
    grid-template-columns: auto 1fr;
    height: 180px;
    column-gap: 2rem;
    padding: 2.5rem 0rem;
    /* border-bottom: 1px solid hsl(0 0% 90% / 1); */
}
</style>
