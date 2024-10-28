<template>
    <div>
      <canvas id="earningsChart"></canvas>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue';
  import { Chart } from 'chart.js';
  
  onMounted(() => {
    const ctx = document.getElementById('earningsChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Earnings',
          data: [400, 200, 500, 300, 400],
          borderColor: '#F59E0B',
          fill: false,
        }]
      },
    });
  });
  </script>
  