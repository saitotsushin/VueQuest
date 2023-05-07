<script setup lang="ts">
import { reactive,ref } from 'vue';
import Status from '../components/Status.vue';
import Monster from '../components/Monster.vue';
import CommandMenu from '../components/CommandMenu.vue';
import MessageBox from '../components/MessageBox.vue';
import jsonData from "../assets/MonsterList.json";

interface Item {
  index: number,
  Name: string,
  Status: {
    Enemy: boolean,
    HP: number,
    MP: number,
    Level: number,
    AttackPower: number
  },
  Effect: {
    IsDamaged: boolean,
    IsDead: boolean         
  },
  MonsterId: number
}

const MyMemberList = reactive<Item[]>([]);

const EnemyMemberList = reactive<Item[]>([]);

interface ToDo {
  ActedName: string,
  Power: number,
  IsAttacked: boolean,
  IsSkill: boolean,
  AffectedName: string,
  IsShow:boolean
}
const ToDoMess = reactive<ToDo>(
  {
    ActedName: "",
    Power: 1,
    IsAttacked: false,
    IsSkill: false,
    AffectedName: "",
    IsShow: false
  }
);
const Command = (_index:number,_select:number) => {
  if (_index == 0) {
    Attack(_select);
  }
  if (_index == 1) {
    Skill(_select);
  }
}
const Attack = (_index: number) => {
  let ActedMonster = MyMemberList[0];
  let power = ActedMonster.Status.AttackPower;
  let DamagedMonster = EnemyMemberList[_index];
  let HP = DamagedMonster.Status.HP;
  let NokoriHP = HP - power;
  let IsDead = false;
  if (NokoriHP <= 0) {
    DamagedMonster.Status.HP = 0;
    IsDead = true;
  } else {
    DamagedMonster.Status.HP = NokoriHP;
  }
  DamagedMonster.Effect.IsDamaged = true;

  let damageTimer = setTimeout(() => {
    DamagedMonster.Effect.IsDamaged = false;
    if (IsDead) {
      DamagedMonster.Effect.IsDead = true;      
    }
  }, 1000);

  ToDoMess.ActedName = ActedMonster.Name;
  ToDoMess.Power = power;
  ToDoMess.AffectedName = DamagedMonster.Name;
  ToDoMess.IsShow = true;
}
const Skill = (_index: number) => {
  let ActedMonster = MyMemberList[0];
  let power = ActedMonster.Status.AttackPower;
  for (var i = 0; i < EnemyMemberList.length; i++){
    Attack(i);
  }
}
let MyMonsterList = [0, 0, 2];
let EnemyList = [0, 1, 2];
const CreateItem = (_id:number,_index:number) => {
  let MonsterData = jsonData.list[_id];
  const newItem: Item = { 
    index: _index,
    Name: MonsterData.Name,
    Status: {
      Enemy: false,
      HP: MonsterData.Status.HP,
      MP: MonsterData.Status.MP,
      Level: MonsterData.Status.Level,
      AttackPower: MonsterData.Status.AttackPower
    },
    Effect: {
      IsDamaged: false,
      IsDead: false         
    },
    MonsterId: MonsterData.id
  };
  return newItem;
}
const LoadMonsterData = () => {
  MyMonsterList.forEach(
    (id, index) => { 
      const newItem = CreateItem(id,index);
      newItem.Status.Enemy = false;
      MyMemberList.push(newItem);
     }
  );
  EnemyList.forEach(
    (id,index) => { 
      const newItem = CreateItem(id,index);
      EnemyMemberList.push(newItem);
     }
  );
}
LoadMonsterData();
</script>
<template>
  <div>
    <div class="MainGame">
      <Status
        :MemberList="EnemyMemberList"/>
      <Monster
        :MemberList="EnemyMemberList"/>
      <div class="Command">
        <CommandMenu @touch-command="Command" :ToDoMess="ToDoMess"/>
        <MessageBox :ToDoMess="ToDoMess"/>
      </div>
    </div>
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
