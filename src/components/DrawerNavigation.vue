<script setup>
const nav = [
  {
    label: "U.S. Map",
    caption: "Clickable SVG Map with Overlay",
    url: "us-map",
  },
];
</script>
<template>
  <q-scroll-area style="height: 200px; max-width: 300px">
    <q-list separator>
      <q-item
        v-for="(item, index) in nav"
        :key="index"
        :to="item.url"
        clickable
        v-ripple
      >
        <q-item-section>
          <q-item-label>{{ item.label }}</q-item-label>
          <q-item-label caption>{{ item.caption }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-scroll-area>
</template>
