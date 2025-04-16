<script setup>
import { onMounted, onUnmounted, reactive } from "vue";

const local = reactive({
  sliderOrder: [1, 0, 0, 0],
  curImg: 0,
});

function changeImage() {
  for (let i = 0; i < local.sliderOrder.length; i++) {
    local.sliderOrder[i] = 0;
  }

  if (local.curImg >= 3) {
    local.curImg = 0;
  } else {
    local.curImg++;
  }

  local.sliderOrder[local.curImg] = 1;
  console.log(local.curImg);
}

let intervalId;

onMounted(() => {
  intervalId = setInterval(() => {
    changeImage();
  }, 10000);
});

onUnmounted(() => clearInterval(intervalId));
</script>

<template>
  <div class="cont">
    <div class="slider__cont">
      <figure class="slider__el on__top">
        <img
          src="../../assets/main-slider/headphones-slider-2.jpg"
          alt="${0}"
          :style="{ opacity: local.sliderOrder[0] }"
        />
      </figure>
      <figure class="slider__el on__top">
        <img
          src="../../assets/main-slider/home-speaker-slider.jpg"
          alt="${0}"
          :style="{ opacity: local.sliderOrder[1] }"
        />
      </figure>
      <figure class="slider__el on__top">
        <img
          src="../../assets/main-slider/speakers-slider.jpg"
          alt="${0}"
          :style="{ opacity: local.sliderOrder[2] }"
        />
      </figure>
      <figure class="slider__el">
        <img
          src="../../assets/main-slider/vinyl-slider.jpg"
          alt="${0}"
          :style="{ opacity: local.sliderOrder[3] }"
        />
      </figure>
    </div>
  </div>
</template>

<style scoped>
img {
  max-width: 100%;
  height: clamp(10.625rem, 3.763rem + 29.276vw, 22.5rem);

  aspect-ratio: 24 / 9;
  object-fit: cover;

  mask-image: linear-gradient(
    90deg,
    transparent,
    #222 15%,
    #222 85%,
    transparent 100%
  );

  transition: 1s ease-in;
}

.cont {
  width: 100%;
  padding: 0rem;

  position: relative;
  background-color: #000;
}

.slider__cont {
  width: fit-content;
  height: 100%;

  position: relative;
  overflow: hidden;
}

.slider__el {
  display: grid;
  place-items: center;
}

.on__top {
  position: absolute;
}

@media screen and (width >=1024px) {
  img {
    height: 360px;
    aspect-ratio: 24 / 9;
  }
}
</style>
