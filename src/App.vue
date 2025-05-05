<script setup>
import HeaderMenu from "./components/menu/HeaderMenu.vue";
import FooterMenu from "./components/menu/FooterMenu.vue";

import { RouterView } from "vue-router";
</script>

<template>
    <header>
        <HeaderMenu @change-page="pageChanger" />
    </header>

    <main class="main__cont">
        <RouterView />
    </main>

    <footer>
        <FooterMenu />
    </footer>
</template>

<style scoped></style>
