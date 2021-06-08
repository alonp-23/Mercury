<template>
  <div class="about">
    <iteList/>
    <pieChartCard/>
  </div>
</template>

<script>
import pieChartCard from '@/components/pieChartCard.vue';
import iteList from '@/components/InteList.vue'
import { mapMutations } from 'vuex'
export default {
  name: 'Home',
  components: {
    pieChartCard,iteList
  },
  methods:{
      ...mapMutations(["initPplArr"]),
  },
  mounted() {
    this.initPplArr();
  },
};
</script>