<template>
    <Head title="Test Page" />

    <ProjectsVue :projects="projects"/>
</template>

<script>
import { defineComponent } from "vue";
import { Head } from "@inertiajs/inertia-vue3";
import JetAuthenticationCardLogo from "@/Jetstream/AuthenticationCardLogo.vue";
import ProjectsVue from "../Components/Sections/Projects.vue";
// import CardVue from "../Components/ShadowCard.vue";
// import Fa from "../Components/FontIcon.vue";
// import PopOver from "../Components/PopProjectDetails.vue";


export default defineComponent({
    props: ["policy"],

    components: {
        Head,
        JetAuthenticationCardLogo,
        // CardVue,
        // Fa,
        // PopOver,
        ProjectsVue,
    },

    data() {
        return {
            // selectedProject: null,
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
    //Methods
    methods: { /*
        viewProject: function (id) {
            this.selectedProject = this.projects.find((x) => x.id === id);
        },
        closePopOver() {
            this.selectedProject = null;
        }, /*
        scrollcalc() {
            let mainNavLinks = document.querySelectorAll(".xx a");
            let fromTop = document.documentElement.scrollTop;
            let navbarHeight = 200;

            mainNavLinks.forEach((link) => {
                if (link.hash == "") return;

                let section = document.querySelector(link.hash);
                if (section == null) return;
                if (
                    section.offsetTop <= fromTop + window.innerHeight &&
                    section.offsetTop + section.offsetHeight >
                        fromTop + navbarHeight
                ) {
                    link.classList.add("current");
                    let allCurrents = document.querySelectorAll(".current");
                    let allFirsts = document.querySelector(".first");
                    if (allFirsts != null) {
                        allFirsts.classList.remove("first");
                    }
                    allCurrents[0].classList.add("first");
                } else {
                    link.classList.remove("current");
                }
            });
        },*/
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

<!-- <style lang="scss" scoped>
.card-col:nth-child(2) {
    margin-top: 5rem;
}
.cards {
    display: flex;
    gap: 1.7rem;
}
.card-col {
    display: flex;
    flex-flow: column;
    gap: 1.7rem;
}

.sidebar,
.sideoptions {
    transition: width 0.3s;
}
@media screen and (max-width: 1300px) {
    .main-view {
        grid-template: "siderbar main main";
    }
    .sideoptions {
        display: none;
    }
}
@media screen and (max-width: 1023px) {
    .main-view {
        grid-template: "main main main" !important;
        grid-template-columns: 1fr !important;
        width: auto !important;
    }
    .sidebar {
        display: none;
    }
}

.holder {
    scrollbar-color: #bebebe transparent;
    scrollbar-width: thin;
}
.holder:hover {
    scrollbar-color: #bebebe #f2f2f2;

    scrollbar-width: revert !important;
}

.holder::-webkit-scrollbar {
    width: 15px;
    padding: 10px;
}

.holder::-webkit-scrollbar-thumb {
    border-radius: 10px;
    /* background-color: #bebebe; */
    border: 5px solid transparent;
    background-clip: content-box;
}

.sider:hover .holder::-webkit-scrollbar {
    width: 15px;
}

.sider:hover .holder::-webkit-scrollbar-track {
    border-radius: 10px;
}

.sider:hover .holder::-webkit-scrollbar-thumb {
    border: 0;
    border-radius: 10px;
}

.sider:hover .holder::-webkit-scrollbar-thumb:hover {
    background: #818b99;
}
.sider {
    height: 100%;
    width: 310px;
}
.holder {
    padding: 1rem;
    position: -webkit-sticky;
    position: sticky;
    top: 60px;
    height: calc(100vh - 90px);
    overflow-y: auto;
}
.sidebar {
    justify-self: right;
}

.link .fas {
    font-size: 0.8rem;
}

.filters > .text {
    padding: 0.5em 0em;
    display: block;
}
.filters > .text > input {
    width: 125px;
    border: 0;
    background: 0;
    margin: 0rem 0.3rem;
    border-bottom: 1px solid gray;
}
.filters {
    margin: 2rem 0rem;
}

h2 {
    font-size: 1rem;
    color: var(--txt-med);
    margin-bottom: 2rem;
    cursor: default;
}
.main-view {
    display: grid;
    grid-template: "siderbar main";
    grid-template-columns: 1fr minmax(600px, 770px);
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    z-index: 100;
}
div > .main {
    max-width: 1000px;
    margin: auto;
    padding: 2rem;
    box-sizing: border-box;
    line-height: 1.6;
    color: var(--txt);
    padding: 1.5rem 1.5rem 80vh 1.5rem;
    width: 100%;
    z-index: 100;
}
</style>
<style scoped lang="scss">
.txt h1 {
    font-size: 3rem;
    margin: 0.2rem 0;
    line-height: 1.3;
    max-width: 600px;
}
.main-view {
    transition: background 0.3s;
    section {
        transition: opacity 0.3s;
    }
}

.main-view,
.main-view {
    .main .holder,
    .sider {
        transition: background 0.3s;
    }
}
.hidden {
    .xx {
        a {
            transition: min-width 0.3s;
            min-width: 0px;
            width: fit-content;
        }

        .title {
            opacity: 0;
        }
        .listitem {
            border: 0;
            color: black;
        }
        .listitem:nth-child(2) {
            background: var(--accent-1);
        }
        .listitem:nth-child(3) {
            background: var(--accent-2);
        }
        .listitem:nth-child(4) {
            background: var(--accent-3);
        }
        .listitem:nth-child(5) {
            background: var(--accent-4);
        }
        .listitem:nth-child(6) {
            background: var(--accent-5);
        }
        .listitem:nth-child(7) {
            background: var(--accent-6);
        }
        .listitem:hover {
            background: #fbfbfb;
        }
    }
    .contact,
    section {
        opacity: 0;
    }
    .main,
    .holder,
    .sider {
        background: transparent !important;
    }
    background: transparent !important;
    box-shadow: unset !important;
}
#intro {
    opacity: 100;
}
</style> -->
