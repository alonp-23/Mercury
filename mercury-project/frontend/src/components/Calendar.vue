<template>
<div>
<v-date-picker
        v-model="date1"
        :events="arrayEvents"
        event-color="green lighten-1"
      ></v-date-picker></div>
    
</template>

<script>
import holidaysIL from '../assets/holidaysIL.json'

export default {
  name: 'Calendar',
  data: () => ({
      arrayEvents: null,
      date1: new Date().toISOString().substr(0, 10),
    }),

    // mounted () {
    //    var holidaysILArr = holidaysIL.map((holiday) => {
    //        console.log(holiday.date)
    //        holiday.date;
    //    })
    //    this.arrayEvents = holidaysILArr.toISOString().substr(0, 10)
    // },

    // methods: {
    //   functionEvents (date) {
    //     const [,, day] = date.split('-')
    //     if ([12, 17, 28].includes(parseInt(day, 10))) return true
    //     if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f']
    //     return false
    //   },
    // },

   
}
</script>
<style >
</style>