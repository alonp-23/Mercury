<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <person-details
          v-bind:personId="this.personId"
          @change-wanted-state="changeWantedState"
          bgColor="#141d33"
          :wantedButtonStatus="wantedButton"
        ></person-details>
      </v-col>
    </v-row>
    <v-row class="mt-4" justify="center">
      <v-col cols="4">
        <v-row justify="center">
          <v-col >
            <titled-info
              bgColor="#141d33"
              amountColor="#FFAC04"
              :amount="posts"
              title="מספר פוסטים בשבוע אחרון"
            ></titled-info>
          </v-col>
          <v-col class="pr-0 pl-20">
            <driver-license v-bind:personId="this.personId"></driver-license>
          </v-col>
        </v-row>
        <v-row class="mt-4" justify="center"> 
          <v-col cols="12">
            <v-card width="500px" class="mr-9">
              <reports v-bind:personId="this.personId"></reports>
            </v-card>
          
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="4">
        <v-card max-width="500" class="mt-2">
          <heat-map :personId="this.personId" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PersonDetails from "../components/PersonDetails.vue";
import HeatMap from "../components/HeatMap.vue";
import TitledInfo from "../components/TitledInfo.vue";
import Reports from "../components/reports.vue";
import driverLicense from "../components/driverLicense.vue";
import api from "../api/api";
export default {
  name: "ProfilePage",
  components: {
    PersonDetails,
    TitledInfo,
    Reports,
    driverLicense,
    HeatMap
  },
  methods: {
    changeWantedState: function() {
      this.person.wanted = !this.person.wanted;
    }
  },
  async mounted() {
    const response = await api.profile().getNumOfPostsById(this.personId);
    this.posts = response.data;
  },
  async updated() {
    const response = await api.profile().getNumOfPostsById(this.personId);
    this.posts = response.data;
  },
  data() {
    return {
      posts: 0,
      wantedButton: false
    };
  },
  props: ["personId"]
};
</script>

<style scoped>
.row {
  padding: 10px;
}
#heatMap{
  background-color: white
}
</style>
