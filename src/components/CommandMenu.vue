<script setup lang="ts">
const emit = defineEmits([
  'touch-panel'
]);

</script>

<template>
  <div class="CommandList">
    <div>名前</div>
    <div @click="$emit('たたかう')">＞たたかう</div>
    <div @click="$emit('にげる')">　にげる</div>
  </div>
</template>

<style scoped>
.CommandList{
  border: 2px solid #FFF;
  color: #FFF;
}
</style>
