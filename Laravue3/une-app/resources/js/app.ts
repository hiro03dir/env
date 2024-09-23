import '../css/app.css';
import { createApp,h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers"
import type { DefineComponent } from "vue";

// import HelloButton from 'common-components';
// import 'common-components/dist/style.css';

createInertiaApp({
    resolve: (name) => resolvePageComponent(
            `../components/${name}.vue`,
            import.meta.glob<DefineComponent>("../components/**/*.vue")
    ),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el);
    },
});
