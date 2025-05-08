<script setup>
import { onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  router.push({ name: "Info" });
});
</script>

<template>
  <div class="cont">
    <div class="user__menu">
      <RouterLink :to="{ name: 'Info' }">Profile</RouterLink>
      <RouterLink :to="{ name: 'Order' }">Order</RouterLink>
      <RouterLink :to="{ name: 'Purchase' }">Purchase</RouterLink>
    </div>
  </div>
  <div class="cont">
    <RouterView />
  </div>
</template>

<style scoped>
.user__menu {
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
