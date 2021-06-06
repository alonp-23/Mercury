<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <EventList></EventList>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import EventList from '@/components/EventList.vue';

export default {
  name: 'Home',
  components: {
    EventList,
  },
};
</script>
