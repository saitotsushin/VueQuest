<script setup lang="ts">
import { reactive,ref } from 'vue';
import Status from '../components/Status.vue';
import Monster from '../components/Monster.vue';
import CommandMenu from '../components/CommandMenu.vue';
import MessageBox from '../components/MessageBox.vue';

const NowNumber = ref(1);
const IsStart = ref(false);
const IsCountDown = ref(false);
const IsRetry = ref(false);
const IsFin = ref(false);
const IsTimeOut = ref(false);
const ClearTime = ref(0);

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
const EnemyMemberList = reactive<Item[]>([
  {
    index: 1,
    Name: "てきA",
    Status: {
      Enemy: true,
      HP: 1,
      MP: 1,
      Level: 1,
      AttackPower: 1,
    },
    Effect: {
      IsDamaged: false,
      IsDead: false     
    },
    MonsterId: 1
  },
  {
    index: 2,
    Name: "てきB",
    Status: {
      Enemy: true,
      HP: 2,
      MP: 2,
      Level: 1,
      AttackPower: 2,
    },
    Effect: {
      IsDamaged: false,
      IsDead: false          
    },    
    MonsterId: 2
  },
  {
    index: 3,
    Name: "てきC",
    Status: {
      Enemy: true,
      HP: 4,
      MP: 4,
      Level: 1,
      AttackPower: 3,
    },
    Effect: {
      IsDamaged: false,
      IsDead: false          
    },    
    MonsterId: 3
  }
]);
const MyMemberList = reactive<Item[]>([
  {
    index: 1,
    Name: "なかまA",
    Status: {
      Enemy: false,
      HP: 1,
      MP: 1,
      Level: 1,
      AttackPower: 1,
    },
    Effect: {
      IsDamaged: false,
      IsDead: false         
    },    
    MonsterId: 1
  },
  {
    index: 2,
    Name: "なかまB",
    Status: {
      Enemy: false,
      HP: 2,
      MP: 2,
      Level: 1,
      AttackPower: 2,
    },
    Effect: {
      IsDamaged: false,
      IsDead: false    
    },    
    MonsterId: 2
  },
  {
    index: 3,
    Name: "なかまC",
    Status: {
      Enemy: true,
      HP: 4,
      MP: 4,
      Level: 1,
      AttackPower: 3,
    },
    Effect: {
      IsDamaged: false,
      IsDead: false      
    },
    MonsterId: 3
  }
]);
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
    ActedName: "hoge",
    Power: 1,
    IsAttacked: false,
    IsSkill: false,
    AffectedName: "hoge",
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
