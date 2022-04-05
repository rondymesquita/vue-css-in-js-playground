<script setup lang="ts">
import {inject} from 'vue'
import HelloEmotion from "./components/emotion/HelloEmotion.vue";
import HelloStitches from "./components/stitches/HelloStitches.vue";

const theme = inject('S_THEME') as any

</script>

<template>
  <div :class="theme.className">
    <!-- <HelloEmotion/> -->
    <HelloStitches/>
  </div>
</template>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #262d3c;
  margin-top: 60px;
}
</style>
