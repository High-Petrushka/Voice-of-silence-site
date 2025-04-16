<script setup>
const props = defineProps({
  itemName: "",
  itemPrice: "",
  itemType: "",
  itemImg: "",
});
</script>

<template>
  <div class="card__box">
    <div class="image__box">
      <img class="item__img" src="../../assets/products/headphones/sony_wh1000xm5_black.jpg" alt="Product image" />
    </div>
    <div class="title__box">
      <div class="type__box">
        <span class="item__type">{{ props.itemType }}</span>
      </div>
      <div class="name__box">
        <h6 class="item__name">{{ props.itemName }}</h6>
      </div>
    </div>
    <div class="price__box">
      <span class="item__price">$ {{ props.itemPrice }}</span>
      <button class="item__btn"><span>Buy</span></button>
    </div>
  </div>
</template>

<style scoped>
.card__box {
  width: 100%;
  height: fit-content;

  padding: clamp(1.5rem, -1.1rem + 6.934vw, 6rem);
  border-radius: 1rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  gap: clamp(1.6rem, 1.138rem + 1.233vw, 2.4rem);

  transition:
    box-shadow 0.35s ease-out,
    transform 0.35s ease-out;
}

.card__box:hover {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transform: translateY(-5px);
}

.item__img {
  width: 100%;
  height: 100%;

  object-fit: contain;
}

.item__name {
  font-size: clamp(1.4rem, 0.36rem + 2.773vw, 3.2rem);
  margin-top: 0.5rem;
}

.item__type {
  font-size: clamp(1.4rem, 0.996rem + 1.079vw, 2.1rem);
}

.item__price {
  font-size: clamp(1.4rem, 1.053rem + 0.924vw, 2rem);
  font-weight: 700;
  line-height: 1;
}

.price__box {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.item__btn {
  width: 32px;
  height: 32px;

  border-radius: 0.5rem;

  position: relative;
}

.item__btn::before {
  content: "";

  width: 1px;
  height: 15px;

  background-color: currentColor;
  border-radius: 10rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.item__btn::after {
  content: "";

  width: 15px;
  height: 1px;

  background-color: currentColor;
  border-radius: 10rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.item__btn span {
  display: none;
}

@media screen and (width >=1024px) {
  .card__box {
    grid-template-rows: 408px repeat(2, auto);
    gap: 2.4rem;

    padding: 6rem;
  }

  .item__name {
    font-size: 3.2rem;
  }

  .item__type {
    font-size: 2.1rem;
  }

  .item__price {
    font-size: 2rem;
  }

  .item__btn::before {
    content: "Buy";

    width: fit-content;
    height: fit-content;

    background-color: transparent;
  }

  .item__btn::after {
    display: none;
  }
}
</style>
