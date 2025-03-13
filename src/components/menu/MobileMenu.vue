<script setup>
const props = defineProps({
    position: String,
});

const emit = defineEmits([
    'closeSide'
]);
</script>

<template>
    <div class="menu__cont" :style="{right: `-${props.position}px`}">
        <div class="cross__cont">
            <img
            src="../../assets/icons/close.png"
            alt="Cross image"
            @click="$emit('closeSide')">
        </div>
        <div class="links__cont">
            <div class="link__box">
                <div class="link__img">
                    <img src="../../assets/menu/headphones.png" alt="Menu link image">
                </div>
                <div class="menu__link">
                    <a href="#">Headphones</a>
                </div>
            </div>
            <div class="link__box">
                <div class="link__img">
                    <img src="../../assets/menu/amplifier.png" alt="Menu link image">
                </div>
                <div class="menu__link">
                    <a href="#">Speakers</a>
                </div>
            </div>
            <div class="link__box">
                <div class="link__img">
                    <img src="../../assets/menu/music-player.png" alt="Menu link image">
                </div>
                <div class="menu__link">
                    <a href="#">Accessories</a>
                </div>
            </div>
            <div class="link__box">
                <div class="link__img">
                    <img src="../../assets/menu/vynil.png" alt="Menu link image">
                </div>
                <div class="menu__link">
                    <a href="#">Vinyl</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.menu__cont {
    width: 30rem;
    height: 100%;

    background: var(--background-color);

    position: fixed;
    z-index: 10;

    overflow-y: hidden;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 8.4rem 1fr;
    align-items: start;

    row-gap: 4rem;

    transition: 0.5s;
}

.cross__cont {
    height: 100%;
    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    box-shadow: inset 0 -1px 0 0 var(--card-color);
}

.cross__cont img {
    width: 2.2rem;
    height: 2.2rem;

    cursor: pointer;
}

.link__box {
    width: 100%;
    height: fit-content;

    display: flex;
    gap: 1.75rem;

    box-shadow: inset 0 -1px 0 0 var(--card-color);
}

.link__img {
    width: fit-content;
    height: fit-content;
}

.link__img img {
    width: 3.2rem;
    height: 3.2rem;
}

.links__cont {
    padding: 0 2rem;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
    row-gap: 2rem;
    align-items: start;
}

@media screen and (width > 1024px) {
    .menu__cont {
        display: none;
    }
}
</style>