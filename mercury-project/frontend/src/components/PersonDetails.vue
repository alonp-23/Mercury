<template>
  <v-card color="#141d33" dark class="mx-auto rounded-card" width="90vw" outlined>
    <v-container>
      <v-row>
        <v-col>
          <v-card-actions>
            <v-container>
              <v-row>
                <h1 class="text-center mx-auto">{{ lock_title }}</h1>
              </v-row>
              <v-row>
                <div class="text-center mx-auto">
                  
                </div>
              </v-row>
            </v-container>
          </v-card-actions>
        </v-col>
        <v-col>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text mb-1 text-lg-right">
                <strong>פלאפון</strong>
                {{ suspectDetails.person.phoneNumber }}
              </v-list-item-title>
              <div class="text-overline-h4 mb-4 text-lg-right">
                <strong>כתובת </strong>
                {{ suspectDetails.person.address }}
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col>
          <v-list-item two-line>
            <v-list-item-content>
              <div class="text-overline-h4 mb-4 text-lg-right">
                <strong>{{
                  suspectDetails.person.firstName + " " + suspectDetails.person.lastName
                }}</strong>
              </div>
              <v-list-item-title class="text mb-1 text-lg-right">
                {{ suspectDetails.personId }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>

        <v-col>
          <v-list-item>
            <v-avatar size="120" class=" mx-auto"
              ><img :src="suspectDetails.person.personImageURL" alt="John"
            /></v-avatar>
          </v-list-item>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import api from "../api/api";
export default {
  data() {
    return {
      suspectDetails: {}
    };
  },
  async mounted() {
    const response = await api.profile().getProfileById(this.personId);
    this.suspectDetails = response.data;
  },
  async updated() {
    const response = await api.profile().getProfileById(this.personId);
    this.suspectDetails = response.data;
  },
  props: {
    bgColor: {
      type: String,
      required: true
    },
    wantedButtonStatus: {
      type: Boolean,
      required: true
    },
    personId: {
      type: String,
      required: true
    }
  },
  computed: {
    state_color: function() {
      return this.suspectDetails.wanted ? "red" : "green";
    },
    lock_icon: function() {
      return this.suspectDetails.wanted ? "fas fa-lock" : "fas fa-lock-open";
    },
    lock_title: function() {
      return this.suspectDetails.wanted ? "מבוקש" : "חשוד";
    }
  },
  methods: {
    updateWantedState: function() {
      this.$emit("change-wanted-state");
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Heebo&display=swap");
* {
  font-family: "Heebo", sans-serif !important;
}
.rounded-card {
  border-radius: 10px;
}
.text {
  font-family: "Heebo", sans-serif !important;
}
</style>