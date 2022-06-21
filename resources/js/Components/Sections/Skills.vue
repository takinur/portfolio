<template>
    <section class="md:-mt-56 -mt-48">
        <div
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-delay="50"
            data-aos-duration="600"
            Fdata-aos-easing="ease-in-out"
            class="container px-6 py-10 mx-auto md:mt-11 bg-gray-50 rounded-2xl w-full md:w-4/5 pb-9 dark:bg-gray-800"
        >
            <h1 class="text-dark text-3xl text-center dark:text-gray-100">
                PROFEESIONAL SKILLS
            </h1>
            <!-- CARD BODY-->
            <div
                class="grid place-items-center text-dark dark:text-slate-50 overflow-hidden"
            >
               <skills-sphere-vue />
            </div>
            <!--End Card Body -->
        </div>
    </section>
</template>

<script>
import { defineComponent } from "vue";
import SkillsSphereVue from "../SkillsSphere.vue";


export default defineComponent({
    name: "SkillsSection",
    components: {
        SkillsSphereVue,
    },
});
</script>
