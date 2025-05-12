<script setup>
import { onMounted, ref } from "vue";

import useUsers from "../../../composables/useUsers";
import useGoods from "../../../composables/useGoods";

import OrderForm from "../../action/OrderForm.vue";
import GeneralInfo from "../../action/user/GeneralInfo.vue";

const userId = useUsers().getActUser();
const user = useUsers().getUser(userId);

const totalSum = ref(0);

onMounted(() => {
  for (let i of user.cart) {
    const itemPrice = Number(useGoods().getGood(i.itemType, i.itemId).price);
    totalSum.value += itemPrice;
  }
});
</script>

<template>
  <div class="cont">
    <div class="general__cont">
      <GeneralInfo :userEmail="user.email" :total="totalSum" />
    </div>
    <div class="form__cont">
      <OrderForm :userName="user.firstName" :userSurname="user.lastName" :userEmail="user.userEmail" />
    </div>
    <div class="button__cont"></div>
  </div>
</template>

<style scoped>
.cont {
  padding-top: 8rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;
}

@media screen and (width > 1024px) {
  .cont {
    gap: 6rem;
  }
}
</style>
