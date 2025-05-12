<script setup>
const props = defineProps({
  userEmail: "",
  total: 0,
});
</script>

<template>
  <div class="general__wrapper">
    <div class="user__cont">
      <div class="general__title">
        <h6 class="title">General Info</h6>
      </div>
      <div class="general__info">
        <div class="info__box">
          <span class="info__name">Customer</span>
          <p class="info__text">
            {{ props.userEmail }}
          </p>
        </div>
        <div class="info__box">
          <span class="info__name">Total</span>
          <p class="info__text">${{ props.total }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.general__wrapper {
  width: 100%;
  height: fit-content;
}

.user__cont {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  row-gap: 2.8rem;
}

.general__title {
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--font-color);
}

.title {
  font-size: clamp(2.6rem, 2.253rem + 0.924vw, 3.2rem);
}

.general__info {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2.8rem;
}

.info__box {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info__name {
  font-size: 1.4rem;
  color: var(--card-font);
}

.info__text {
  font-size: clamp(1.6rem, 1.311rem + 0.77vw, 2.1rem);
}

@media screen and (width > 1024px) {
  .title {
    font-size: 3.2rem;
  }

  .general__info {
    grid-template-columns: 1fr 1fr;
  }

  .info__text {
    font-size: 2.1rem;
  }
}
</style>
