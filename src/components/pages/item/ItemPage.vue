<script setup>
import { useRouter } from "vue-router";
import useGoods from "../../../composables/useGoods";
import ItemPattern from "../../action/item/ItemPattern.vue";

const router = useRouter();

const chapter = router.currentRoute.value.params.type;
const itemId = router.currentRoute.value.params.id;

const item = useGoods().getGood(chapter, itemId);
</script>

<template>
  <div class="cont">
    <ItemPattern :itemName="item.name" :itemPrice="item.price" :itemType="item.type" :itemImg="item.image"
      :itemId="item.id" :itemDesc="item.descript" />
  </div>
</template>

<style scoped>
.cont {
  margin-top: 0rem;
}

@media screen and (width > 1024px) {
  .cont {
    margin-top: 8rem;
  }
}
</style>
