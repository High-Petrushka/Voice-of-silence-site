<script setup>
import useGoods from "../../composables/useGoods";
import ItemCard from "../action/ItemCard.vue";

const itemList = useGoods().accessoriesList.value;
</script>

<template>
  <div class="cont">
    <h1>Accessories</h1>
  </div>
  <div class="cont">
    <div class="item__list">
      <div class="card__cont" v-for="item in itemList">
        <ItemCard
          :itemName="item.name"
          :itemPrice="item.price"
          :itemType="item.type"
          :itemImg="item.image"
          :itemId="item.id"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.cont {
  display: grid;
  place-items: center;
}

.item__list {
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  gap: 2rem;
}

.card__cont {
  width: fit-content;
  height: fit-content;
}

@media screen and (width >=1024px) {
  .item__list {
    gap: 6rem;
  }
}
</style>
