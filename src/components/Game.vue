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
  Status: {
    Name: string,
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
    Status: {
      Name: "敵１",
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
    Status: {
      Name: "敵２",
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
    Status: {
      Name: "敵３",
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
    Status: {
      Name: "仲間1",
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
    Status: {
      Name: "仲間2",
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
    Status: {
      Name: "仲間3",
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

const Attack = (_index: number) => {
  let power = MyMemberList[0].Status.AttackPower;
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
        <CommandMenu @touch-command="Attack"/>
        <MessageBox/>
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
