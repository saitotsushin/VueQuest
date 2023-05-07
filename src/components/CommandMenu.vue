<script setup lang="ts">
// import { useStore } from 'vuex'
import { ref } from 'vue'
const SelectedCommand = ref(0)

const emit = defineEmits([
  'touch-command'
]);
const SelectCommand = (_index:number) => {
  SelectedCommand.value = _index;
}
const attack = (_index:number) => {
  emit('touch-command',_index);
}
</script>

<template>
  <div class="CommandList">
    <div class="" @click="SelectCommand(1)">たたかう</div>
    <div class="">にげる</div>
  </div>
  <div class="SkillList" v-if="SelectedCommand">
    <div class="" @click="attack(0)">1に攻撃</div>
    <div class="" @click="attack(1)">2に攻撃</div>
    <div class="" @click="attack(2)">3に攻撃</div>
  </div>

</template>

<style scoped>
.CommandList,
.SkillList{
  border: 2px solid #FFF;
  color: #FFF;
  padding: 1rem;
  margin-right: 1rem;
}
</style>
