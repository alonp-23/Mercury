<template>
  <v-container id="container">
    <v-row>
      <person-details
        :personId="this.personId"
        @change-wanted-state="changeWantedState"
        bgColor="#141d33"
        :wantedButtonStatus="wantedButton"
      ></person-details>
    </v-row>
    <v-row class="mt-3">
      <v-col cols="2"> </v-col>
      <v-col cols="2">
        <titled-info
          bgColor="#141d33"
          amountColor="#FFAC04"
          :amount="posts"
          title="מספר פוסטים בשבוע אחרון"
        ></titled-info>
      </v-col>
      <v-col cols="2">
        <driver-license :personId="this.personId"></driver-license>
      </v-col>
      <v-col cols="4">
        <reports :personId="this.personId"></reports>
      </v-col>
      <v-col cols="2"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PersonDetails from "../components/PersonDetails.vue";
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
    driverLicense
  },
  methods: {
    changeWantedState: function() {
      this.person.wanted = !this.person.wanted;
    }
  },
  async mounted() {
    console.log("id " + this.personId);
    const response = await api.profile().getNumOfPostsById(this.personId);
    this.posts = response.data;
  },
  data() {
    return {
      posts: 0,
      wantedButton: false
    }
  },
  props: {
    personId: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.row {
  padding: 10px;
}
#container{
    
}
</style>
