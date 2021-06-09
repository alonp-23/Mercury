<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar
          flat
        >
          <v-btn
            outlined
            class="mr-4"
            color="grey darken-2"
            @click="setToday"
          >
            Today
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="prev"
          >
            <v-icon small>
              mdi-chevron-left
            </v-icon>
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="next"
          >
            <v-icon small>
              mdi-chevron-right
            </v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="70%">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="#7c7f8d"
          :events="events"
          :event-color="getEventColor"
          :type="type"
          @change="updateRange"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import holidaysIL from '../assets/holidaysIL.json'
  export default {
    data: () => ({
      focus: '',
      type: 'month',
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      colors: ['#5f0909','#1e5f09', '#4e0c52'],
      ilHolidays:[{}],
    }),
    mounted () {
      this.$refs.calendar.checkChange()
    },
    methods: {
      viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = ''
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      convertTZ(date, tzString) {
          return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
      },
      updateRange () {
        this.ilHolidays = holidaysIL.map(holiday => {
            var date = new Date(holiday.date);
            date.setDate(date.getDate() + 1);
            date.setFullYear(2021);
            holiday.date = date.toISOString().substr(0, 10)
            return holiday;
       })

        const events = []

        
        for (let i = 0; i < this.ilHolidays.length; i++) {
          const allDay = this.rnd(0, 3) === 0
          var holiday = this.ilHolidays[i]
          //var date = new Date(holiday.date)
          //date = date.toUTCString()+"+0300 (Israel Daylight Time)"
          //date = date.substr(0, 3) + date.substr(7, 5) + date.substr(5, 2) + date.substr(11)
          events.push({
            name: holiday.name,
            start: holiday.date,
            end: holiday.date,
            color: this.colors[this.rnd(0, this.colors.length - 1)],
            timed: !allDay,
          })
        }
//Sun Jun 20 2021 05:45:00 GMT+0300 (Israel Daylight Time)
// Thu, 07 Jan 2021 00:00:00 GMT+0300 (Israel Daylight Time)
        this.events = events;
      },
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
    },
  }
</script>