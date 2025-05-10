<script setup>
import { ref } from "vue";
import useUsers from "../../../composables/useUsers";

const userIndex = useUsers().getActUser();
const userGoods = ref(useUsers().getUser(userIndex).goods);
</script>

<template>
  <div class="cont">
    <div class="user__cont">
      <div class="empty__cont" v-if="userGoods.length == 0">
        <p class="empty__text">You have no purchases yet</p>
      </div>
      <div class="purchase__cont" v-else></div>
    </div>
  </div>
</template>

<style scoped>
.empty__cont {
  display: flex;
  align-items: center;
  justify-content: center;
}

.empty__text {
  font-size: 1.8rem;
}
</style>
