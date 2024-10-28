<script setup lang="ts">
import SalesCard from './dashboard/SalesCard.vue'
import TransactionCard from './dashboard/TransactionCard.vue'
import WeeklyOverview from './dashboard/WeeklyOverview.vue'
import EarningsCard from './dashboard/EarningsCard.vue'
import DashboardTable from './dashboard/DashboardTable.vue'
import TableJadval from './dashboard/Table.vue'
</script>

<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 p-9">
      <SalesCard />
      <TransactionCard />
      <WeeklyOverview />
      <EarningsCard />
      <EarningsCard />
      <EarningsCard />
    </div>
    <DashboardTable />
    <TableJadval />
  </div>
</template>
