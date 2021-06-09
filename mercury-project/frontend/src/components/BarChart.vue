<script>
	import { Bar, Line, mixins } from 'vue-chartjs'
	import chartjsPluginAnnotation from "chartjs-plugin-annotation";
	import axios from "axios";

	const { reactiveProp } = mixins;

  var backgroundColor = 'rgba(30, 139, 195, 0.5)';
	var borderColor = 'rgba(29, 43, 75, 0.8)';
	var goodAmount = 'rgba(29, 43, 75, 0.8)';
	var tooHighColor = 'rgba(74, 23, 23, 0.8)';
	var tooHighValue = 1;
  export default {
		extends: Bar, Line,
		props: {
			 tooHighValue: {
				 type: Number,
				 default: 1
			 }
		},
    data() {
      return {
        chartData: {
          labels: ["3/6", "4/6", "5/6", "6/6", "7/6", "8/6", "9/6"
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
            data: new Array(8).fill(tooHighValue),
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
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
								beginAtZero: true,
								fontColor: 'rgba(255,255,255,1)'
              },
              gridLines: {
								display: true,
								color: 'rgba(255,255,255,1)',
								zeroLineColor: 'rgba(255,255,255,1)',
								lineWidth: 0.5
							},
							scaleLabel: {
								display: true,
								labelString: 'אירועי פשיעה',
								fontColor: 'rgba(255,255,255,1)',
								fontSize: 15

							}
            }],
            xAxes: [{
							ticks: {
								fontColor: 'rgba(255,255,255,1)'
							},
              gridLines: {
								display: false,
								color: 'rgba(255,255,255,1)',
								zeroLineColor: 'rgba(255,255,255,1)'
							},
							scaleLabel: {
								display: true,
								labelString: 'תאריך',
								fontColor: 'rgba(255,255,255,1)',
								fontSize: 15

							},
            }]
					},
					plugins: {
						annotation: {
							annotations: [{
								type: 'line',
								mode: 'horizontal',
								scaleID: 'y-axis-0',
								display: true,
								value: 6,
								borderColor: 'rgb(75, 192, 192)',
								borderWidth: 4,
								label: {
									enabled: true,
									content: 'Test label'
								}
							}]
						},
					},
          legend: {
            display: false
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    async mounted() {
			this.addPlugin(chartjsPluginAnnotation);
			let wantedDate = '2021-06-09';
			const crimesPerDayArr = await axios
				.get(`http://backend-tmzde3.apps.openforce.openforce.biz/events/week/${wantedDate}`) //http://backend-tmzde3.apps.openforce.openforce.biz
				.then(response => {
				return response.data;
				})
				.catch(e => {
				console.log("error getting irregular events");
				});
			console.log(crimesPerDayArr);
			this.chartData.datasets[0].data = crimesPerDayArr;
			console.log(this.chartData.datasets[0].data);
			for (let index = 0; index < this.chartData.datasets[0].data.length; index ++) {
					if (this.chartData.datasets[0].data[index] > tooHighValue) {
						this.chartData.datasets[0].backgroundColor[index] = tooHighColor;
					} else {
						this.chartData.datasets[0].backgroundColor[index] = backgroundColor;
					};
				}
			this.renderChart(this.chartData, this.options);
		}, //TODO: function that requests the value of z-score, data, userchoice
  }
</script>