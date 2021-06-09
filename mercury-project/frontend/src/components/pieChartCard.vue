<template>
    <div>
        <v-card class="mx-auto" :max-width=width elevation="2" >
            <v-card-title class="white--text" id="title">
                סטטוס
            <v-spacer></v-spacer>      
            </v-card-title> 
            <PieChart :options="chartOptions"></PieChart>
        </v-card>
    </div>    
</template>

<script>
import PieChart from "./PieChart.vue";
export default {    
    name: 'pieChartCard',
    mounted() {
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
        hoverBorderWidth: 20
      }
    };
  }
}
</script>

<style scoped>
    #title{
      background-color: #141d33;
      color:white
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
