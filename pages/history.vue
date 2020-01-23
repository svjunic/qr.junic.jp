<template>
  <v-layout column justify-center align-center>
    <v-list min-width="100%" max-width="100%" two-line>
      <v-list-item v-for="(item, index) in history" :key="index">
        <v-list-item-content @click.prevent="open(index)" :data-index="index">
          <v-list-item-subtitle v-text="item.date"></v-list-item-subtitle>
          <v-list-item-title v-text="item.text"></v-list-item-title>
          <v-spacer></v-spacer>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click.prevent="deleteItem(index)">
            <v-icon color="grey lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-dialog v-model="dialog" scrollable max-width="80%">
      <v-card min-width="80vw" min-height="80vh">
        <v-card-title>読み取り結果</v-card-title>
        <v-card-text>
          <div class="history__dialog-date" v-html="showitem.date"></div>
          <div class="history__dialog-text" v-html="customInput"></div>
        </v-card-text>
        <v-btn color="green darken-1" text @click="dialog = false">閉じる</v-btn>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import QRReader from '~/components/QRReader.vue';

var a = new Date();

a.toUTCString;

export default {
  components: {
    QRReader
  },

  data() {
    return {
      showitem: {
        datetime: 0,
        date: '',
        text: ''
      },
      dialog: false,
      input: '',
      reader: null,
      isFirstTime: true
    };
  },

  computed: {
    ...mapState(['history']),
    customInput() {
      let customInput = this.showitem.text;
      if (/^https?:\/\//.test(customInput)) {
        customInput = `<a href="${customInput}" target="_blank" rel="noopener">${customInput}</a>`;
      }
      return customInput;
    }
  },

  methods: {
    open(index) {
      this.showitem = this.history[index];
      this.dialog = true;
    },
    deleteItem(index) {
      this.$store.dispatch('DELETE_ITEM', index);
    }
  }
};
</script>

<style lang="scss">
.history {
  &__dialog {
    &-date {
      font-size: 0.7rem;
    }
  }
}
</style>
