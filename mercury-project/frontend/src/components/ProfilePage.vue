<template>
<v-container>
    <v-row>
        <person-details :personId="$route.params.id" @change-wanted-state="changeWantedState" bgColor="#2A2B38" :wantedButtonStatus="wantedButton"></person-details>
    </v-row>
    <v-row class="mt-3">
        <v-col cols="2">
        </v-col>
        <v-col
        cols="2">
            <titled-info bgColor="#2A2B38" amountColor="#FFAC04" :amount="posts" title="מספר פוסטים בשבוע אחרון"></titled-info>
        </v-col>
        <v-col cols="2">
            <driver-license :personId="$route.params.id" ></driver-license>
        </v-col>
        <v-col cols="4">
            <reports :personId="$route.params.id"></reports>
        </v-col>
        <v-col cols="2">
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import PersonDetails from '../components/PersonDetails.vue';
import TitledInfo from '../components/TitledInfo.vue';
import Reports from "../components/reports.vue";
import driverLicense from "../components/driverLicense.vue";
import api from "../api/api";

export default {
    name: 'ProfilePage',
    components: {
        PersonDetails,
        TitledInfo,
        Reports,
        driverLicense
    },
    methods : {
      changeWantedState : function () {
        this.person.wanted = !this.person.wanted
      }
    },
    async mounted() {
        const response = await api.profile().getNumOfPostsById(this.$route.params.id);
        this.posts = response.data;
    },
    data() {
        return {
        posts: 0,
        wantedButton: true
        } 
    }
}
</script>

<style scoped>
.row{
    padding: 10px
}
</style>