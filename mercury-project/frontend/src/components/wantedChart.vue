<template>
  <div>
    <v-card :max-width="width" id="card" color="">
      <v-card-content class="graphBox">
        <FlowChart id="graph" class="crimesGraph"></FlowChart>
      </v-card-content>
    </v-card>
    <v-card elevation="2" outlined :max-width="width" height="200px">
      <h1 class="m7">חשודים <br>{{ wantedNo }}</h1>
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
    wantedNo: {
      type: Number
    },
    height: {
        default: 400
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
