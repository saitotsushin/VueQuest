<script setup lang="ts">
import { defineEmits } from 'vue'

interface Item {
  index: number,
  Status: {
    Name: string
  }
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
    <!-- <img src="/Monsters/1.png" alt="Sample Image"> -->
    <div v-for="item in props.MemberList" class="Monster">
      <!-- <div class="Name">{{ item.MonsterId }}</div> -->
      <img :src="`/assets/Monsters/${item.MonsterId}.png`" :alt="`${item.Status.Name}`">
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

</style>
