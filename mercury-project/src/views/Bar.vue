<template>
  <div>
    <h3>Bar Chart Example in Vue</h3>
    <bar-chart></bar-chart>
  </div>
</template>

<script>
import BarChart from '@/components/BarChart'

export default {
	name: 'BarPage',
	data() {
		return {
		};
	},
  components: {
    BarChart
  }
}
</script>