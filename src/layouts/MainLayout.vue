<script setup>
import LayoutHeader from "../components/LayoutHeader.vue";
import LayoutFooter from "../components/LayoutFooter.vue";
import LayoutLeftDrawer from "../components/LayoutLeftDrawer.vue";
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <LayoutHeader />
    <LayoutFooter />
    <LayoutLeftDrawer />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
