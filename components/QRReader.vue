<template>
  <div>
    <video id="stage" style="border: 1px solid gray"></video>
    <v-btn small id="try" @click="clickHandler">読み取り</v-btn>
    <input type="text" id="code" v-model="input" />
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
      const Reader = await import('~/my_modules/reader.js').default;
      this.reader = new Reader();
      this.$stage = this.$el.querySelector('#reader');
      this.$try = this.$el.querySelector('#reader');
    }
  },

  destroyed() {
    this.reader = '';
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
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
