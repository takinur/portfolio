<template>
    <app-layout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Projects
            </h2>
        </template>

        <add-project-form />

        <button @click="test">Click</button>
    </app-layout>
</template>

<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import AddProjectForm from '@/Pages/Admin/Partials/AddProjectForm.vue'


export default defineComponent({
    components: {
        AppLayout,
        // FilePond,
        AddProjectForm,
    },
    props: ["data", "errors"],
    data: () => ({


    }),
    methods: {
        // deleteRow: function (data) {
        //     if (!confirm("Are you sure want to remove?")) return;
        //     data._method = "DELETE";
        //     this.$inertia.post("/dashboard/" + data.id, data);
        // },
          test: function () {
            console.log('data' );
        },
    },
});
</script>

<style></style>
