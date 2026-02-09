<template>
  <main style="text-align: center;">
    <h1 style="color: #42b983;" v-if="isVisible">{{ name }}</h1>
    <button @click="changeName" class="btn">Change Name</button>
    <button @click="toggleVisibility" class="btn">Show/Hide</button>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const name = ref("Vue.js Application")
const isVisible = ref(true)

function changeName() {
  name.value = "Vue.js is a JavaScript framework"
}

function toggleVisibility() {
  isVisible.value = !isVisible.value
}
</script>

<style scoped>
.btn {
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #42b983;
  color: #fff;
  cursor: pointer;
}
</style>
