<script setup>
import { onMounted, reactive, ref } from "vue";

import { useRouter } from "vue-router";
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
  error: {
    nameInp: { text: "", isOccured: false },
    surnameInp: { text: "", isOccured: false },
    mobileInp: { text: "", isOccured: false },
    addressInp: { text: "", isOccured: false },
    cityInp: { text: "", isOccured: false },
    paymentInp: { text: "", isOccured: false },
  },
});

const userId = useUsers().getActUser();
const user = useUsers().getUser(userId);

const router = useRouter();

const totalSum = ref(0);

function compareFilling(text) {
  const check = useUsers().checkFilling(local.inp[text]);
  let answer = 0;

  switch (check) {
    case "OK":
      answer = 1;
      break;
    case "EmptyError":
      local.error[text].text = "Required to be filled!";
      local.error[text].isOccured = true;
      break;
  }

  return answer;
}

function btnAction() {
  let x1 = compareFilling("nameInp");
  let x2 = compareFilling("surnameInp");
  let x3 = compareFilling("mobileInp");
  let x4 = compareFilling("addressInp");
  let x5 = compareFilling("cityInp");
  let x6 = compareFilling("paymentInp");

  const controlSum = x1 + x2 + x3 + x4 + x5 + x6;

  if (controlSum == 6) {
    console.log("Done");
    router.push({ path: `/user/${user.name}/order`, replace: true });
  }
}

onMounted(() => {
  for (let i of user.cart) {
    const itemPrice = Number(useGoods().getGood(i.itemType, i.itemId).price);
    totalSum.value += itemPrice;
  }
});

function handleInp(type, info) {
  local.inp[type] = info;

  local.error[type].text = "";
  local.error[type].isOccured = false;
}
</script>

<template>
  <div class="cont">
    <div class="general__cont">
      <GeneralInfo :userEmail="user.email" :total="totalSum" />
    </div>
    <div class="form__cont">
      <OrderForm
        :nameError="local.error.nameInp"
        :surnameError="local.error.surnameInp"
        :mobileError="local.error.mobileInp"
        :addressError="local.error.addressInp"
        :cityError="local.error.cityInp"
        :paymentError="local.error.paymentInp"
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
