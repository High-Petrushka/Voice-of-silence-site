<script setup>
import { onMounted, onUnmounted } from "vue";
import useGoods from "../../../composables/useGoods";
import useUsers from "../../../composables/useUsers";

const props = defineProps({
  itemType: "",
  itemId: "",
  itemCartId: "",
});

const emit = defineEmits(["priceUp", "priceDown"]);

const curItem = useGoods().getGood(props.itemType, props.itemId);

onMounted(() => {
  emit("priceUp", curItem.price);
});

onUnmounted(() => {
  emit("priceDown", curItem.price);
});

function btnAction() {
  useUsers().delFromCart(props.itemCartId);
  console.log(props.itemCartId);
}
</script>

<template>
  <div class="item__cont">
    <div class="info__cont">
      <div class="img__box">
        <img :src="curItem.image" alt="Product image" />
      </div>
      <div class="text__box">
        <div class="title__box">
          <h6 class="info__title">{{ curItem.name }}</h6>
        </div>
        <div class="price__box">
          <p class="price__text">${{ curItem.price }}</p>
        </div>
      </div>
    </div>
    <div class="button__cont">
      <button class="remove__btn" @click="btnAction">Remove</button>
    </div>
  </div>
</template>

<style scoped>
.item__cont {
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  gap: 2rem;
}

.info__cont {
  display: flex;
  gap: 1rem;
}

.text__box {
  flex-grow: 1;
}

.img__box {
  width: clamp(10rem, 1.603rem + 22.392vw, 18.8rem);
  height: clamp(10rem, 1.603rem + 22.392vw, 18.8rem);
}

.img__box img {
  width: 100%;
  height: auto;

  object-fit: cover;
}

.text__box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info__title {
  font-size: clamp(2.4rem, 1.637rem + 2.036vw, 3.2rem);
}

.price__text {
  font-size: clamp(1.8rem, 1.514rem + 0.763vw, 2.1rem);
}

.button__cont {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.remove__btn {
  background: var(--element-color);
  border: 1px solid var(--element-color);
  color: var(--reversed-font);
}

.remove__btn:hover {
  background: transparent;
  border: 1px solid currentColor;
  color: var(--font-color);
}

@media screen and (width > 768px) {
  .item__cont {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto;
  }

  .img__box {
    width: 188px;
    height: 188px;
  }

  .info__title {
    font-size: 3.2rem;
  }

  .price__text {
    font-size: 2.1rem;
  }
}
</style>
