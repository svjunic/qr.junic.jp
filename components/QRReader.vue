<template>
  <div>
    <video id="stage" style="border: 1px solid gray"></video>
    <v-btn small id="try" @click="clickHandler">読み取り</v-btn>
    <v-text-field label="Main input" v-model="input" hide-details="auto"></v-text-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      reader: null
    };
  },

  async mounted() {
    if (process.browser) {
      this.$try = this.$el.querySelector('#try');

      const Reader = (await import('~/my_modules/reader.js')).default;

      this.$stage = document.querySelector('#stage');
      this.reader = new Reader('stage');
    }
  },

  destroyed() {
    this.reader = null;
  },

  methods: {
    clickHandler(e) {
      console.log(this.reader);
      e.preventDefault();
      this.reader
        .listen()
        .then(code => {
          if (!code) return;
          this.input = code;
          this.$try.innerHTML = '再読み込み';
          this.$try.disabled = false;
          this.$stage.hidden = true;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
