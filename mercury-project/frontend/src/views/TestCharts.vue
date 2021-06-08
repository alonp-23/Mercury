<template>
  <div class="about">
    <iteList :pplOfIntrest="this.pplOfIntrest" />
    <pieChartCard
      :suspects="this.pplOfIntrest.filter(person => !person.wanted).length"
      :wanted="this.pplOfIntrest.filter(person => person.wanted).length"
    />
    <wantedChard :wantedNo="this.pplOfIntrest.filter(person => person.wanted).length" />
    <suspectsChard :suspectNo="this.pplOfIntrest.filter(person => !person.wanted).length" />
    <v-card max-width="500">
      <FlowChart :data="this.pplOfIntrest.filter(person => person.wanted).map(person=>person.personId)" />
    </v-card>
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
