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
							<div class="kpiBoxCase">
								<div class="kpiBox wantedKpi">
									<v-col>
										<v-row align="center" justify="center"
											><h1>
											{{ pplOfIntrest.filter(item => !item.wanted).length }}
											</h1></v-row
										>
										<v-row class="wantedTitle" justify="center">חשודים </v-row>
									</v-col>
								</div>
							</div>
							
							<div class="kpiBoxCase">
								<div class="kpiBox suspectedKpi">
									<v-col>
										<v-row align="center" justify="center"
											><h1>
											{{ pplOfIntrest.filter(item => item.wanted).length }}
											</h1></v-row
										>
										<v-row class="suspectedTitle" justify="center">מבוקשים </v-row>
									</v-col>
								</div>
							</div>
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
								<input class="inputField" v-model="wantedCrime" placeholder="שנה כמות פשע צפוייה"/>
								<!-- <change-input @changedValue="console.log('1234124')" class="graphInput"></change-input> -->
							</div>
						</div>
						<bar-chart :chart-data="chartData" :tooHighValue="Number(wantedCrime)" id="graph" class="crimesGraph"></bar-chart>
					</div>
					<div class="bottomLeft">
						<div class="pieBox">
							<pie-chart class="pieChart" :wanted="pplOfIntrest.filter(item => item.wanted).length" :suspects="pplOfIntrest.filter(item => !item.wanted).length"></pie-chart>
						</div>
						<div class="dateBox">
							<weather-box class="weather">
								</weather-box> 
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
import WeatherBox from "@/components/WeatherCalendar.vue";
import PieChart from "@/components/pieChartCard.vue";
import changeInput from "@/components/ChangeStandardCrime.vue";

import axios from "axios";

var backgroundColor = 'rgba(30, 139, 195, 0.5)';
var borderColor = 'rgba(29, 43, 75, 0.8)';
var goodAmount = 'rgba(29, 43, 75, 0.8)';
var tooHighColor = 'rgba(74, 23, 23, 0.8)';
var tooHighValue = 1;

export default {
	name: 'StatisticsPage',
	data() {
		return {
			pplOfIntrest: [],
			wantedCrime: 1,
			tooHighValue: 1,
			
		};
	},
	computed: {
		chartData() {
		return {
				labels: ["4/6", "5/6", "6/6", "7/6", "8/6", "9/6", "10/6"
          ],
          datasets: [{
            label: 'Bar Chart',
            borderWidth: 1,
            backgroundColor: [
              backgroundColor,
              backgroundColor,
              backgroundColor,
              backgroundColor,
              backgroundColor,
              backgroundColor,
              backgroundColor,
            ],
            pointBorderColor: '#2554FF',
						data: [12, 19, 3, 5, 2, 3, 20],
						order: 2,
          },
          {
            type: 'line',
            label: 'Line Dataset',
            data: new Array(8).fill(this.wantedCrime || tooHighValue),
						borderDash: [15],
						//fill: false,
						backgroundColor: 'rgba(0, 0, 0, 0)',
						borderColor: 'rgba(0, 230, 64, 1)',
						tension: 0.1,
						pointBorderColor: 'rgba(0, 0, 0, 0)',
						pointBackgroundColor: 'rgba(0, 0, 0, 0)',
						order: 1
          }
        ]
			}
		}
	
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
	overflow: hidden;
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
	}

	.eventList {
		background-color: #6a6f8c;
	}

	.weather{
		width: 100%;
		direction: ltr;
	}
	.intelBox {
		margin-left: 2%;
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
		/* background-color: rgba(124, 127, 141, 0.7); */
		width: 160px;
		height: 70px;
		border-radius: 15px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: black;
	}

	.wantedKpi {
		background:url(../assets/wantedGraph.png);
		opacity: 0.5;
		background-size: 120%;
		margin-bottom: -2%;
	}

	.wantedTitle {
		opacity: 1 !important; 
	}

	.suspectedKpi {
		background:url(../assets/suspectGraph.png);
		opacity: 0.5;
		background-size: 120%;
		margin-bottom: -2%;
	}

	.suspectedTitle {
		opacity: 1 !important; 
	}

	.kpiBoxCase {
		background-color: rgba(124, 127, 141, 0.7);
		border-radius: 15px;
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
		justify-content: space-between;
		height: 80%;
		margin-top: 2%;
	}

	.dateBox {
		width: 100%;
		margin-right: 100px;
		margin-top: 20px;
		max-height: 95%;
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
		color: white;

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

	.inputField {
		margin-bottom: 4%;
	}

	.inputField::placeholder {
		margin-bottom: 3%;
		color: white;
	}

	.inputField:active{
		outline: none;
	}

	.inputField:focus{
		outline: none;
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