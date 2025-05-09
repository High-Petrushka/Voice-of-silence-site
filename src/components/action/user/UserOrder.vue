<script setup>
import useUsers from "../../../composables/useUsers";

const userIndex = useUsers().getActUser();
const userCart = useUsers().getUser(userIndex).cart;
</script>

<template>
  <div class="cont">
    <div class="user__cont">
      <div class="empty__cont" v-if="userCart.length == 0">
        <p class="empty__text">You have no orders yet :D</p>
      </div>
      <div class="order__cont" v-else>
        <h6>Order</h6>
      </div>
    </div>
  </div>
</template>

<style scoped>
.empty__cont {
  display: flex;
  justify-content: center;
  align-items: center;
}

.empty__text {
  font-size: 1.8rem;
}
</style>
