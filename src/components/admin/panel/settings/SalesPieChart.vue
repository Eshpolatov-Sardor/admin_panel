<template>
    <div>
      <canvas id="salesPieChart"></canvas>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue';
  import { Chart } from 'chart.js';
  
  onMounted(() => {
    const ctx = document.getElementById('salesPieChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Fashion', 'Gadget', 'Other'],
        datasets: [{
          label: 'Sales',
          data: [30, 50, 20],
          backgroundColor: ['#EC4899', '#3B82F6', '#F59E0B'],
        }]
      },
    });
  });
  </script>
  