<template>
<div>
  <Login/>
  <Weather/>
</div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue';
import Weather from '@/components/WeatherCube.vue';

export default {
  name: 'Home',
  components: {
    Login,
    Weather,
  },
};
</script>

<style>

</style>
