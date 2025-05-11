<script setup>
import { useRouter } from "vue-router";
import useUsers from "../../composables/useUsers";
import { reactive } from "vue";

const props = defineProps({
  itemName: "",
  itemPrice: "",
  itemType: "",
  itemImg: "",
  itemId: "",
});

const local = reactive({
  btnText: "Buy",
  inCart: false,
});

const router = useRouter();

function routeItem(chapter, id) {
  router.push({ path: `/shop/${chapter}/${id}` });
}

function btnAction() {
  const actUser = useUsers().getActUser();

  if (actUser === null) {
    router.push({ path: "/authentification" });
  } else {
    if (!local.inCart) {
      console.log("Add");
      local.btnText = "Del";
      local.inCart = true;
      useUsers().addToCart(props.itemType, props.itemId);
    } else {
      console.log("Del");
      local.btnText = "Buy";
      local.inCart = false;
    }
  }
}
</script>

<template>
  <div class="card__box">
    <div class="image__box">
      <img class="item__img" :src="props.itemImg" alt="Product image"
        @click="routeItem(props.itemType, props.itemId)" />
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
      <button class="item__btn" @click="btnAction">
        <div class="btn__content" :class="{ cross__rotate: local.inCart }"></div>
        <div class="btn__text">{{ local.btnText }}</div>
      </button>
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
  cursor: pointer;
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

/* Setting a 'display: none' property for a button to hide it till future rework */
.item__btn {
  width: 32px;
  height: 32px;

  border-radius: 0.5rem;

  position: relative;
  display: none;
}

.btn__contnent {
  width: 100%;
  height: 100%;

  display: block;

  position: relative;
  transform: rotate(0deg);

  transition: transform 0.35s ease;
}

.btn__rotate {
  transform: rotate(45deg);
}

.btn__content::before {
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

.btn__content::after {
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

.btn__text {
  width: 100%;
  height: 100%;

  display: none;
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

  /*
  .item__btn::before {
    content: "Buy";

    width: fit-content;
    height: fit-content;

    background-color: transparent;
  }
  */

  .btn__content {
    display: none;
  }

  .btn__text {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item__btn::after {
    display: none;
  }
}
</style>
