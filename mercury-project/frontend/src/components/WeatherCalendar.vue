<template>
    <v-card
        class="card"
        max-width="500"
        >

        <v-bottom-navigation
          :value="value"
        >
          <button
            id = "weatherButton" 
            @click="reveal = true">
            <span style="color:#FFF">Weather <v-icon style="color:#FFF">mdi-weather-partly-snowy-rainy</v-icon></span>
          </button>
          <button
            id = "calendarButton" 
            @click="reveal = false">
            <span style="color:#FFF">Calendar <v-icon style="color:#FFF">mdi-calendar-blank-multiple</v-icon></span>
          </button>
        </v-bottom-navigation>

        <Calendar v-if="!reveal"></Calendar>
        <Weather v-if="reveal"></Weather>
    </v-card>
  
</template>

<script>
  import Calendar from '@/components/Calendar'
  import Weather from '@/components/WeatherCube1'

  export default {
    data: () => ({
      reveal: false,
      value: 1
    }),
    components: {
      Calendar,
      Weather,
    },
  }
</script>

<style scoped>
.card {
    position: relative;
    bottom: 20px;
    width: 40%;
    height: 40%;
    border-radius: 5%;
    background-color: #282828 !important; 
}
.v-bottom-navigation.v-item-group.theme--light{
  background-color: #282828 !important;
  
}
button {
  position: relative;
  margin-left: 30px;
  margin-right: 30px;
}
</style>