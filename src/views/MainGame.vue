<script setup lang="ts">
// import { CSSProperties } from 'vue';
import Game from '../components/Game.vue';



</script>
<!-- <script lang="ts">
import { defineComponent } from 'vue';
import { resolve } from 'path';

// export default defineComponent({
//   setup() {
//     const fontUrl = resolve('/assets/fonts/my-font.woff', import.meta.url);
//     return {
//       fontUrl
//     };
//   }
// });
import fontUrl from './fonts/my-font.woff'
</script> -->

<template>
  <Game/>
</template>

<style>
@font-face {
  font-family: 'MyFont';
  src: url('./assets/fonts/my-font.woff2') format('woff2'),
       url('./assets/fonts/my-font.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
body {
  font-family: 'MyFont', sans-serif;
}
</style>