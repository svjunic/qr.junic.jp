<template>
  <div class="reader__wrap">
    <div class="reader__stage-wrap">
      <video id="stage"></video>
    </div>
    <!-- <v-text-field label="Main input" v-model="input" hide-details="auto"></v-text-field> -->
    <v-dialog v-model="dialog" scrollable max-width="80%">
      <v-card min-width="80vw" min-height="80vh">
        <v-card-title>読み取り結果</v-card-title>
        <v-card-text>
          <div class="reader__dialog-date" v-html="date"></div>
          <div class="reader__dialog-text" v-html="customInput"></div>
        </v-card-text>
        <v-btn color="green darken-1" text @click="dialogCloseClickHandler">閉じる</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { ScriptingDelay } from '~/my_modules/Beans.js';

export default {
  data() {
    return {
      dialog: false,
      input: '',
      date: '',
      reader: null
    };
  },

  async mounted() {
    const Reader = (await import('~/my_modules/Reader.js')).default;

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
        customInput = `<a href="${customInput}" target="_blank" rel="noopener">${customInput}</a>`;
      }

      return customInput;
    }
  },

  methods: {
    async dialogCloseClickHandler(e) {
      console.log(this.reader);
      e.preventDefault();
      this.dialog = false;
      await ScriptingDelay(1000);
      this.read();
    },
    read() {
      this.reader
        .listen()
        .then(result => {
          if (!result) return;
          this.input = result.text;
          const date = new Date();
          this.date = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
          this.$store.dispatch('ADD_ITEM', {
            datetime: date.getTime(),
            date: this.date,
            text: this.input
          });
          this.dialog = true;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style lang="scss">
.reader__wrap {
  height: 100%;
}

#stage {
  box-sizing: border-box;
  width: 100%;
  border: 1px solid gray;
}

.dialog__slot {
  &-content {
    width: 80vw;
    height: 60vh;
  }
}

.reader {
  // TODO: 未対応
  &_stage-wrap {
    overflow: hidden;
  }

  &__dialog {
    &-date {
      font-size: 0.7rem;
    }
  }
}
</style>
