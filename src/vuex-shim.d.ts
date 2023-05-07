import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    count: number
  }

  interface Item {
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
  interface MemberList {
    myArray: Item[]
  }

  interface ComponentCustomProperties {
    // $store: Store<State>,
    $store: Store<MemberList>
  }
}