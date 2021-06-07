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
          default: 500
      },
      suspects: Number,
      wanted: Number
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
            backgroundColor: ["#41B883", "#E46651"],
            data: [this.suspects, this.wanted]
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
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
