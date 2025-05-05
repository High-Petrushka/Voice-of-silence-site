<script setup>
import { RouterLink } from "vue-router";
import MobileMenu from "./MobileMenu.vue";
import { useRouter } from "vue-router";

import { reactive } from "vue";

const local = reactive({
  menuPosition: "300",
});

const emit = defineEmits(["changePage"]);

const router = useRouter();

function openMenu() {
  local.menuPosition = "0";
}

function closeMenu() {
  local.menuPosition = "300";
}

function userClick() {
  router.push({ path: '/authentification' });
}
</script>

<template>
  <div class="menu__cont">
    <div class="menu">
      <div class="logo__cont">
        <RouterLink :to="{ name: 'Main' }" class="logo">V'oS </RouterLink>
      </div>
      <div class="link__bar">
        <div class="menu__link">
          <RouterLink :to="{ name: 'Headphones' }">Headphones</RouterLink>
        </div>
        <div class="menu__link">
          <RouterLink :to="{ name: 'Speakers' }">Speakers</RouterLink>
        </div>
        <div class="menu__link">
          <RouterLink :to="{ name: 'Accessories' }">Accessories</RouterLink>
        </div>
        <div class="menu__link">
          <RouterLink :to="{ name: 'Vinyl' }">Vinyl</RouterLink>
        </div>
      </div>
      <div class="menu__el">
        <div class="menu__item">
          <img
            src="../../assets/icons/user.png"
            alt="User icon"
            @click="userClick"
          />
        </div>
        <div class="menu__item">
          <img
            src="../../assets/icons/online-shopping.png"
            alt="Cart icon"
          />
        </div>
        <div class="menu__item" id="hamburger">
          <img
            src="../../assets/icons/hamburger.png"
            alt="hamburger menu icon"
            @click="openMenu"
          />
        </div>
      </div>
    </div>
  </div>
  <MobileMenu @closeSide="closeMenu" :position="local.menuPosition" />
</template>

<style scoped>
.menu {
  width: 100%;
  height: 8.4rem;

  padding: 0 clamp(2rem, 0.544rem + 3.883vw, 8rem);
  background: var(--background-color);
  box-shadow: inset 0 -1px 0 0 var(--card-color);

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: var(--header-position);
  z-index: 20;

  transition: 0.5s ease-out;
}

.logo {
  text-decoration: none;

  font-size: 2.8rem;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.2rem;
  color: var(--font-color);

  cursor: pointer;
}

.link__bar {
  width: fit-content;
  height: fit-content;

  display: none;
  gap: 4rem;
}

.menu__link a::before {
  content: "";

  width: 0%;
  height: 2px;
  background: var(--font-color);

  position: absolute;
  bottom: 0;

  transition: 0.35s;
}

.menu__link a:hover::before {
  width: 100%;
}

.menu__el {
  width: fit-content;
  height: fit-content;

  display: flex;
  gap: 2rem;
}

.menu__item {
  width: fit-content;
  height: fit-content;

  display: block;

  cursor: pointer;
}

.menu__item img {
  width: 2.2rem;
  height: 2.2rem;
}

@media screen and (width > 1024px) {
  #hamburger {
    display: none;
  }

  .link__bar {
    display: flex;
  }
}
</style>
