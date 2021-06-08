<template>
  <div>
    <v-card :max-width="width" id="card">
      <v-card-content class="graphBox">        
        <FlowChart id="graph" class="crimesGraph"></FlowChart>      
    
      </v-card-content>
    </v-card>
  </div>
</template>

<script>
import FlowChart from "@/components/FlowChart";
export default {
  components: {
    FlowChart
  },
  props: {
      width: {
          default: 400
      },
    },
};
</script>

 <style  scoped>
 
 </style>
