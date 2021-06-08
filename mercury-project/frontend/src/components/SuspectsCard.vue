<template>
  <div>
    <v-card elevation="2" outlined :max-width="width" :height="height">
      <h1 class="m7">חשודים <br />{{ suspectNo }}</h1>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      default: 400
    },
    suspectNo: {
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
  display: block;
  margin: auto;
}
</style>
