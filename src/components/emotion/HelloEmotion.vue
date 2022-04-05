<script setup lang="ts">
import { css } from "@emotion/css";

const card = css({
  color: "#2c3e50",
  background: "#eee",
  width: 300,
  margin: "auto",
  padding: 20,
  borderRadius: 20,
  fulano: "asdasd",
  wrror: "",
  "p": {
    fontStyle: "italic",
    "a": {
      color: "seagreen",
      fontWeight: 800,
    },
  },
});
</script>

<template>
<div :class="card">
    <h1>Card</h1>
    <p>Card Content with a <a>Link</a></p>
  </div>

</template>

<style scoped>

</style>
