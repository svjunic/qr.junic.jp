<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-spacer />
      <nuxt-link to="/" class="title">
        <v-toolbar-title v-text="title" />
      </nuxt-link>
      <v-spacer />
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :right="right" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer :fixed="fixed" app class="no-gutters col col-12 justify-center">
      <p class="mb-0">
        <small>&copy; <a href="https://sv.junic.jp" rel="noopener" target="_blank">sv.junic</a>. All Rights Reserved.</small>
      </p>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Scan',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'History',
          to: '/history'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Barcode Scanner'
    };
  }
};
</script>

<style lang="scss">
.title {
  text-decoration: none;
  &:active,
  &:focus,
  &:active,
  &:visited {
    color: #ffffff;
  }
}
.copyright {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
