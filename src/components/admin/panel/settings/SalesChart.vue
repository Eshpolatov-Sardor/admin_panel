<template>
    <div>
      <canvas id="salesChart"></canvas>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue';
  import { Chart } from 'chart.js';
  
  onMounted(() => {
    const ctx = document.getElementById('salesChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'Sales',
          data: [200, 150, 400, 300, 250, 200, 100],
          backgroundColor: '#6B7280',
        }]
      },
    });
  });
  </script>
  