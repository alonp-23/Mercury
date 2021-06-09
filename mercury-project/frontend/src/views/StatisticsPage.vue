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
							<div class="kpiBox">חשודים: {{ pplOfIntrest.filter(item => !item.wanted).length }}</div>
							<div class="kpiBox">מבוקשים: {{pplOfIntrest.filter(item => item.wanted).length}}</div>
						</div>
						<inte-list :pplOfIntrest="this.pplOfIntrest" class="intelList"></inte-list>
					</div>
				</div>
				<div class="leftSide">
					<div class="graphBox">
						<div class="graphTitleCard">
							<div>
								<div class="graphTitle" for="graph">טבלת אירועים חריגים</div>
							</div>
							<div class="inputBox">
								<input class="inputField" placeholder="שנה כמות פשע צפוייה"/>
								<!-- <change-input @changedValue="console.log('1234124')" class="graphInput"></change-input> -->
							</div>
						</div>
						<bar-chart :tooHighValue="wantedCrime" id="graph" class="crimesGraph"></bar-chart>
					</div>
					<div class="bottomLeft">
						<div class="pieBox">
							<pie-chart class="pieChart" :wanted="pplOfIntrest.filter(item => item.wanted).length" :suspects="pplOfIntrest.filter(item => !item.wanted).length"></pie-chart>
						</div>
						<div class="dateBox">
							<!-- <weather-box dir="ltr"></weather-box> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script>
import BarChart from '@/components/BarChart';
import EventList from "@/components/EventList.vue";
import InteList from "@/components/InteList.vue";
import WeatherBox from "@/components/WeatherCube.vue";
import PieChart from "@/components/pieChartCard.vue";
import changeInput from "@/components/ChangeStandardCrime.vue";
import axios from "axios";

export default {
	name: 'StatisticsPage',
	data() {
		return {
			pplOfIntrest: [],
			wantedCrime: undefined,
		};
	},
  components: {
	BarChart,
	EventList,
	InteList,
	WeatherBox,
	PieChart,
	changeInput
	},
	methods: {
		changeValue(value) {
			console.log('wwwwwwwwwwwwwwwwwwwww');
			this.wantedCrime = value;
		}
	},
	async mounted() {
		this.pplOfIntrest = await axios
			.get(`http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/suspects`)
			.then(response => {
				return response.data;
			})
			.catch(e => {
				alert("intel hasn't arrived");
			}); 
			console.log(this.pplOfIntrest); 
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
		width: 90.9%;
		height: 10%;
		margin-right: 4.2%;
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
		width: 50%;
		display: flex;
		flex-direction: row;
		justify-content: center;
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
		margin-right: 20px
	}

	.kpiBox {
		background: rgba(124, 127, 141, 0.7);
		width: 160px;
		height: 70px;
		border-radius: 15px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.intelList {
		width: 90%;
		margin-right: 7%;
		margin-top: 5%;	
		height: 100%;
	}

	.logoInfo {
		display: flex;
		justify-content: flex-start;
		margin-bottom: 1%;
		margin-top: -1%
	}

	.leftSide {
		margin-left: 55px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.bottomLeft {
		display: flex;
		justify-content: flex-start;
		height: 80%;
		margin-top: 2%;
	}

	.dateBox {

	}

	.pieBox {
		margin-bottom: 1%;
		border-radius: 25px;
	}

	.pieChart {
		/* height: 80%; */
		border-radius: 25px;
	}

	.graphBox {
		background:rgba(124, 127, 141, 0.7);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		height: 370px;
		width: 1000px;
		border-radius: 25px;
	}

	.graphTitleCard {
		width: 100%;
		background: #282828;
		border-top-left-radius: 25px;
		border-top-right-radius: 25px;
		padding: 1%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.inputBox {
		display: flex;
		justify-content: flex-start;
		width: 20%;
		background: rgba(124, 127, 141, 0.7);
		border-radius: 25px;
		padding-right: 2%;
		padding-top: 1%;
		margin-left: 5%;
	}

	.inputField::placeholder {
		margin-bottom: 3%;
		color: white;
	}

	.graphInput {
		width: 100%;
		/* margin-left: ; */
	}

	.graphTitle {
		margin-right: 20%;
	}

	.statsPage {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin: 2%;
	}

	.logoImg {
		width: 10%;
	}

	.crimesGraph {
		/* width: 50vh; */
		height: 30vh;
		width: 100%;

	}
</style>