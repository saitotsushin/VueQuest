<script setup lang="ts">
import { useStore } from '../store'

const store = useStore()
const emit = defineEmits([
  'touch-panel'
]);
const increment = () => {
    store.commit('increment')
    console.log(store.state.count)
  }
</script>

<template>
  <div class="MessageBox" @click="increment">
    あああああああああああああああああ
  </div>
</template>

<style scoped>
.MessageBox{
  border: 2px solid #FFF;
  color: #FFF;
  padding: 1rem;
}
</style>
