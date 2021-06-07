<script>
	import { Bar, Line, mixins } from 'vue-chartjs'
	import chartjsPluginAnnotation from "chartjs-plugin-annotation";

	const { reactiveProp } = mixins;

  var backgroundColor = 'rgba(30, 139, 195, 0.5)';
	var borderColor = 'rgba(58, 83, 155, 1)';
	var goodAmount = 'rgba(30, 139, 195, 0.5)';
	var tooHighColor = 'rgba(217, 30, 24, 0.5)';
	var tooHighValue = 7;
  export default {
		extends: Bar, Line,
    data() {
      return {
        chartData: {
          labels: ["1/6", "2/6", "3/6", "4/6", "5/6", "6/6", "7/6"
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
            borderColor: [
              borderColor,
              borderColor,
              borderColor,
              borderColor,
              borderColor,
              borderColor,
              borderColor,
            ],
            pointBorderColor: '#2554FF',
						data: [12, 19, 3, 5, 2, 3, 20],
						order: 2,
          },
          {
            type: 'line',
            label: 'Line Dataset',
            data: [7,7,7,7,7,7,7,7],
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
                beginAtZero: true
              },
              gridLines: {
                display: true
							},
							scaleLabel: {
								display: true,
								labelString: 'Crime Rate'
							}
            }],
            xAxes: [{
              gridLines: {
                display: false
							},
							scaleLabel: {
								display: true,
								labelString: 'Date'
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
    mounted() {
			this.addPlugin(chartjsPluginAnnotation);
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