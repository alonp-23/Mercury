<template>
    <v-card>
        <v-calendar
            :attributes='attributes'
            class='calendar'
            />
    </v-card>
</template>

<script>
import holidaysUS from '../assets/holidaysUS.json'
import holidaysIL from '../assets/holidaysIL.json'
import holidaysJO from '../assets/holidaysJO.json'

    export default {
      data:() => ({
        usHolidays:[{}],
        ilHolidays:[{}],
        joHolidays:[{}]
      }),
      mounted () {
        this.usHolidays = holidaysUS.map(holiday => {
            var date = new Date(holiday.date);
            date.setDate(date.getDate() + 1);
            holiday.date = date.toISOString().substr(0, 10)
            return holiday;
       }) ,
       this.ilHolidays = holidaysIL.map(holiday => {
            var date = new Date(holiday.date);
            date.setDate(date.getDate() + 1);
            holiday.date = date.toISOString().substr(0, 10)
            return holiday;
       }),
       this.joHolidays = holidaysJO.map(holiday => {
            var date = new Date(holiday.date);
            date.setDate(date.getDate() + 1);
            holiday.date = date.toISOString().substr(0, 10)
            return holiday;
       }) 
    },
      computed: {
        attributes() {
          return [
            ...this.usHolidays.map(holiday => ({
              dates: holiday.date,
              dot: {
                color: "red",
                class: '',
              },
              popover: {
                label: holiday.name,
              },
              customData: holiday,
            })),
            ...this.ilHolidays.map(holiday => ({
              dates: holiday.date,
              dot: {
                color: "blue",
                class: '',
              },
              popover: {
                label: holiday.name,
              },
              customData: holiday,
            })),
            ...this.joHolidays.map(holiday => ({
              dates: holiday.date,
              dot: {
                color: "green",
                class: '',
              },
              popover: {
                label: holiday.name,
              },
              customData: holiday,
            })),
          ];
        },
      },
    };
</script>

<style scoped>
.calendar {
  width: 470px;
  height: 380px; 
}
</style>