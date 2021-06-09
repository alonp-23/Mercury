<script>
import axios from "axios";
import { Bar, Line, mixins } from "vue-chartjs";
import chartjsPluginAnnotation from "chartjs-plugin-annotation";
const { reactiveProp } = mixins;
var backgroundColor = "rgb(20, 29, 51,0.7)";
export default {
  extends: Line,
  data() {
    return {
      data: () => [40,30,20,60]
    };
  },
  props: {
    width: {
      default: 400
    }
  },
  async mounted() {
    /* this.data = await axios
      .get(
        `http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/suspects/wanted`
      )
      .then(response => {
        return response.data.map(person => person.started);
      })
      .catch(e => {
        console.log(e);
      }); */

    this.renderChart(
      {
        labels: this.createLableArray(this.data),
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
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
                display: false,
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: false
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
