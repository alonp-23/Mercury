<template>
  <div class="about">
    <h1>This is an about page</h1>
    <InteList/>
  </div>
</template>

<script>
import InteList from '@/components/InteList.vue';

export default {
  name: 'Home',
  components: {
    InteList,
  },
};
</script>