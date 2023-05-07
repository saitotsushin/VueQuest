<script setup lang="ts">
interface ToDo {
  ActedName: string,
  Power: number,
  IsAttacked: boolean,
  IsSkill: boolean,
  AffectedName: string,
  IsShow:boolean
}

const props = defineProps<{
  ToDoMess: ToDo
}>()

</script>

<template>
  <div class="MessageBox" :class="{ isShow: ToDoMess.IsShow}">
    {{ToDoMess.ActedName}}のこうげき。{{ ToDoMess.AffectedName }}に{{ ToDoMess.Power }}のダメージ！
  </div>
</template>

<style scoped>
.MessageBox{
  border: 2px solid #FFF;
  color: #FFF;
  padding: 1rem;
  display: none;
}
.isShow{
  display: block;
}
</style>
