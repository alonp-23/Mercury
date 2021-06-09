<template>
  <div class="about">
    <div class="container">
      <wantedChard width="500" height="500"
        :wantedNo="this.pplOfIntrest.filter(person => person.wanted).length"
        class="box stack-top"
      />
      <v-card  class="box">
        <FlowChart/>
      </v-card>
    </div>

    <iteList :pplOfIntrest="this.pplOfIntrest" />
    <pieChartCard
      :suspects="this.pplOfIntrest.filter(person => !person.wanted).length"
      :wanted="this.pplOfIntrest.filter(person => person.wanted).length"
    />

    <suspectsChard :suspectNo="this.pplOfIntrest.filter(person => !person.wanted).length" />

    
  </div>
</template>

<script>
import axios from "axios";
import pieChartCard from "@/components/pieChartCard.vue";
import iteList from "@/components/InteList.vue";
import wantedChard from "@/components/WantedCard.vue";
import suspectsChard from "@/components/SuspectsCard.vue";
import FlowChart from "@/components/FlowChart.vue";
export default {
  name: "Home",
  components: {
    pieChartCard,
    iteList,
    wantedChard,
    suspectsChard,
    FlowChart
  },
  data: () => {
    return {
      pplOfIntrest: [],
      dialog: false,
      show_wanted: false
    };
  },
  async mounted() {
    this.pplOfIntrest = await axios
      .get(`http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/suspects`)
      .then(response => {
        return response.data;
      })
      .catch(e => {
        console.log(e);
      });
  },

  methods: {
    async initPplArr() {
      await axios
        .get(`http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/suspects`)
        .then(response => {
          this.pplOfIntrest = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style scoped>
.container {
  width: 200px;
  height: 200px;
  position: relative;
  margin: 20px;
}
.box {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8; /* for demo purpose  */
}
.stack-top {
  z-index: 9;
  margin: 20px; /* for demo purpose  */
}
</style>
