<script setup>
import { reactive, ref } from "vue";
import useUsers from "../../../composables/useUsers";
import { useRouter } from "vue-router";

const props = defineProps({
  itemName: "",
  itemPrice: "",
  itemType: "",
  itemImg: "",
  itemId: "",
  itemDesc: Array,
});

const local = reactive({
  btnText: "Add to cart",
  inCart: false,
});

const listStyles = ref(false);

const router = useRouter();

function changeListSate() {
  listStyles.value = !listStyles.value;
}

function cartAction() {
  const actUser = useUsers().getActUser();

  if (actUser === null) {
    router.push({ path: "/authentification" });
  } else {
    if (!local.inCart) {
      local.btnText = "In cart!";
      local.inCart = true;
      useUsers().addToCart(props.itemType, props.itemId);

      setTimeout(() => {
        local.btnText = "Add to cart";
        local.inCart = false;
      }, 1500);
    }
  }
}
</script>

<template>
  <div class="item__cont">
    <div class="image__cont">
      <img :src="props.itemImg" alt="Product image" class="item__img" />
    </div>
    <div class="content">
      <div class="desc__cont">
        <div class="title__cont">
          <div class="name__box">
            <h6 class="name__text">{{ props.itemName }}</h6>
          </div>
          <div class="type__box">
            <span class="type__text">{{ props.itemType }}</span>
          </div>
          <div class="price__box">
            <span class="price__text">$ {{ props.itemPrice }}</span>
          </div>
        </div>
        <div class="pros__cont">
          <div class="pros__title__box" @click="changeListSate">
            <p class="pros__title">Info</p>
            <div class="pros__cross" :class="{ active__cross: listStyles }"></div>
          </div>
          <ul class="pros__list" :class="{ active__list: listStyles }">
            <li class="pros__text" :class="{ active__text: listStyles }" v-for="item in props.itemDesc">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <div class="button__cont">
        <button class="item__btn" @click="cartAction">
          {{ local.btnText }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item__cont {
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 4rem;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.desc__cont {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.item__img {
  width: 100%;
  height: auto;

  object-fit: contain;
}

.name__text {
  font-size: clamp(4rem, 2.613rem + 3.698vw, 6.4rem);
  line-height: 1;
}

.type__text {
  font-size: 2.1rem;
}

.price__box {
  padding-top: 1rem;
}

.price__text {
  font-size: clamp(2.1rem, 1.464rem + 1.695vw, 3.2rem);
  font-weight: 500;
}

.pros__title__box {
  margin-bottom: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
}

.pros__title {
  font-size: 2.4rem;
  font-weight: 500;
}

.pros__cross {
  width: 1.8rem;
  height: 1.8rem;

  display: block;

  position: relative;

  transition: transform 0.5s ease-out;
}

.pros__cross::before {
  content: "";

  width: 100%;
  height: 2px;

  background: var(--font-color);

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.pros__cross::after {
  content: "";

  width: 2px;
  height: 100%;

  background: var(--font-color);

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.active__cross {
  transform: rotate(45deg);
}

.pros__list {
  height: 0;

  list-style: none;
  overflow: hidden;

  transition: height 0.8s ease-out;
}

.active__list {
  height: 600px;
}

.pros__text {
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--font-color);

  opacity: 0;
  transition: opacity 0.8s ease-out;
}

.active__text {
  opacity: 1;
}

.button__cont {
  padding: 0rem 0rem;
}

.item__btn {
  width: 335px;
  padding: 1.5rem 2rem;
}

@media screen and (width > 1024px) {
  .item__cont {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 8rem;
  }

  .name__text {
    font-size: 6.4rem;
  }

  .price__text {
    font-size: 3.2rem;
  }

  .pros__cross {
    display: none;
  }

  .pros__list {
    height: auto;
  }

  .pros__text {
    opacity: 1;
  }

  .button__cont {
    padding: 0rem 6rem;
  }

  .item__btn {
    width: 100%;
  }
}
</style>
