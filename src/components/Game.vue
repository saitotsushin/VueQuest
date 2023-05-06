<script setup lang="ts">
import { reactive,ref } from 'vue';
import Status from '../components/Status.vue';
import Monster from '../components/Monster.vue';
import CommandMenu from '../components/CommandMenu.vue';
import MessageBox from '../components/MessageBox.vue';
import GameTimeOut from '../components/GameTimeOut.vue';

const NowNumber = ref(1);
const IsStart = ref(false);
const IsCountDown = ref(false);
const IsRetry = ref(false);
const IsFin = ref(false);
const IsTimeOut = ref(false);
const ClearTime = ref(0);

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
const MemberList = reactive<Item[]>([
  {
    index: 1,
    Status: {
      Name: "hogehoge",
      Enemy: true,
      HP: 1,
      MP: 1,
      Level: 1
    },
    MonsterId: 1
  },
  {
    index: 2,
    Status: {
      Name: "hogehoge2",
      Enemy: true,
      HP: 2,
      MP: 2,
      Level: 1
    },
    MonsterId: 2
  },
  {
    index: 3,
    Status: {
      Name: "hogehoge3",
      Enemy: true,
      HP: 4,
      MP: 4,
      Level: 1
    },
    MonsterId: 3
  }
]);

const GameStart = () => {
  IsCountDown.value = false;
  IsStart.value = true;
  IsRetry.value = false;
  const result = [...MemberList]; // 元の配列をコピー
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // 0 〜 i までのランダムな整数
    [result[i], result[j]] = [result[j], result[i]]; // 要素を交換
  }
  // リアクティブオブジェクトを更新
  MemberList.splice(0, MemberList.length, ...result);

}
const GameRetry = () => {
  IsStart.value = false;
  IsFin.value = false;
  IsCountDown.value = true;
  IsTimeOut.value = false;
  ClearTime.value = 0;
  NowNumber.value = 1;
  IsRetry.value = true;
  CountDownStart();
}
const CountDownStart = () => {
  IsCountDown.value = true;
}
const GameClear = (_time: number) => {
  ClearTime.value = _time;
  IsRetry.value = false;
}
const TimeOut = () => {
  IsTimeOut.value = true;
  IsRetry.value = false;
}
const PanelCountUp = (_index: number) => {
  if (_index !== NowNumber.value) {
    return;
  }
  const index = MemberList.findIndex(user => user.index === _index);
  if (index !== -1) {
    const newUser = { ...MemberList[index], touched: true };
    MemberList.splice(index, 1, newUser);
    NowNumber.value++;
  }
  if (_index == 16) {
    IsFin.value = true;
  }
}
const handleClick = (data:string) => {
  console.log(`clicked with data: ${data}`);
}
</script>
<template>
  <div>
    <div class="MainGame">
      <Status
        :MemberList="MemberList"
        @touch-panel="PanelCountUp"/>
      <Monster
        :MemberList="MemberList"
        @touch-panel="PanelCountUp"/>
      <div class="Command">
        <CommandMenu @clicked="handleClick"/>
        <MessageBox/>
      </div>
    </div>
    <!-- <GameFin 
      :isFin="IsFin" 
      :clearTime="ClearTime" 
      @game-retry="GameRetry"/> -->
    <GameTimeOut 
      :isTimeOut="IsTimeOut"
      @game-retry="GameRetry"/>
  </div>
</template>

<style scoped>
.MainGame{
  width: 480px;
}
.StatuslList{
  display: flex;
}
.Command{
  display: flex;
}
</style>
