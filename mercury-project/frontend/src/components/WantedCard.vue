<template>
  <div>    
    <v-card elevation="2" outlined :max-width="width" :height="height">
      <h1 class="m7">מבוקשים <br>{{ wantedNo }}</h1>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      default: 400
    },
    wantedNo: {
      type: Number
    },
    height: {
        default: 400
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
