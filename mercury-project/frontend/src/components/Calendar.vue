<template>
        <calendar
            :attributes='attributes'
            class='calendar'
            />
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
            date.setFullYear(2021);
            holiday.date = date.toISOString().substr(0, 10)
            return holiday;
       }) ,
       this.ilHolidays = holidaysIL.map(holiday => {
            var date = new Date(holiday.date);
            date.setDate(date.getDate() + 1);
            date.setFullYear(2021);
            holiday.date = date.toISOString().substr(0, 10)
            return holiday;
       }),
       this.joHolidays = holidaysJO.map(holiday => {
            var date = new Date(holiday.date);
            date.setDate(date.getDate() + 1);
            date.setFullYear(2021);
            holiday.date = date.toISOString().substr(0, 10)
            return holiday;
       }) 
    },
      computed: {
        attributes() {
          var arr = [
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
          arr = new Set(arr)
          return [...arr]
        },
      },
    };
</script>

<style scoped>
.calendar {
  width: 100%;
  height: 340px; 
  background-color: rgba(124, 127, 141, 0.9);
}
</style>