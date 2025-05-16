<script setup>
import MainSlider from "../action/MainSlider.vue";
import Pattern from "../Pattern.vue";
import AdCard from "../action/AdCard.vue";
import LocationCard from "../action/LocationCard.vue";

import { reactive } from "vue";

const local = reactive({
  adInfo: {
    title: "Meet Marshall Acton III",
    text: "Featuring breakthrough sound technology, this speaker brings your entertainment to life with superior clarity, depth, and dimension.",
    image: "/Voice-of-silence-site/assets/marshall_action_III.jpg",
  },
  patternShow: true,
});
</script>

<template>
  <MainSlider />
  <AdCard :adTitle="local.adInfo.title" :adText="local.adInfo.text" :adImg="local.adInfo.image" />
  <LocationCard />
  <Pattern v-if="local.patternShow" />
</template>

<style scoped>
.cont {
  display: grid;
  place-items: center;
}
</style>
