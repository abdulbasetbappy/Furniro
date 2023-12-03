<template>
  <v-app>
    <default-bar  style="z-index: 3;"/>

    <default-view style="z-index: 0;"/>
    <default-footer style="z-index: 1;"/>
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import DefaultFooter from './FooterBar.vue'
</script>
