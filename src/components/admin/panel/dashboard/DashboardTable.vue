<script setup lang="ts">
import { ref } from 'vue'
interface Props {
  name: string
  organization: string
  deadline: string
  leader: Leader
  budget: string
  payment: string
  status: string
}
interface Leader {
  name: string
  team: string
  avatar: string
}
const projects = ref<Props[]>([
  {
    name: 'New Dashboard',
    organization: 'Google',
    deadline: '17th Oct, 15',
    leader: {
      name: 'Myrtle Erickson',
      team: 'UK Design Team',
      avatar: 'https://via.placeholder.com/32',
    },
    budget: '$4,670',
    payment: 'Paid',
    status: 'In progress',
  },
  {
    name: 'New Dashboard',
    organization: 'Google',
    deadline: '17th Oct, 15',
    leader: {
      name: 'Myrtle Erickson',
      team: 'UK Design Team',
      avatar: 'https://via.placeholder.com/32',
    },
    budget: '$4,670',
    payment: 'Paid',
    status: 'Blocked',
  },
  {
    name: 'New Dashboard',
    organization: 'Google',
    deadline: '17th Oct, 15',
    leader: {
      name: 'Myrtle Erickson',
      team: 'UK Design Team',
      avatar: 'https://via.placeholder.com/32',
    },
    budget: '$4,670',
    payment: 'Paid',
    status: 'Early stages',
  },
])

const statusClass = (status: string) => {
  switch (status) {
    case 'In progress':
      return 'text-yellow-500'
    case 'Blocked':
      return 'text-red-500'
    case 'Early stages':
      return 'text-blue-500'
    case 'Overdue':
      return 'text-red-500'
    default:
      return 'text-gray-400'
  }
}
</script>
<template>
  <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
    <table class="min-w-full table-auto">
      <thead>
        <tr class="bg-gray-800 text-gray-400">
          <th class="px-4 py-2 text-left">Project</th>
          <th class="px-4 py-2 text-left">Deadline</th>
          <th class="px-4 py-2 text-left">Leader + Team</th>
          <th class="px-4 py-2 text-left">Budget</th>
          <th class="px-4 py-2 text-left">Status</th>
          <th class="px-4 py-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(project, index) in projects"
          :key="index"
          class="bg-gray-700 border-b border-gray-600"
        >
          <td class="px-4 py-2">
            <p class="text-white">{{ project.name }}</p>
            <p class="text-gray-400">{{ project.organization }}</p>
          </td>
          <td class="px-4 py-2">
            <span class="text-white">{{ project.deadline }}</span>
            <span class="text-red-500">{{
              project.status === 'Overdue' ? 'Overdue' : ''
            }}</span>
          </td>
          <td class="px-4 py-2 flex items-center">
            <img
              :src="project.leader.avatar"
              class="w-8 h-8 rounded-full mr-3"
              alt="Leader"
            />
            <div>
              <p class="text-white">{{ project.leader.name }}</p>
              <p class="text-gray-400">{{ project.leader.team }}</p>
            </div>
          </td>
          <td class="px-4 py-2 text-white">
            <span>{{ project.budget }}</span>
            <p class="text-gray-400">{{ project.payment }}</p>
          </td>
          <td class="px-4 py-2">
            <span :class="statusClass(project.status)">{{
              project.status
            }}</span>
          </td>
          <td class="px-4 py-2">
            <div class="relative">
              <button class="bg-gray-800 text-white px-3 py-2 rounded">
                Actions
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
