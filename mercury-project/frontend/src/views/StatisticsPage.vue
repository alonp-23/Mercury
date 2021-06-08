<template>
  <div class="statsPage">
		<div class="logoInfo">
			<img class="logoImg" src="../assets/Logo.png">
		</div>
			<div class="graphBox">
				<label for="graph">Irregular Events Table</label>
	    	<bar-chart id="graph" class="crimesGraph"></bar-chart>
			</div>
    </div>
</template>

<script>
import BarChart from '@/components/BarChart'

export default {
	name: 'StatisticsPage',
	data() {
		return {
		};
	},
  components: {
    BarChart
  }
}
</script>

<style scoped>
	.logoInfo {
		display: flex;
		justify-content: flex-end;
	}

	.graphBox {
		background: whitesmoke;
		opacity: 0.5;
	}

	.statsPage {
		display: flex;
		flex-direction: column;
	}

	.logoImg {
		width: 30%;
	}

	.crimesGraph {
		width: 50vh;
		height: 30vh;
	}
</style>