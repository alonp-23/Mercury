<template>
  <div class="driverLicense">
    <v-card class="mx-auto rounded-card v-card" color="#141d33" max-height="900" id="card">
      <v-card-title class="justify-center">
        <h1 class="justify-center">
          צווים ודוחות
        </h1>
      </v-card-title>
      <v-container class="text-right">
        <v-row v-for="element in reportsList" :key="element.id">
          <v-col>
            <h4>
              סוף תוקף
            </h4>
            <div>
              {{ formatDate(element.endingDate) }}
            </div>
          </v-col>

          <v-col>
            <h4>
              תחילת תוקף
            </h4>
            <div>
              {{ formatDate(element.startingDate) }}
            </div>
          </v-col>
          <v-col>
            <h3>
              {{ element.permissionDesc }}
            </h3>
          </v-col>
        </v-row>
        <v-row v-if="(!reportsList.length)">
          <h4>
            אין צווים תקפים
          </h4>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import api from "../api/api";
export default {
  data() {
    return {
      reportsList: []
    };
  },
  props: {
    personId: {
      type: String,
      required: true
    }
  },
  methods: {
    formatDate: function(date) {
      const newDate = new Date(date);
      return newDate.toLocaleDateString("he-IL");
    }
  },
  async mounted() {
    const response = await api.profile().getPermissionsById(this.personId);
    this.reportsList = response.data;
  },
  async updated() {
    const response = await api.profile().getPermissionsById(this.personId);
    this.reportsList = response.data;
  }
};
</script>

<style scoped>
.status {
  margin-top: 1vh;
  margin-left: 23vh;
}
.date {
  margin-left: 17vh;
}
.colStyle {
  margin-left: 7vh;
}
.rounded-card {
  border-radius: 10px;
}
.colStyleDate {
  margin-left: 4vh;
  margin-bottom: 10vh;
}
#card{
  color:white;
  background-color: #141d33
}
</style>