<template>
  <v-layout column justify-center align-center>
    <QRReader />
  </v-layout>
</template>

<script>
import QRReader from '~/components/QRReader.vue';

export default {
  components: {
    QRReader
  }
};
</script>
