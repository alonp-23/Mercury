<template>
  <div class="driverLicense">
    <template>
  <v-card
    color="#141d33"
    style="color:white;"
    class="mx-auto rounded-card" 
    width="270"
  >
    <v-card-title  class="justify-center">
      <h2 class="justify-center">
        רשיון נהיגה
      </h2>
      </v-card-title>
      <v-row>
      <h4 class="status" >
        סטטוס {{license.status}}     
      </h4>
      </v-row>
      <v-row>
      <b class="date text-center" >
      <br>
      תאריך
      </b>
      </v-row>
      <v-container class=" ">
    <v-row >
      
        <v-col :key="n" class="colStyle">
          <h4 class="text-center">
            סיום
            {{this.formmatDate(license.endingDate)}}
         </h4>
        </v-col>
        <v-responsive
          v-if="n === 2"
          :key="`width-${n}`"
          width="100%"
        ></v-responsive>
        <v-col :key="n">
         <h4 class="text-center">
            התחלה
            {{this.formmatDate(license.startingDate)}}
         </h4>
        </v-col>
        <v-responsive
          v-if="n === 2"
          :key="`width-${n}`"
          width="100%"
        ></v-responsive>
       
    </v-row>
    
  </v-container>

  <br>
  <v-row class="justify-center">
  <h2 class="justify-center">
  מספר רישיון
    <br>
    <div style="margin-left: 2vh">
  {{license.licenseNumber}}
  </div>
  </h2>
  </v-row>


  </v-card>
</template>
  </div>
</template>
<script>
import api from '../api/api';

export default {
  name: 'driverLicense',
  props: {
    personId: {
      type: String,
      required: true
    }
  },
  methods : {
    formmatDate : function (date) {
      const newDate = new Date(date)
      return (newDate.toLocaleDateString('he-IL'))
    }
  },
  data () {
    return {
      license : {} 
    }
  },
  async mounted() {
    const response = await api.profile().getLicenseById(this.personId);
    this.license = response.data[0];
    console.log(typeof this.license.endingDate);
    }
  }
</script>

<style scoped>
.status{
    margin-top: 1vh;
    margin-left: 23vh ;
}
.rounded-card{
    border-radius:10px;
}
.date{
    margin-left: 17vh;
}
.colStyle{
    margin-left: 7vh
}
.colStyleDate{
    margin-left: 4vh;
    margin-bottom: 10vh;
}
</style>