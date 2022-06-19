<template>
    <Head title="Test Page" />
    <particles />
    <div class="p-8 bg-gray-200 min-h-screen">
        Hola
       <button class="bg-red-400" @click="seehow" > Hola</button>



    </div>

</template>

<script>
import { defineComponent } from "vue";
import { Head } from "@inertiajs/inertia-vue3";
import Particles from "../Components/Particles.vue";

export default defineComponent({
    props: ["policy"],

    components: {
        Head,
        Particles,

    },

    data() {
        return {
            tags: [],
            options: ['vue', 'composition', 'js', 'mytag1', 'mayank1513']
        };
    },
    //Methods
    methods: {
        seehow(){
            alert('Hola');
        }

    },
});
</script>

<style scoped>

</style>
