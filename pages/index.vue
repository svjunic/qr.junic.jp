<template>
  <v-layout column justify-center align-center>
    <QRReader />
    <v-btn color="mt-5 secondary darken-1" block to="/history/">履歴</v-btn>
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

<style lang="scss">
.layout {
  height: 100%;
}
.block {
  display: block;
}
</style>
