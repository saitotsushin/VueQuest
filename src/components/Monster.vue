<script setup lang="ts">
import { defineEmits } from 'vue'

interface Item {
  index: number,
  Status: {
    Name: string,
  },
  Effect: {
    IsDamaged: boolean,
    IsDead: boolean
  },  
  MonsterId: number
}

const props = defineProps < {
  MemberList: Item[] 
}>()

const emit = defineEmits([
  'touch-panel'
]);

</script>

<template>
  <div class="MonsterList">
    <div v-for="item in props.MemberList" class="Monster">
      <div 
        :class="{ 
          IsDamaged: item.Effect.IsDamaged,
          IsDead: item.Effect.IsDead,
        }">
        <img :src="`./images/Monsters/${item.MonsterId}.png`" :alt="`${item.Status.Name}`">
      </div>
    </div>
  </div>
</template>

<style scoped>
.MonsterList{
  display: flex;
}
.Monster{
  position: relative;
  width: calc(100% / 3);
  padding: 1rem;
}
.Monster img{
  width: 100%;
}
.Name{
  color: #FFF;
}
.IsDamaged{
  animation: Damaged 0.2s linear infinite;
}
.IsDead{
  opacity: 0;
}
@keyframes Damaged {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
