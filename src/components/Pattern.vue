<script setup></script>

<template>
    <div class="wrapper">
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <h4>Header 4</h4>
        <h5>Header 5</h5>
        <h6>Header 6</h6>
        <p>Text</p>
        <span>Sub text</span>
        <button>Show now</button>
        <div class="back">
            <button class="reversed__btn">Show now</button>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    width: min(1280px, 100%);
    height: fit-content;

    margin: 0 auto;
    padding: 2rem;

    display: grid;
    place-items: center;
    gap: 2rem;
}

.back {
    padding: 4rem;
    background: var(--element-color);
    border-radius: 1rem;
}
</style>
