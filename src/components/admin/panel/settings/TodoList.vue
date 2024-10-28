<template>
  <div
    v-if="closeedit"
    class="flex items-center justify-center bg-cyan-300 absolute -ml-[950px] w-[750px] p-10"
  >
    <div class="bg-white p-6 rounded-lg relative">
      <div class="my-3">
        <div class="flex flex-col items-center my-3">
          <input
            type="file"
            ref="fileInput"
            @change="handleImageUpload"
            class="hidden"
          />
          <img
            v-if="imageUrl"
            :src="imageUrl"
            alt="Uploaded"
            class="w-32 h-32 object-cover rounded-[50%] shadow"
          />
          <button
            @click="triggerFileUpload"
            class="bg-orange-400 text-white px-3 py-1 rounded mb-2 mt-2"
          >
            Image
          </button>
        </div>
        <input
          v-model="lastName"
          placeholder="Last Name"
          class="w-full px-2 py-1 text-gray-700 focus:outline-none border border-black mt-5"
        />
        <input
          v-model="firstName"
          placeholder="First Name"
          class="w-full px-2 py-1 text-gray-700 focus:outline-none border border-black mt-5"
        />
        <input
          v-model="email"
          placeholder="Email"
          class="w-full px-2 py-1 text-gray-700 focus:outline-none border border-black mt-5"
        />
        <input
          v-model="password"
          placeholder="Password"
          type="password"
          class="w-full px-2 py-1 text-gray-700 focus:outline-none border border-black mt-5"
        />
        <button
          @click="updateTodoData"
          class="ml-2 bg-orange-400 text-white px-3 py-1 rounded mt-5"
        >
          Add
        </button>
      </div>
      <div class="text-center text-gray-500 mt-4">
        {{ currentDate }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const lastName = ref('')
const firstName = ref('')
const email = ref('')
const password = ref('')
const closeedit = ref(true)
const imageUrl = ref<string | null>(null)
const currentDate = new Date().toLocaleDateString()
const fileInput = ref<HTMLInputElement | null>(null)

onMounted(() => {
  loadTodoData()
})

function loadTodoData() {
  const storedTodos = localStorage.getItem('todos')
  if (storedTodos) {
    const todosData = JSON.parse(storedTodos)
    lastName.value = todosData.lastName || ''
    firstName.value = todosData.firstName || ''
    email.value = todosData.email || ''
    password.value = todosData.password || ''
    imageUrl.value = todosData.imageUrl || null
  }
}

function updateTodoData() {
  const todosData = {
    lastName: lastName.value,
    firstName: firstName.value,
    email: email.value,
    password: password.value,
    imageUrl: imageUrl.value,
  }
  closeedit.value = false
  localStorage.setItem('todos', JSON.stringify(todosData))
  alert('Data updated successfully!')
}

function handleImageUpload(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    imageUrl.value = URL.createObjectURL(file)
    updateTodoData()
  }
}

function triggerFileUpload() {
  fileInput.value?.click()
}
</script>

<style scoped>
.bg-cyan-300 {
  background-color: #00e7ff;
}
</style>
