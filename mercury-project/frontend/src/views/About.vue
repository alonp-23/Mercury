<template>
  <div class="about">
    
    <pieChartCard :suspects="21" wanted="21"/>
  </div>
</template>

<script>
import pieChartCard from '@/components/pieChartCard.vue';

export default {
  name: 'Home',
  components: {
    pieChartCard
  },
};
</script>