<template>

<div>
  <Weather/>
</div>
</template>

<script>
// @ is an alias to /src
import Weather from '@/components/WeatherCalendar.vue';

export default {
  name: 'Home',
  components: {
    Weather,
  },
};
</script>
