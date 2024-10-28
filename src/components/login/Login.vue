<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './Loginjs.js'

interface Type {
  (e: 'handleSubmit', index: string): void
}
interface TodoItem {
  firstName: string
  lastName: string
}

const emit = defineEmits<Type>()
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const errorMessage = ref('')
const successMessage = ref('')
const Todo = ref<TodoItem[]>([])

async function handleSubmit() {
  errorMessage.value = ''
  successMessage.value = ''

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value,
    )
    const user = userCredential.user
    successMessage.value = 'Login successful!'
    const newVal = {
      firstName: firstName.value as string,
      lastName: lastName.value as string,
      email: lastName.value as string,
      password: lastName.value as string,
    }
    Todo.value.push(newVal)
    emit('handleSubmit', user.uid)
  } catch (error: any) {
    errorMessage.value = error.message
    console.error(error)
  }

  localStorage.setItem('todos', JSON.stringify(Todo.value))
  firstName.value = ''
  lastName.value = ''
  email.value = ''
  password.value = ''
}
</script>
<template>
  <div class="body">
    <form @submit.prevent="handleSubmit" class="login-form">
      <h2>Sign In</h2>
      <div class="input-box">
        <input
          v-model="firstName"
          type="text"
          placeholder="lastname"
          required
        />
      </div>
      <div class="input-box">
        <input
          v-model="lastName"
          type="text"
          placeholder="firstname"
          required
        />
      </div>
      <div class="input-box">
        <input v-model="email" type="text" placeholder="email" required />
      </div>
      <div class="input-box">
        <input
          v-model="password"
          type="password"
          placeholder="password"
          required
        />
      </div>
      <div class="input-box">
        <input type="submit" value="login" class="login-btn" />
      </div>
    </form>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', 'sans-serif';
}
.body {
  background-image: url('https://img.freepik.com/free-vector/young-woman-wearing-coat-hat-scarf-riding-bicycle-park-fall-foliage-from-wind-is-blowing-autumn-season-cartoon-character-vector-illustration_1150-52716.jpg?t=st=1722097189~exp=1722100789~hmac=b90c8a9ab48e8b7c25b03af18dfb962c070767af0a1cc5d9dcf6145d4364b9cb&w=740');
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-form {
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(15px);
  border: 1px solid #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  border-right: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(255, 255, 255, 0.1);
  padding: 2rem 4rem;
  width: 40rem;
}
.login-form h2 {
  color: #8f2c24;
  font-size: 3.8rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
  text-align: center;
}
.input-box input {
  background-color: #fff;
  border: none;
  border-radius: 5px;
  color: #8f2c24;
  font-size: 1.6rem;
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  outline: none;
  width: 100%;
}
.login-form .input-box ::placeholder {
  color: #8f2c24;
}
.input-box .login-btn {
  background: #8f2c24;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 1px;
}
.input-box .login-btn:hover {
  background: #b7544c;
}
/* Media Queries  */
@media (width <= 475px) {
  html {
    font-size: 56.25%;
  }
  .input-box input {
    font-size: 1.8rem;
  }
}
@media (width <= 380px) {
  html {
    font-size: 50%;
  }
  .input-box input {
    font-size: 2rem;
  }
}
@media (width <= 360px) {
  html {
    font-size: 43.75%;
  }
  .input-box input {
    font-size: 2rem;
  }
}
</style>
