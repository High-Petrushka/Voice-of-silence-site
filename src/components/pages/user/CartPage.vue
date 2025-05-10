<script setup>
import { onMounted, ref } from "vue";
import useUsers from "../../../composables/useUsers";
import { useRouter } from "vue-router";

const userIndex = useUsers().getActUser();
const user = ref(useUsers().getUser(userIndex));

const router = useRouter();

onMounted(() => {
  const userCheck = useUsers().getActUser();

  if (userCheck === null) {
    router.push({ name: "Authentification", replace: true });
  }
});
</script>

<template>
  <div class="cont">
    <div class="user__cont" v-if="user.cart.length == 0">
      <div class="empty__cont">
        <p class="empty__text">Your cart is empty yet</p>
      </div>
    </div>
    <div class="cart__content" v-else>
      <div class="user__cont" v-for="item in user.cart">
        {{ item }}
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
</style>
