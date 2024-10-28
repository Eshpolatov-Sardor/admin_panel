<script setup lang="ts">
  import { ref } from 'vue';
  
  const items = ref([
    { id: 1, name: 'Monica', salary: '$2000', date: '25/05/2018', status: 'Approved' },
    { id: 2, name: 'Nick', salary: '$2000', date: '25/05/2018', status: 'Approved' },
    { id: 3, name: 'Tommy', salary: '$2000', date: '25/05/2018', status: 'Pending' },
    { id: 4, name: 'Jane', salary: '$2000', date: '25/05/2018', status: 'Pending' },
    { id: 5, name: 'Michael', salary: '$2000', date: '25/05/2018', status: 'Approved' },
    { id: 6, name: 'Kate', salary: '$2000', date: '25/05/2018', status: 'Approved' },
  ]);
  
  const currentPage = ref(1);
  const totalPages = 3;
  
  const nextPage = () => {
    if (currentPage.value < totalPages) currentPage.value++;
  };
  
  const previousPage = () => {
    if (currentPage.value > 1) currentPage.value--;
  };
  </script>
  <template>
    <div class="p-6">
      <table class="table-auto w-full text-white">
        <thead class="bg-gray-800">
          <tr>
            <th class="px-4 py-2">#</th>
            <th class="px-4 py-2">Price</th>
            <th class="px-4 py-2">Salary</th>
            <th class="px-4 py-2">Date</th>
            <th class="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index" class="bg-gray-700">
            <td class="border px-4 py-2">{{ item.id }}</td>
            <td class="border px-4 py-2">{{ item.name }}</td>
            <td class="border px-4 py-2">{{ item.salary }}</td>
            <td class="border px-4 py-2">{{ item.date }}</td>
            <td class="border px-4 py-2">
              <span
                :class="item.status === 'Approved' ? 'bg-green-500' : 'bg-red-500'"
                class="text-white px-2 py-1 rounded-full"
              >
                {{ item.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
  
      <div class="flex justify-center mt-4">
        <button
          @click="previousPage"
          :disabled="currentPage === 1"
          class="px-4 py-2 mx-1 bg-gray-300 text-black disabled:opacity-50"
        >
          Previous
        </button>
        <span v-for="page in totalPages" :key="page" class="px-4 py-2 mx-1 bg-blue-500 text-white">
          {{ page }}
        </span>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 mx-1 bg-gray-300 text-black disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  </template>
  
  <style>
  table {
    border-spacing: 0;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #ddd;
  }
  </style>
  