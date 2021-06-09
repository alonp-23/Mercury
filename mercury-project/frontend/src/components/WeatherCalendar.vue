<template>
    <v-card
        class="card"
        max-width="800">
        
        <v-bottom-navigation
          :value="value"
        >
          <button 
            @click="reveal = true">
            <span>Weather</span>
          </button>
          <button
            @click="reveal = false">
            <span>Calendar</span>
          </button>
        </v-bottom-navigation>

        <Calendar v-if="!reveal"></Calendar>

        <v-expand-transition>
      <v-card
        class="card">
        <Weather v-if="reveal"></Weather>
      </v-card>
    </v-expand-transition>
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
    position: fixed;
    bottom: 10px;
    width: 40%;
    height: 40%;
    border-radius: 5%;
}
button {
  position: relative;
}
</style>