<template>
    <div class="p-6 bg-gray-900 rounded-lg shadow-lg">
      <h2 class="text-white text-xl mb-4">Top Performing Pages</h2>
      <table class="min-w-full table-auto">
        <thead>
          <tr class="bg-gray-800 text-gray-400">
            <th class="px-4 py-2 text-left">Page</th>
            <th class="px-4 py-2 text-left">Views</th>
            <th class="px-4 py-2 text-left">Unique Visitors</th>
            <th class="px-4 py-2 text-left">Avg. Time on Page</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(page, index) in pages" :key="index" class="bg-gray-700 border-b border-gray-600">
            <td class="px-4 py-2 text-white">{{ page.name }}</td>
            <td class="px-4 py-2 text-white">{{ page.views }}</td>
            <td class="px-4 py-2 text-white">{{ page.uniqueVisitors }}</td>
            <td class="px-4 py-2 text-white">{{ page.avgTimeOnPage }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const pages = ref([
    {
      name: '/home',
      views: '45,678',
      uniqueVisitors: '23,456',
      avgTimeOnPage: '2m 34s'
    },
    {
      name: '/products',
      views: '34,567',
      uniqueVisitors: '18,765',
      avgTimeOnPage: '3m 12s'
    },
    {
      name: '/about',
      views: '23,456',
      uniqueVisitors: '12,345',
      avgTimeOnPage: '1m 45s'
    },
    {
      name: '/contact',
      views: '12,345',
      uniqueVisitors: '7,890',
      avgTimeOnPage: '2m 01s'
    },
    {
      name: '/blog',
      views: '9,876',
      uniqueVisitors: '5,432',
      avgTimeOnPage: '4m 23s'
    }
  ]);
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 12px 15px;
  }
  
  thead th {
    font-weight: bold;
    background-color: #2d3748;
  }
  
  tbody tr:nth-child(even) {
    background-color: #2d3748;
  }
  </style>
    