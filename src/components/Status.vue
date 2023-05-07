<script setup lang="ts">
import { defineEmits } from 'vue'

interface Item {
  index: number,
  Name: string,
  Status: {
    Enemy: boolean,
    HP: number,
    MP: number,
    Level:number
  }
}

const props = defineProps < {
  MemberList: Item[] 
}>()

const emit = defineEmits([
  'touch-panel'
]);

</script>

<template>
  <div class="StatuslList">
    <div v-for="item in props.MemberList" class="PanelItem">
      <div class="Name">{{ item.Name }}</div>
      <div class="Status">
        <div class="StatusList">
          <div class="StatusName">HP</div>
          <div class="StatusNumb">{{ item.Status.HP }}</div>
        </div>
        <div class="StatusList">
          <div class="StatusName">MP</div>
          <div class="StatusNumb">{{ item.Status.MP }}</div>
        </div>
        <div class="StatusList">
          <div class="StatusName">L</div>
          <div class="StatusNumb">{{ item.Status.Level }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.StatuslList{
  border: 2px solid #FFF;
  display: flex;
}
.PanelItem{
  color: #FFF;
  position: relative;
  width: calc(100% / 3);
  padding: 1rem;
}
.Name{
  margin-top: -1.75rem;
  margin-bottom: 0.5rem;
  background-color: #202020;
}
.StatusList{
  display: flex;
}
.StatusName{
  width:25%;
  text-align: left;
}
.StatusNumb{
  width: 75%;
  text-align: right;
}
</style>
