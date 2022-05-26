<template>
    <!-- Add Contact Modal -->
    <jet-dialog-modal :show="contactModal" @close="closeModal">
        <template #title>
            <div class="close">
                <button
                    class="absolute top-0 right-0 mt-4 mr-4"
                    @click="closeModal"
                >
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        </template>
        <template #content>
            <!--Form -->
            <template v-if="isSucceed === false">
                <!--body-->
                <div class="p-5 justify-center">
                    <h2 class="text-3xl font-bold py-2 text-center">
                        Thanks for taking the time to reach out. How can I help
                        you today?
                    </h2>
                    <div class="mt-8">
                        <div class="">
                            <jet-label for="name" value="Name" />
                            <jet-input
                                id="name"
                                type="text"
                                class="mt-1 block w-full"
                                v-model="form.name"
                                required
                                autofocus
                                autocomplete="name"
                            />
                            <jet-input-error
                                :message="form.errors.name"
                                class="mt-2 h-1"
                            />
                        </div>

                        <div class="mt-8">
                            <jet-label for="email" value="Email" />
                            <jet-input
                                id="email"
                                type="email"
                                class="mt-1 block w-full"
                                v-model="form.email"
                                required
                            />
                            <jet-input-error
                                :message="form.errors.email"
                                class="mt-2 h-1"
                            />
                        </div>
                        <div>
                            <div class="w-full flex flex-col mt-8">
                                <label
                                    class="font-medium text-sm text-gray-700 leading-none"
                                    >Message</label
                                >
                                <textarea
                                    type="text"
                                    v-model="form.message"
                                    required
                                    class="h-20 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                                ></textarea>
                                <jet-input-error
                                    :message="form.errors.message"
                                    class="mt-2 h-1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <!--footer-->
                <div class="p-3 mt-2 text-center space-x-4 md:block">
                    <button
                        @click="closeModal"
                        class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                    >
                        Cancel
                    </button>
                    <button
                        @click="saveContact"
                        class="mb-2 md:mb-0 bg-white border border-[#7510F7] px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-[#7510F7] rounded-full hover:shadow-lg hover:bg-[#7510F7] hover:text-white"
                    >
                        Submit
                    </button>
                </div>
            </template>
            <!--Success Message -->
            <template v-else>
                <div class="">
                    <div
                        class="alert flex flex-row items-center gbg-green-200 p-5 rounded border-b-2 border-green-300"
                    >
                        <div
                            class="alert-icon flex items-center gbg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full"
                        >
                            <span class="text-green-500">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    class="h-6 w-6"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </span>
                        </div>
                        <div class="alert-content ml-4">
                            <div
                                class="alert-title font-semibold text-3xl text-green-800"
                            >
                                Message Received Thank you!
                            </div>
                        </div>
                    </div>
                </div>
            </template>
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

export default defineComponent({
    props: {
        errors: Object,
        // contactModal: Boolean,
    },

    components: {
        JetButton,
        JetDialogModal,
        JetInput,
        JetInputError,
        JetSecondaryButton,
        JetLabel,
        JetActionMessage,
    },

    data() {
        return {
            contactModal: false,
            isSucceed: false,

            form: this.$inertia.form({
                name: "",
                email: "",
                message: "",
            }),
        };
    },
    methods: {
        showModal() {
            this.contactModal = true;
            // setTimeout(() => this.$refs.password.focus(), 250);
        },
        closeModal() {
            this.contactModal = false;
            this.form.reset();
        },

        saveContact() {
            this.form.post(route("saveContact"), {
                preserveScroll: true,
                onSuccess: () => this.showSuccessMessage(),
                // onError: () => this.$refs.name.focus(),
                onFinish: () => this.form.reset(),
            });
        },
        showSuccessMessage() {
            this.isSucceed = true;
            //Close Modal After Few Seconds
            setTimeout(() => this.closeModal(), 4000);
        },
    },
});
</script>
