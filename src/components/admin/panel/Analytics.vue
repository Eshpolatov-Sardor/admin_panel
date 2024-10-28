<template>
  <div class="p-6 bg-gray-900 text-white grid grid-cols-2 gap-6">
    <div class="bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Traffic Sources</h2>
      <canvas ref="pieChart"></canvas>
    </div>

    <div class="bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Conversion Rates</h2>
      <canvas ref="barChart"></canvas>
    </div>
  </div>
  <Jadval />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'
import Jadval from './analytics/Jadval.vue'

Chart.register(...registerables)
const pieChart = ref(null)
const barChart = ref(null)
const setupPieChart = () => {
  new Chart(pieChart.value!, {
    type: 'pie',
    data: {
      labels: [
        'Direct',
        'Organic Search',
        'Paid Search',
        'Social Media',
        'Referral',
      ],
      datasets: [
        {
          data: [25, 40, 10, 15, 10],
          backgroundColor: [
            '#805ad5',
            '#38bdf8',
            '#0ea5e9',
            '#9333ea',
            '#e879f9',
          ],
          hoverOffset: 4,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: 'white',
          },
        },
      },
    },
  })
}

const setupBarChart = () => {
  new Chart(barChart.value!, {
    type: 'bar',
    data: {
      labels: [
        'Landing Page',
        'Product Page',
        'Checkout',
        'Thank You',
        'Category Page',
        'Search Results',
        'Blog Post',
      ],
      datasets: [
        {
          label: 'Conversion Rates',
          data: [2.0, 3.0, 4.0, 3.5, 4.2, 5.5, 3.0],
          backgroundColor: '#805ad5',
          borderColor: '#805ad5',
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: 'white',
          },
        },
        x: {
          ticks: {
            color: 'white',
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  })
}

onMounted(() => {
  setupPieChart()
  setupBarChart()
})
</script>

<style scoped>
body {
  background-color: #1a202c;
}
</style>
