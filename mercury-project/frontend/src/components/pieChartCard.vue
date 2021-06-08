<template>
    <div>
        <v-card class="mx-auto" :max-width=width elevation="2" >
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
export default {    
    name: 'pieChartCard',
    components:{
        PieChart
    },
    props: {
      width: {
          default: 400
      },
      suspects: {
          type: Number,
          default: 21
      },
      wanted: {
          type: Number,
          default: 21
      },
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
            data: [parseInt(this.suspects.toString()), parseInt(this.wanted.toString())]
          }
        ]
      }
    };
  }
}
</script>

<style scoped>
    #title{
      background-color: #141d33
    }
    div {
        font-family: Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
