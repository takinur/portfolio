<template>
    <div>
      DEad
    </div>
</template>

<script>
// import { defineComponent } from "vue";
// import { loadFull } from "tsparticles";

// const particlesInit = async (engine) => {
//     await loadFull(engine);
// }

// const particlesLoaded = async (container) => {
//     console.log("Particles container loaded", container);
// }
export default {
    name: "Particles",
    props: {
        particleClass: {
            type: String,
            default: "text-white w-full h-full absolute top-0 left-0",
        },
    },
};
</script>
