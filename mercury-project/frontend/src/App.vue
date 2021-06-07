<template>
  <v-app>
    <EventList></EventList>
  </v-app>
</template>

<script>
import EventList from '@/components/EventList'

export default {
  name: 'App',
  components: {
      EventList
  },

  data: () => ({
    //
  }),
};
</script>
