import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "C:/Users/anike/OneDrive/Desktop/dashboardboilerplate/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}