<script>
import { Bar, Line, mixins } from "vue-chartjs";
import chartjsPluginAnnotation from "chartjs-plugin-annotation";

const { reactiveProp } = mixins;

var backgroundColor = "rgb(20, 29, 51,0.7)";
export default {
  extends: Line,
  data() {
    return {};
  },
  props: {
    data: {
      type: Array,
      default:() => [40, 39, 20, 40, 39, 80, 40]
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
              display: false,
              ticks: {
                desplay: false,
                beginAtZero: true
              },
              gridLines: {
                display: false
              },
              scaleLabel: {
                display: false
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
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
