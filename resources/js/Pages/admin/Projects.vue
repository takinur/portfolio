<template>
    <app-layout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Projects
            </h2>
        </template>

        <add-project-form />



    </app-layout>
</template>

<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
// import vueFilePond, { setOptions } from "vue-filepond";
// import "filepond/dist/filepond.min.css";
// import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import AddProjectForm from '@/Pages/Admin/Partials/AddProjectForm.vue'

// const FilePond = vueFilePond(FilePondPluginImagePreview);
// setOptions({
//     // server: {
//     //     url: "/image-upload",
//     //     headers: {
//     //          "X-CSRF-TOKEN": 'Pf',
//     //     },
//     // },
//     name: "projectImage",
//     className: "imageUpload",
//     allowMultiple: true,
//     allowReorder: true,
//     credits: "",
// });

export default defineComponent({
    components: {
        AppLayout,
        // FilePond,
        AddProjectForm,
    },
    props: ["data", "errors"],
    data: () => ({
        csrf: document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content"),
    }),
    methods: {
        // deleteRow: function (data) {
        //     if (!confirm("Are you sure want to remove?")) return;
        //     data._method = "DELETE";
        //     this.$inertia.post("/dashboard/" + data.id, data);
        // },
    },
});
</script>

<style>
/* a.filepond--credits {
    display: none;
}
*/
</style>
