// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  count: number
}

export interface Item {
  index: number,
  Status: {
    Name: string,
    Enemy: boolean,
    HP: number,
    MP: number,
    Level: number
  },
  MonsterId: number
}

export const key: InjectionKey<Store<Item>> = Symbol()

export const store = createStore({
  state: {
    items: [
      {id:1,name:'ho'},
      {id:2,name:'mm'},
    ]
  },
  mutations: {
    increment () {
      // state.count++
    },
    attack(state) {

    }
  }
})

// define your own `useStore` composition function
export function useStore () {
  return baseUseStore(key)
}