<template>
    <div>
        <v-card class="mx-auto pieCard" :max-width=width elevation="2" >
            <v-card-title class="white--text" id="title">
                סטטוס
            <v-spacer></v-spacer>      
            </v-card-title> 
            <PieChart class="chart" :options="chartOptions"></PieChart>
        </v-card>
    </div>    
</template>

<script>
import PieChart from "./PieChart.vue";
export default {    
    name: 'pieChartCard',
    mounted() {
      console.log(this.suspects);
    },
    components:{
        PieChart
    },
    props: {
      width: {
          default: 400
      },
      suspects: {
          type: Number
      },
      wanted: {
          type: Number
      },
    },
    data() {
    return {
      chartOptions: {
        hoverBorderWidth: 20,
        legend: {
          labels: {
            fontColor: 'white',
            fontSize: 20
          }
        }
      }
    };
  }
}
</script>

<style scoped>
    #title{
      background-color: #282828;
      color:rgba(124, 127, 141, 1);
    }
    div {
        font-family: Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        background: rgba(124, 127, 141, 1);
    }

    .chart {
      width: 340px;
    }

    .pieCard {
    }
</style>
