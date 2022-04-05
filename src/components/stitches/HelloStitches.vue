<script setup lang="ts">
import { inject } from "vue";
import {card} from "./styles"
import { theme2, lightTheme } from "./theme";


const changeTheme = inject('S_THEME_CHANGE') as any
const theme = inject('S_THEME') as any

</script>


<template>
<div :class="card">
	<h1>Card</h1>
	{{JSON.stringify(theme)}}
	<p>Card Content with a <a>Link</a></p>
	<a class="button" @click="changeTheme('light-theme')">light</a>
	<a class="button" @click="changeTheme('dark-theme')">dark</a>
</div>

</template>

<style scoped>

</style>
