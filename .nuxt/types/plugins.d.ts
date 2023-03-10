// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../components.plugin").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.2.3_sass@1.58.3/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.2.3_sass@1.58.3/node_modules/nuxt/dist/app/plugins/router").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+image-edge@1.0.0-27968280.9739e4d/node_modules/@nuxt/image-edge/dist/runtime/plugin").default> &
  InjectionType<typeof import("../templates.pwa.client.2c925046").default> &
  InjectionType<typeof import("../../plugins/vercel").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
