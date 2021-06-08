<template>
    <v-card
        class="card"
        max-width="800">
        <Calendar v-if="!reveal"></Calendar>
        <v-card-actions>
          <v-btn
            text
            color="primary"
            @click="reveal = true"
          >
            Weather
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <Weather></Weather>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="primary"
            @click="reveal = false"
          >
            Calendar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
    </v-card>
  
</template>

<script>
  import Calendar from '@/components/Calendar'
  import Weather from '@/components/WeatherCube'


  export default {
    data: () => ({
      reveal: false,
    }),
    components: {
      Calendar,
      Weather
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
v-bth {
  position: relative;
}
</style>