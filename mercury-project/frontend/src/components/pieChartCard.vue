<template>
  <div>
    <v-card class="mx-auto" :max-width="width" elevation="2">
      <v-card-title class="white--text" id="title">
        סטטוס
        <v-spacer></v-spacer>
      </v-card-title>
      <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
    </v-card>
  </div>
</template>

<script>
import PieChart from "./pieChart.js";
import { mapState } from "vuex";
import { mapMutations } from 'vuex'
export default {
  name: "pieChartCard",
  components: {
    PieChart
  },
  props: {
    width: {
      default: 400
    }
  },
  data() {
    return {
      chartOptions: {
        hoverBorderWidth: 20
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["חשודים", "מבוקשים"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#141d33", "#283965"],
            data: [this.suspectsNo, this.wantedNo]
          }
        ]
      }
    };
  },
  computed: {
    ...mapState(["pplOfIntrest","suspectNo","wantedNo"])
  },
  methods:{
      ...mapMutations(["initPplArr"]),
  },
  mounted() {
    this.initPplArr();
  },
};
</script>

<style scoped>
#title {
  background-color: #141d33;
}
div {
  font-family: Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
