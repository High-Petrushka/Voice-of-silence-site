<script setup>
const props = defineProps({
  adTitle: "",
  adText: "",
  adImg: "",
});
</script>

<template>
  <div class="cont">
    <div class="card__cont">
      <div class="img__box">
        <img class="ad__img" :src="props.adImg" alt="advertisement image" />
      </div>
      <div class="ad__box">
        <div class="ad__title">
          <h5>{{ props.adTitle }}</h5>
        </div>
        <div class="ad__text">
          <p class="ad__font">
            {{ props.adText }}
          </p>
        </div>
        <div class="ad__btn">
          <button>Show now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card__cont {
  width: 100%;
  height: fit-content;

  border-radius: 2.5rem;
  overflow: hidden;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
}

.ad__img {
  width: 100%;
  height: 100%;

  object-fit: cover;
}

.ad__box {
  background-color: var(--card-color);

  padding: clamp(2.4rem, 0.551rem + 4.931vw, 5.6rem);

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  gap: 2rem;
}

.ad__title {
  width: 100%;
  height: fit-content;
}

.ad__text {
  width: 100%;
  height: fit-content;
}

.ad__btn {
  width: 100%;
  height: fit-content;
}

.ad__font {
  font-size: clamp(1.6rem, 1.311rem + 0.77vw, 2.1rem);
  color: var(--card-font);
}

@media screen and (width >=1024px) {
  .card__cont {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }

  .ad__box {
    padding: 5.6rem;
  }

  .ad__font {
    font-size: 2.1rem;
  }
}
</style>
