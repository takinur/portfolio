import "./bootstrap";
import "../css/app.css";
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/brands.scss';
import '@fortawesome/fontawesome-free/scss/regular.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';

import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Portfolio";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
});

InertiaProgress.init({ color: "#4B5563" });

//Disable DEV TOOL
// if (process.env.MIX_APP_ENV === 'production') {
//     Vue.config.devtools = false;
//     Vue.config.debug = false;
//     Vue.config.silent = true;
// }


// window.AOS = require('AOS');
// AOS.init();
