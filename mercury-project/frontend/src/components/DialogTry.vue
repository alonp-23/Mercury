<template>
  <div>
    <v-dialog v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-list-item-action v-bind="attrs" v-on="on">
          <v-btn icon>
            <v-icon color="white">mdi-arrow-left</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          {{ full_name(this.item.person.firstName, this.item.person.lastName) }}
        </v-card-title>
        <v-container>
          <v-row>
            <person-details
              :personId="this.id"
              @change-wanted-state="changeWantedState"
              bgColor="#2A2B38"
              :wantedButtonStatus="wantedButton"
            ></person-details>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="2"> </v-col>
            <v-col cols="2">
              <titled-info
                bgColor="#2A2B38"
                amountColor="#FFAC04"
                :amount="posts"
                title="מספר פוסטים בשבוע אחרון"
              ></titled-info>
            </v-col>
            <v-col cols="2">
              <driver-license :personId="this.id"></driver-license>
            </v-col>
            <v-col cols="4">
              <reports :personId="this.id"></reports>
            </v-col>
            <v-col cols="2"> </v-col>
          </v-row>
        </v-container>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            סגור
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
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
    const response = await api.profile().getNumOfPostsById(this.id);
    this.posts = response.data;
  },
  data() {
    return {
      posts: 0,
      wantedButton: false
    };
  },
  prop: {
    id: String,
    item: Object
  }
};
</script>

<style scoped>
.row {
  padding: 10px;
}
</style>
