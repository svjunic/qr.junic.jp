<template>
  <div>
    <video id="stage" style="border: 1px solid gray"></video>
    <v-btn small id="try" @click="clickHandler" v-show="!isFirstTime">読み取り</v-btn>
    <!-- <v-text-field label="Main input" v-model="input" hide-details="auto"></v-text-field> -->
    <v-dialog v-model="dialog" scrollable max-width="80%">
      <v-card min-width="80vw" min-height="80vh">
        <v-card-title>読み取り結果</v-card-title>
        <v-card-text v-html="customInput"></v-card-text>
        <v-btn color="green darken-1" text @click="dialog = false">閉じる</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      input: '',
      reader: null,
      isFirstTime: true
    };
  },

  async mounted() {
    this.$try = this.$el.querySelector('#try');

    const Reader = (await import('~/my_modules/reader.js')).default;

    this.$stage = document.querySelector('#stage');
    this.reader = new Reader('stage');
    this.read();
  },

  destroyed() {
    this.reader = null;
  },

  computed: {
    customInput() {
      let customInput = this.input;
      if (/^https?:\/\//.test(customInput)) {
        customInput = `<a href="${customInput}">${customInput}</a>`;
      }

      return customInput;
    }
  },

  methods: {
    clickHandler(e) {
      console.log(this.reader);
      e.preventDefault();
      this.read();
    },
    read() {
      this.reader
        .listen()
        .then(result => {
          if (!result) return;
          this.input = result.text;
          this.$try.innerHTML = '再読み込み';
          this.$try.disabled = false;
          //this.$stage.hidden = true;

          console.log(this.input.text);

          this.$store.dispatch('ADD_LIST', {
            date: new Date().getTime(),
            text: this.input
          });
          this.dialog = true;
          this.isFirstTime = false;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style lang="scss">
#stage {
  width: 100%;
  height: 100%;
}
.dialog__slot {
  &-content {
    width: 80vw;
    height: 60vh;
  }
}
</style>
