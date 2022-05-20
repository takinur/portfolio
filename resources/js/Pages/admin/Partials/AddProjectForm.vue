<template>
    <div class="flex items-center mt-5">
        <jet-button @click="showModal"> Add New Project </jet-button>

        <jet-action-message :on="form.recentlySuccessful" class="ml-3">
            Done.
        </jet-action-message>
    </div>

    <!-- Add Project Modal -->
    <jet-dialog-modal :show="addProjectModal" @close="closeModal">
        <template #title> Add New Project </template>
        <template #content>
            <form @submit.prevent="addNewProject" enctype="multipart/form-data">
                <div class="mt-4">
                    <div class="">
                        <jet-label for="title" value="Title" />
                        <jet-input
                            id="title"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.title"
                            autocomplete="title"
                        />
                        <jet-input-error
                            :message="form.errors.title"
                            class="mt-2 h-1"
                        />
                    </div>

                    <div class="mt-4">
                        <jet-label for="demo" value="Live Link" />
                        <jet-input
                            id="demo"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.demo"
                            required
                        />
                        <jet-input-error
                            :message="form.errors.demo"
                            class="mt-2 h-1"
                        />
                    </div>
                    <div class="mt-4">
                        <jet-label for="source" value="Github" />
                        <jet-input
                            id="source"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.source"
                            required
                        />
                        <jet-input-error
                            :message="form.errors.source"
                            class="mt-2 h-1"
                        />
                    </div>
                    <div>
                        <div class="w-full flex flex-col mt-4">
                            <label
                                class="font-medium text-sm text-gray-700 leading-none"
                                >Description</label
                            >
                            <textarea
                                type="text"
                                v-model="form.description"
                                required
                                class="h-20 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                            ></textarea>
                            <jet-input-error
                                :message="form.errors.description"
                                class="mt-2 h-1"
                            />
                        </div>
                    </div>
                    <div class="w-full mt-4">
                        <file-pond
                            v-on:processfile="handleProcessFile"
                            v-on:init="handleFilePondInit"
                            v-on:updatefiles="handleFilePondUpdateFile"
                        />
                    </div>
                </div>
                <div class="p-3 mt-2 text-center space-x-4 md:block">
                    <button
                        @click="closeModal"
                        class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        class="mb-2 md:mb-0 bg-white border border-[#7510F7] px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-[#7510F7] rounded-full hover:shadow-lg hover:bg-[#7510F7] hover:text-white"
                    >
                        Save
                    </button>
                </div>
            </form>
        </template>
    </jet-dialog-modal>
</template>

<script>
import { defineComponent } from "vue";
import JetButton from "@/Jetstream/Button.vue";
import JetDialogModal from "@/Jetstream/DialogModal.vue";
import JetInput from "@/Jetstream/Input.vue";
import JetInputError from "@/Jetstream/InputError.vue";
import JetSecondaryButton from "@/Jetstream/SecondaryButton.vue";
import JetLabel from "@/Jetstream/Label.vue";
import JetActionMessage from "@/Jetstream/ActionMessage.vue";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-vue3";

import vueFilePond, { setOptions } from "vue-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import { objectExpression } from "@babel/types";

const csrf = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute("content");

const FilePond = vueFilePond(FilePondPluginImagePreview);
setOptions({
    server: {
        url: "/image-upload",
        headers: {
            "X-CSRF-TOKEN": csrf,
        },
        process: {
            onload: (response) => {
                response = JSON.parse(response);
                return response;
            },
        },
    },
    name: "projectImage",
    className: "imageUpload",
    allowMultiple: true,
    allowReorder: true,
    credits: "",
});

export default defineComponent({
    props: {
         errors: Object,
    },

    components: {
        JetButton,
        JetDialogModal,
        JetInput,
        JetInputError,
        JetSecondaryButton,
        JetLabel,
        JetActionMessage,
        FilePond,
    },

    data() {
        return {
            addProjectModal: false,
            proImages: [],
            form: this.$inertia.form({
                title: "",
                demo: "",
                source: "",
                description: "",
                images: [],
            }),
        };
    },
    setup() {
        //
    },

    methods: {
        showModal() {
            this.addProjectModal = true;

            // setTimeout(() => this.$refs.password.focus(), 250);
        },

        closeModal() {
            this.addProjectModal = false;

            this.form.reset();
        },
        handleFilePondInit: function () {
            console.log("FilePond has initialized");
        },
        handleProcessFile: function (error, file) {
            //Add each images to Arrary
            this.form.images.push(file.serverId);
            console.log("Procceed files");
        },
        handleFilePondUpdateFile(files) {
            // this.proImages = files.map((files) => files.file);
        },

        addNewProject() {
            //Assign all fields to formData to send via post
            // const formData = new FormData();


            // formData.append("title", this.form.title);
            // // formData.append("demo", this.formData.email);
            // // formData.append("source", this.formData.email);

            // //Set all files to formData
            // for (var i = 0; i < this.proImages.length; i++) {
            //     let file = this.proImages[i];
            //     formData.append("images[" + i + "]", file);
            //     // this.form.images.push("images[" + i + "]", file);
            // }
            //  this.$inertia.post(route("projects.store"), formData)
            // Inertia.post(route("projects.store"), this.form);

            // console.log(this.form);
            this.form.post(route("projects.store"), {
                preserveScroll: true,
                onSuccess: () => this.closeModal(),
                // onError: () => this.$refs.password.focus(),
                onFinish: () => this.form.reset(),
            });
        },
    },
});
</script>
