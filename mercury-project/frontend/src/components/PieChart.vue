<script>
import axios from "axios";
import { Doughnut } from "vue-chartjs";
export default {
  extends: Doughnut,
  props: ["options"],
  async mounted() {
    const arr  = await axios
        .get(`http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/suspects`)
        .then(response => {
          return response.data;
        })
        .catch(e => {
          console.log(e);
        });
    const data = {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["חשודים", "מבוקשים"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#141d33", "#283965"],
            data: [arr.filter(person => !person.wanted).length, arr.filter(person => person.wanted).length]
          }
        ]
      }
    this.renderChart(data, this.options);
  },
  watch: {
    data() {
      console.log("entered");
      this._chart.destroy();
      this.renderChart(this.data, this.options);
    }
  }
};
</script>
