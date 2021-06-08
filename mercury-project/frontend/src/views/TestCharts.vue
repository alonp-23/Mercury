<template>
  <div class="about">
    <iteList :pplOfIntrest="this.pplOfIntrest" />
    <pieChartCard
      :suspects="this.pplOfIntrest.filter(item => !item.wanted).length"
      :wanted="this.pplOfIntrest.filter(item => item.wanted).length"
    />
    <wantedChart :wantedNo="this.pplOfIntrest.filter(person => person.wanted).length" />
  </div>
</template>

<script>
import axios from "axios";
import pieChartCard from "@/components/pieChartCard.vue";
import iteList from "@/components/InteList.vue";
import wantedChart from "@/components/wantedChart.vue";
export default {
  name: "Home",
  components: {
    pieChartCard,
    iteList,
    wantedChart
  },
  methods: {},
  data: () => {
    return {
      pplOfIntrest: [],
      dialog: false,
      show_wanted: false
    };
  },
  created() {
    this.initPplArr();
  },
  methods: {
    initPplArr() {
      axios
        .get(`http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/suspects`)
        .then(response => {
          this.pplOfIntrest = response.data;
        })
        .catch(e => {
          alert(e);
        });      
    }
  }
};
</script>
