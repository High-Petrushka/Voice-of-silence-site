<script setup>
import { onMounted, ref } from "vue";
import useUsers from "../../../composables/useUsers";
import { useRouter } from "vue-router";

const userIndex = ref(useUsers().getActUser());
const userInfo = ref(useUsers().getUser(userIndex.value));

const router = useRouter();

console.log(userInfo.value);

console.log("action 1");
onMounted(() => {
  console.log("action 2");
});
console.log("action 3");

function logOut() {
  useUsers().quit();
  router.replace({ name: "Main" });
}
</script>

<template>
  <div class="user__cont">
    <div class="title__cont">
      <div class="title__box">
        <h6 class="user__title">Profile</h6>
      </div>
      <div class="button__box">
        <button class="user__btn" @click="logOut">Log out</button>
      </div>
    </div>
    <div class="info__cont">
      <div class="info__box">
        <span class="info__title">User ID</span>
        <p class="info__text">{{ userInfo.id }}</p>
      </div>
      <div class="info__box">
        <span class="info__title">Email</span>
        <p class="info__text">{{ userInfo.email }}</p>
      </div>
      <div class="info__box">
        <span class="info__title">First Name</span>
        <p class="info__text">{{ userInfo.firstName }}</p>
      </div>
      <div class="info__box">
        <span class="info__title">Last Name</span>
        <p class="info__text">{{ userInfo.lastName }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user__cont {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  row-gap: 56px;
}

.title__cont {
  width: 100%;
  height: fit-content;

  padding-bottom: 56px;
  border-bottom: 1px solid var(--font-color);

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user__title {
  font-size: clamp(2.6rem, 2.253rem + 0.924vw, 3.2rem);
}

.user__btn {
  border: 1px solid currentColor;
}

.user__btn:hover {
  border: 1px solid var(--accent-color);
}

.info__cont {
  display: grid;
  grid-template-columns: 1rf;
  row-gap: 3.2rem;
}

.info__box {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info__title {
  font-size: 1.4rem;
  color: var(--card-font);
}

.info__text {
  font-size: clamp(1.6rem, 1.311rem + 0.77vw, 2.1rem);
}

@media screen and (width > 1024px) {
  .user__title {
    font-size: 3.2rem;
  }

  .info__cont {
    grid-template-columns: 1fr 1fr;
  }

  .info__text {
    font-size: 2.1rem;
  }
}
</style>
