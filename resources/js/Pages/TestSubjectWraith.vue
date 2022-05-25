<template>
    <Head title="Test Page" />

    <tag-input-vue v-model="tags" :showCount="true"/>
</template>

<script>
import { defineComponent } from "vue";
import { Head } from "@inertiajs/inertia-vue3";
import JetAuthenticationCardLogo from "@/Jetstream/AuthenticationCardLogo.vue";
import TagInputVue from "../Components/TagInput.vue";


export default defineComponent({
    props: ["policy"],

    components: {
        Head,
        JetAuthenticationCardLogo,
        TagInputVue,
    },

    data() {
        return {
            tags: [],
            options: ['vue', 'composition', 'js', 'mytag1', 'mayank1513']
        };
    },
    //Methods
    methods: {
        //

    },
});
</script>

<style scoped>

</style>
