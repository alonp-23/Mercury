<template>
  <div class="about">
     <div class="container">
      <wantedChard
        width="500"
        height="500"
        :wantedNo="this.pplOfIntrest.filter(person => person.wanted).length"
        class="box stack-top"
      />
      <v-card class="box">
        <FlowChart />
      </v-card>
    </div> 

    <iteList :pplOfIntrest="this.pplOfIntrest" />

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
import HeatMap from "@/components/HeatMap.vue";
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
  mounted() {
    this.initPplArr();
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

      /* this.pplOfIntrest = [
        {
          personId: 456346,
          person: {
            firstName: "ישראל",
            lastName: "ישראלי",
            personImageURL:
              "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
            
            wanted: false,
            phoneNumber: 1234567,
            address: "דרדר 51, מצפה נשר"
          }
        },
        {
          personId: 456346,
          person: {
            firstName: "חמוד",
            lastName: "חמודי",
            personImageURL:
              "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
            
            wanted: false,
            phoneNumber: 1234567,
            address: "דרדר 51, מצפה נשר"
          }
        },
        {
          personId: 456346,
          person: {
            firstName: "שאול",
            lastName: "שאולה",
            personImageURL:
              "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
            
            wanted: false,
            phoneNumber: 1234567,
            address: "דרדר 51, מצפה נשר"
          }
        },
        {
          personId: 456346,
          person: {
            firstName: "ארי",
            lastName: "אריה-צבי",
            personImageURL:
              "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
            
            wanted: true,
            phoneNumber: 1234567,
            address: "דרדר 51, מצפה נשר"
          }
        },
        {
          personId: 456346,
          person: {
            firstName: "טובה",
            lastName: "חיים",
            personImageURL:
              "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
            
            wanted: true,
            phoneNumber: 1234567,
            address: "דרדר 51, מצפה נשר"
          }
        },
        {
          personId: 456346,
          person: {
            firstName: "ישראל",
            lastName: "ישראלי",
            personImageURL:
              "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
            
            wanted: false,
            phoneNumber: 1234567,
            address: "דרדר 51, מצפה נשר"
          }
        },
      ]; */
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
