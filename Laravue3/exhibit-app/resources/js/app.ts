import '../css/app.css';
import { createApp,h } from 'vue'
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers"

// import { createApp, h } from '../components/App.vue'

createInertiaApp({
  resolve: (name) =>
      resolvePageComponent(
          `../components/${name}.vue`,
          import.meta.glob("../components/**/*.vue")
      ),
  setup({ el, app, props, plugin }) {
      createApp({ render: () => h(app, props) })
          .use(plugin)
          .mount(el);
  },
});
