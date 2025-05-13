<script setup>
import { onMounted, reactive, ref } from "vue";

import useUsers from "../../../composables/useUsers";
import useGoods from "../../../composables/useGoods";

import OrderForm from "../../action/OrderForm.vue";
import GeneralInfo from "../../action/user/GeneralInfo.vue";

const local = reactive({
  inp: {
    nameInp: "",
    surnameInp: "",
    mobileInp: "",
    addressInp: "",
    cityInp: "",
    paymentInp: "",
  },
});

const userId = useUsers().getActUser();
const user = useUsers().getUser(userId);

const totalSum = ref(0);

function compareFilling(text) {
  const check = useUsers().checkFilling(local.inp[text]);
  let answer = 0;

  switch (check) {
    case "OK":
      answer = 1;
      break;
    case "EmptyError":
      console.log("error");
      break;
  }
}

function btnAction() {
  let x3 = compareFilling("addressInp");
  let x4 = compareFilling("cityInp");
  let x5 = compareFilling("paymentInp");
}

onMounted(() => {
  for (let i of user.cart) {
    const itemPrice = Number(useGoods().getGood(i.itemType, i.itemId).price);
    totalSum.value += itemPrice;
  }
});

function handleInp(type, info) {
  local.inp[type] = info;
}
</script>

<template>
  <div class="cont">
    <div class="general__cont">
      <GeneralInfo :userEmail="user.email" :total="totalSum" />
    </div>
    <div class="form__cont">
      <OrderForm
        :userName="user.firstName"
        :userSurname="user.lastName"
        :userEmail="user.userEmail"
        @dataInp="handleInp"
      />
    </div>
    <div class="button__cont">
      <button class="order__btn" @click="btnAction">Checkout</button>
    </div>
  </div>
</template>

<style scoped>
.cont {
  padding-top: 8rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.button__cont {
  padding: 0rem clamp(0rem, -3.236rem + 8.629vw, 5.6rem);
}

.order__btn {
  padding: 1.5rem 3.5rem;
  width: 100%;
}

@media screen and (width > 1024px) {
  .cont {
    gap: 6rem;
  }

  .button__cont {
    padding: 0rem 5.6rem;
  }
}
</style>
