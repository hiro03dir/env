declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
interface ImportMeta {
  glob: (pattern: string) => Record<string, () => Promise<any>>;
}
