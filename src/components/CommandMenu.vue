<script setup lang="ts">
// import { useStore } from 'vuex'
import { computed } from 'vue'
import { useStore } from '../store'

const store = useStore()

// const count = store.state.count // typed as number

const count = computed(() => store.state.count)
</script>

<template>
  <div class="CommandList">
    <div>{{ count }}</div>
  </div>
</template>

<style scoped>
.CommandList{
  border: 2px solid #FFF;
  color: #FFF;
  padding: 1rem;
  margin-right: 1rem;
}
</style>
