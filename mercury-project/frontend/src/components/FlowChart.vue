<script>
import { Bar, Line, mixins } from "vue-chartjs";
import chartjsPluginAnnotation from "chartjs-plugin-annotation";

const { reactiveProp } = mixins;

var backgroundColor = "rgba(30, 139, 195, 0.5)";
export default {
  extends: Line,
  data() {
    return {};
  },
  props: {
    data: {
      type: Array,
      default: [40, 39, 20, 40, 39, 80, 40]
    },
    width: {
      default: 400
    }
  },
  mounted() {
    this.renderChart(
      {
        labels: this.createLableArray(this.data),
        datasets: [
          {
            label: "Bar Chart",
            backgroundColor: backgroundColor,
            data: this.data
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              },
              scaleLabel: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              },
              scaleLabel: {
                display: true
              }
            }
          ]
        },
        plugins: {
          title: {
            display: true,
            text: "Custom Chart Title"
          }
        }
      }
    );
  },
  methods: {
    createLableArray: function(data) {
      const labels = [];
      for (let i = 0; i < data.length; i++) {
        labels.push("");
      }
      return labels;
    }
  }
};
</script>
