import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/anike/OneDrive/Desktop/dashboardboilerplate/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}