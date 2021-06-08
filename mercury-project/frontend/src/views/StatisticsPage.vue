<template>
	<v-app>
		<div class="wholePage">
			<div class="header">
				<div class="logoInfo">
					<img class="logoImg" src="../assets/Logo.png">
				</div>
			</div>
			<div class="statsPage">
				<div class="listStats">
					<div class="eventBox">
						<event-list class="eventList"></event-list>
					</div>
					<div class="intelBox">
						<div class="kpis">
							<div class="kpiBox">חשודים: 1</div>
							<div class="kpiBox">מבוקשים: 2</div>
						</div>
						<inte-list class="intelList"></inte-list>
					</div>
				</div>
				<div class="graphBox">
					<label class="graphTitle" for="graph">טבלת אירועים חריגים</label>
					<bar-chart id="graph" class="crimesGraph"></bar-chart>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script>
import BarChart from '@/components/BarChart';
import EventList from "@/components/EventList.vue";
import InteList from "@/components/InteList.vue";

export default {
	name: 'StatisticsPage',
	data() {
		return {
		};
	},
  components: {
	BarChart,
	EventList,
	InteList
  }
}
</script>

<style scoped>
	.wholePage{
	margin:0;
	height: 100vh;
	color:#6a6f8c;
	background:url(../assets/stats-background.jpg);
	font:600 16px/18px 'Open Sans',sans-serif;
	}

	.header {
		background: rgba(124, 127, 141, 0.7);
		border-radius: 25px;
		width: 90%;
		height: 10%;
		margin-right: 5%;
		margin-top: 2%;
	}

	.logoAndIntel {
		background-image: linear-gradient(#141d33, #464b5e);
		background-size: 35vh;
		background-position: right;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin: -2%;
		height: 100vh;
	}

	.listStats {
		width: 80%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.eventBox {
		/* height: 100vh; */
		margin-left: 0%;
	}

	.eventList {
		background-color: #6a6f8c;
	}

	.intelBox {
		width: 40vh;
		height: 100%;
		border-radius: 3%;
		display: flex;
		flex-direction: column;
		justify-content: center;

	}

	.kpis {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.kpiBox {
		background: rgba(124, 127, 141, 0.7);
		width: 100px;
		height: 50px;
		border-radius: 15px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.intelList {
		width: 90%;
		margin: 3%;	
		height: 100%;
	}

	.logoInfo {
		display: flex;
		justify-content: flex-start;
		margin-bottom: 1%;
		margin-top: -1%
	}

	.graphBox {
		background:rgba(124, 127, 141, 0.7);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		height: 350px;
		width: 1000px;
		border-radius: 25px;
	}

	.graphTitle {
		margin-right: 5%; 
	}

	.statsPage {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 2%;
	}

	.logoImg {
		width: 10%;
	}

	.crimesGraph {
		/* width: 50vh; */
		height: 30vh;
		width: 1000px;

	}
</style>