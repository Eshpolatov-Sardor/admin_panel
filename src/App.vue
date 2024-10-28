<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import Login from './components/login/Login.vue'
import Admin from './components/admin/Admin.vue'

const Adminshow = ref(false)
const handleSubmitshow = ref(true)

const storedTodos = ref(localStorage.getItem('todos') || "")

watchEffect(() => {
  if (storedTodos.value.trim() !== "") {
    Adminshow.value = true
    handleSubmitshow.value = false
  } else {
    Adminshow.value = false
    handleSubmitshow.value = true
  }
})

function handleSubmit() {
  if (storedTodos.value.trim() !== "") {
    Adminshow.value = true
    handleSubmitshow.value = false
  }
}
</script>

<template>
  <Login v-if="handleSubmitshow" @handleSubmit="handleSubmit" />
  <Admin v-if="Adminshow" />
</template>

<style scoped></style>
