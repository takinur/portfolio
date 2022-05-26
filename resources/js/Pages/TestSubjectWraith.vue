<template>
    <Head title="Test Page" />

    <div class="p-8 bg-gray-200 min-h-screen">
        Hola
       <button class="bg-red-400" @click="seehow" > Hola</button>


        <add-contact-form-vue ref="contactModal"/>
    </div>

</template>

<script>
import { defineComponent } from "vue";
import { Head } from "@inertiajs/inertia-vue3";
import JetAuthenticationCardLogo from "@/Jetstream/AuthenticationCardLogo.vue";
import TagInputVue from "../Components/TagInput.vue";
import AddContactFormVue from "./Admin/Partials/AddContactForm.vue";

export default defineComponent({
    props: ["policy"],

    components: {
        Head,
        JetAuthenticationCardLogo,
        TagInputVue,
        AddContactFormVue,
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
            this.$refs.contactModal.showModal();
        }

    },
});
</script>

<style scoped>

</style>
