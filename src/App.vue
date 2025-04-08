<script setup>
import HeaderMenu from "./components/menu/HeaderMenu.vue";
import FooterMenu from "./components/menu/FooterMenu.vue";

import Pattern from "./components/Pattern.vue";

import { reactive } from "vue";
import { RouterView } from "vue-router";

const local = reactive({
    page: [0],
});

function pageChanger(page) {
    local.page[0] = page;
    console.log(page);
}
</script>

<template>
    <header>
        <HeaderMenu @change-page="pageChanger" />
    </header>

    <main>
        <RouterView />
    </main>

    <footer></footer>
</template>

<style scoped></style>
