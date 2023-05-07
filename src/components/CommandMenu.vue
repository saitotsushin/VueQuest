<script setup lang="ts">
// import { useStore } from 'vuex'
import { ref } from 'vue'

const SelectedCommand = ref(0)
// const ShowCommand = ref(false)

const emit = defineEmits([
  'touch-command'
]);
const SelectCommand = (_index:number) => {
  SelectedCommand.value = _index;
  // ShowCommand.value = true;
  // props.ToDoMess.IsShow = true;
}
const Command = (_index:number,_select:number) => {
  emit('touch-command',_index,_select);
}
interface ToDo {
  IsShow:boolean
}
const props = defineProps<{
  ToDoMess: ToDo
}>()
</script>

<template>
  <div class="CommandList">
    <div class="" @click="SelectCommand(1)">たたかう</div>
    <div class="" @click="SelectCommand(2)">まほう</div>
    <div class="">にげる</div>
  </div>
  <div :class="{ isShow: !ToDoMess.IsShow }" class="SecondCommand">
    <div class="AttackList" v-if="SelectedCommand == 1">
      <div class="" @click="Command(0,0)">Aにこうげき</div>
      <div class="" @click="Command(0,1)">Bにこうげき</div>
      <div class="" @click="Command(0,2)">Cにこうげき</div>
    </div>
    <div class="SkillList" v-if="SelectedCommand == 2">
      <div class="" @click="Command(1,1)">1-3ぜんいんに</div>
    </div>
  </div>
</template>

<style scoped>
.SecondCommand{
  display: none;
}
.isShow{
  display: block;
}
.CommandList,
.AttackList,
.SkillList{
  border: 2px solid #FFF;
  color: #FFF;
  padding: 1rem;
  margin-right: 1rem;
}
</style>
