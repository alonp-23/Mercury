<template>
  <div>
    <v-card :max-width="width" id="card" color="">
      <v-card-content class="graphBox">
        <FlowChart id="graph" class="crimesGraph"></FlowChart>
      </v-card-content>
    </v-card>
    <v-card elevation="2" outlined :max-width="width" height="200px">
      <h1 class="m7">חשודים <br />{{ wantedNo }}</h1>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
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
  },
  data(){
    data=[]
  },
  mounted(){

  },
  methods: {
    async getStartedById() {
      const suspects = await axios
        .get(
          `http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/suspects/wanted`
        )
        .then(response => {
          return response.data;
        })
        .catch(e => {
          console.log(e);
        });
        this.data=suspects.filter(suspect=>data.includes(suspect.personId))
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
