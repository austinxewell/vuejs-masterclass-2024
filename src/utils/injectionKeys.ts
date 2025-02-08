import type { InjectionKey, Ref } from 'vue'

export interface MenuInjectionsOptions {
  menuOpen: Ref<boolean>
  toggleMenu: () => void
}

export const menuKey = Symbol() as InjectionKey<MenuInjectionsOptions>
