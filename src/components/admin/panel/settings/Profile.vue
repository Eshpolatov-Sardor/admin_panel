<script setup lang="ts">
import { ref } from 'vue'
import SalesChart from './SalesChart.vue'
import EarningsChart from './EarningsChart.vue'
import SalesPieChart from './SalesPieChart.vue'
import TodoList from './TodoList.vue'

const istodolist = ref(false)
let propfilename: any = null
const storedTodos = localStorage.getItem('todos')
if (storedTodos) {
  propfilename = JSON.parse(storedTodos)
}

function editimg() {
  istodolist.value = true
}
</script>
<template>
  <div class="bg-white p-6 shadow-lg rounded-lg flex items-center">
    <img
      class="w-24 h-24 rounded-full object-cover ml-5"
      src="https://via.placeholder.com/100"
      alt="User Profile"
    />

    <div class="ml-6 flex-1 p-5">
      <div class="flex items-center">
        <h2 class="text-2xl font-bold text-gray-900">
          {{ propfilename[0].firstName }} {{ propfilename[0].lastName }}
        </h2>
        <div class="ml-4 flex items-center">
          <div class="flex space-x-1 text-red-500">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star text-gray-300"></i>
          </div>
        </div>
      </div>

      <div class="flex items-center mt-2">
        <span
          class="text-sm bg-gray-200 text-gray-700 py-1 px-2 rounded-full mr-2"
        >
          Student
        </span>
        <a href="#" class="text-blue-500 text-sm underline">Learn more</a>
      </div>

      <div class="flex items-center text-gray-600 mt-1">
        <i class="fas fa-trophy text-gray-500 mr-2"></i>
        <span class="text-sm">8,977 exp</span>
      </div>
    </div>

    <div class="flex space-x-4">
      <button class="text-gray-600 rounded-full">
        <i class="fas fa-edit"
          ><img
            @click="editimg"
            class="w-6"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Edit_font_awesome.svg/768px-Edit_font_awesome.svg.png"
            alt="" />
          <TodoList v-if="istodolist"
        /></i>
      </button>
      <button class="text-gray-600 pr-4 rounded-full">
        <i class="fas fa-share"
          ><img
            class="w-5"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3JvG13OvPnmTGZypughGyGzquEpyZkU3EIP-HVYTkScqaVPkSqvlRG3J_p7P_oklRJw&usqp=CAU"
            alt=""
        /></i>
      </button>
    </div>
  </div>
  <div class="bg-gray-900 text-white min-h-screen p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">Good Morning 👋</h1>
      <div class="flex items-center space-x-2">
        <label for="timePeriod">Monthly</label>
        <select id="timePeriod" class="bg-gray-800 p-2 rounded">
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Yearly</option>
        </select>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-gray-800 p-4 rounded-lg">
        <h2 class="text-lg font-semibold mb-4">Sales</h2>
        <sales-chart />
      </div>
      <div class="bg-gray-800 p-4 rounded-lg">
        <h2 class="text-lg font-semibold mb-4">Earning</h2>
        <div class="text-4xl font-bold">$9125.33</div>
        <earnings-chart />
      </div>

      <div class="bg-gray-800 p-4 rounded-lg">
        <div class="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile Picture"
            class="w-16 h-16 rounded-full"
          />
          <div>
            <h3 class="text-lg font-bold">
              {{ propfilename[0].firstName }} {{ propfilename[0].lastName }}
            </h3>
            <p>Front-End Developer</p>
          </div>
        </div>

        <div class="mt-6">
          <h4 class="font-semibold">Activity</h4>
          <ul class="mt-2 space-y-2">
            <li class="flex justify-between">
              <span>Earning Withdrawal</span> <span>$125</span>
            </li>
            <li class="flex justify-between">
              <span>Website Taxes</span> <span>$95</span>
            </li>
          </ul>
        </div>

        <div class="mt-6">
          <button class="bg-purple-600 text-white px-4 py-2 rounded-lg">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div class="bg-gray-800 p-4 rounded-lg">
        <h2 class="text-lg font-semibold mb-4">Sales</h2>
        <sales-pie-chart />
      </div>

      <div class="bg-gray-800 p-4 rounded-lg">
        <h2 class="text-lg font-semibold mb-4">Top Selling Product</h2>
        <ul class="space-y-2">
          <li class="flex justify-between">
            <span>Amazon Kindle 4th Gen</span> <span>$1900 (351 Sold)</span>
          </li>
          <li class="flex justify-between">
            <span>Iphone 11 Pro</span> <span>$1300 (121 Sold)</span>
          </li>
          <li class="flex justify-between">
            <span>Windows 11</span> <span>$180 (195 Sold)</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
