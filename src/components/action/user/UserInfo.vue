<script setup></script>

<template>
  <div class="user__cont">
    <div class="title__cont">
      <div class="title__box">
        <h6 class="user__title">Profile</h6>
      </div>
      <div class="button__box">
        <button class="user__btn">Log out</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

@media screen and (width > 1024px) {
  .user__title {
    font-size: 3.2rem;
  }
}
</style>
