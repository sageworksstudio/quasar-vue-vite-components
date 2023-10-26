<script setup>
import { ref } from "vue";
import axios from "axios";
const fact = ref("");
const source = ref("");
function randomFact() {
  axios({
    method: "get",
    url: "https://uselessfacts.jsph.pl/api/v2/facts/random",
    headers: { Accept: "application/json" },
  }).then(function (response) {
    fact.value = response.data.text;
    source.value = response.data.source_url;
  });
}
randomFact();
</script>
<template>
  <section class="q-pa-md row items-start q-gutter-md">
    <q-card class="col fit">
      <q-card-section>
        <p class="text-caption">
          Note: None of these "facts" have been fact-checked.
        </p>
      </q-card-section>
    </q-card>
    <q-card class="col fit">
      <q-card-section>
        <p>{{ fact }}</p>
        <p>
          Source: <a :href="source">{{ source }}</a>
        </p>
        <q-btn
          color="white"
          class="q-my-lg"
          text-color="black"
          label="Get A New Fact"
          @click="randomFact"
        />
      </q-card-section>
    </q-card>
  </section>
</template>
