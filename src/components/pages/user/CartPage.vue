<script setup>
import { onMounted, reactive, ref } from "vue";
import useUsers from "../../../composables/useUsers";
import { useRouter } from "vue-router";
import CartItem from "../../action/item/CartItem.vue";

const local = reactive({
  totalPrice: 0,
});

const userIndex = useUsers().getActUser();
//const user = ref(useUsers().getUser(userIndex));
const user = useUsers().getUser(userIndex);

const router = useRouter();

onMounted(() => {
  const userCheck = useUsers().getActUser();

  console.log("Done");

  if (userCheck === null) {
    router.push({ path: "/authentification", replace: true });
  }
});

function increase(sum) {
  local.totalPrice += Number(sum);
}

function decrease(sum) {
  local.totalPrice -= Number(sum);
}
</script>

<template>
  <div class="cont">
    <div class="user__cont" v-if="user.cart.length == 0">
      <div class="empty__cont">
        <p class="empty__text">Your cart is empty yet</p>
      </div>
    </div>
    <div class="cart__content" v-else>
      <div class="items__cont">
        <div class="item__wrapper" v-for="item in user.cart">
          <CartItem
            :itemType="item.itemType"
            :itemId="item.itemId"
            :itemCartId="item.cartId"
            @priceUp="increase"
            @priceDown="decrease"
          />
        </div>
      </div>
      <div class="order__cont">
        <div class="sum__box">
          <p class="sum__text">Tolal:</p>
          <span class="sum__number">${{ local.totalPrice }}</span>
        </div>
        <div class="button__box">
          <button class="order__btn">Order</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cont {
  padding-top: 8rem;
  margin: auto;
}

.empty__cont {
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
}

.empty__text {
  font-size: 1.8rem;
}

.cart__content {
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  row-gap: 4rem;
}

.items__cont {
  display: grid;
  grid-template-columns: 1fr;
}

.item__wrapper {
  width: 100%;
  height: fit-content;

  padding: 2rem 0rem;
  border-top: 1px solid var(--cart-border-color);
}

.item__wrapper:last-child {
  border-bottom: 1px solid var(--cart-border-color);
}

.order__cont {
  padding: 1rem 0rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.order__btn {
  padding: 1.5rem 3.5rem;
  width: clamp(11.4rem, -1.37rem + 34.052vw, 33.5rem);

  transition:
    width 0.35s,
    background 0.35s,
    border 0.35s,
    color 0.35s;
}

.sum__box {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.sum__text {
  font-size: clamp(1.8rem, 1.627rem + 0.462vw, 2.1rem);
  font-weight: 500;
}

.sum__number {
  font-size: clamp(1.8rem, 1.627rem + 0.462vw, 2.1rem);
  font-weight: 500;
}

@media screen and (width > 1024px) {
  .order__btn {
    width: 335px;
  }

  .sum__text {
    font-size: 2.1rem;
  }

  .sum__number {
    font-size: 2.1rem;
  }
}
</style>
