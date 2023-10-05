<script setup>
import { computed } from "vue";
import DrawerNavigation from "./DrawerNavigation.vue";
import { useApplication } from "stores/application.js";
const applicationStore = useApplication();
const leftDrawerOpen = applicationStore.drawer;
</script>
<template>
  <q-drawer v-model="applicationStore.drawer" side="left" bordered>
    <DrawerNavigation />
  </q-drawer>
</template>
