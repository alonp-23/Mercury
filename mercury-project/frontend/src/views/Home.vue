
<template>
<div>
  <Weather/>
</div>
</template>

<script>
// @ is an alias to /src
import Weather from '@/components/WeatherCube.vue';

export default {
  name: 'Home',
  components: {
    Weather,
  },
};
</script>

<style>
</style>