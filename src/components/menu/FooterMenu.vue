<script setup>
import { reactive } from "vue";

const local = reactive({
  showContent0: false,
  showContent1: false,
  showContent2: false,
});

function toggleAccordion(order) {
  local[`showContent${order}`] = !local[`showContent${order}`];
}
</script>

<template>
  <div class="menu__cont">
    <div class="footer__cont">
      <div class="accordion__box">
        <div class="accordion__el">
          <div class="accordion__title" @click="toggleAccordion(0)">
            <h4>Categiries</h4>
            <div
              class="accordion__cross"
              :class="{ cross__active: local.showContent0 }"
            ></div>
          </div>
          <div
            class="accordion__content"
            :class="{ accordion__active: local.showContent0 }"
          >
            <ul :style="[local.showContent0 ? { opacity: 1 } : { opacity: 0 }]">
              <li>
                <RouterLink
                  :to="{ name: 'Headphones' }"
                  class="footer__text"
                  @click="toggleAccordion(0)"
                  >Headphones
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  :to="{ name: 'Speakers' }"
                  class="footer__text"
                  @click="toggleAccordion(0)"
                  >Speakers
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  :to="{ name: 'Accessories' }"
                  class="footer__text"
                  @click="toggleAccordion(0)"
                  >Accessories
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  :to="{ name: 'Vinyl' }"
                  class="footer__text"
                  @click="toggleAccordion(0)"
                  >Vinyl</RouterLink
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="accordion__el">
          <div class="accordion__title" @click="toggleAccordion(1)">
            <h4>Contacts</h4>
            <div
              class="accordion__cross"
              :class="{ cross__active: local.showContent1 }"
            ></div>
          </div>
          <div
            class="accordion__content"
            :class="{ active__less: local.showContent1 }"
          >
            <ul :style="[local.showContent1 ? { opacity: 1 } : { opacity: 0 }]">
              <li>
                <p class="footer__text">+7 (800) 789-08-56</p>
              </li>
              <li>
                <p class="footer__text">WhatsApp</p>
              </li>
              <li>
                <p class="footer__text">info@VoS.com</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="accordion__el">
          <div class="accordion__title" @click="toggleAccordion(2)">
            <h4>Socials</h4>
            <div
              class="accordion__cross"
              :class="{ cross__active: local.showContent2 }"
            ></div>
          </div>
          <div
            class="accordion__content"
            :class="{ active__less: local.showContent2 }"
          >
            <ul :style="[local.showContent2 ? { opacity: 1 } : { opacity: 0 }]">
              <li>
                <a href="#" class="footer__text footer__link">YouTube</a>
              </li>
              <li>
                <a href="#" class="footer__text footer__link">Instagram</a>
              </li>
              <li>
                <a href="#" class="footer__text footer__link">Telegram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="info__box">
        <p>&#169; 2025 Voice of silence, Inc</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer__cont {
  width: 100%;
  height: fit-content;

  padding: 56.25px 2rem;

  background: var(--element-color);
  color: var(--reversed-font);

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  row-gap: 56.25px;
}

.footer__cont h4 {
  font-size: 1.8rem;
}

.accordion__box {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
}

.accordion__el {
  padding: 1.5rem 0rem;

  border-bottom: 1px solid var(--reversed-font);

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
}

.accordion__el:first-child {
  border-top: 1px solid var(--reversed-font);
}

.accordion__title {
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
}

.accordion__cross {
  width: 1.8rem;
  height: 1.8rem;

  position: relative;
  transform: rotate(0deg);

  transition: transform 0.5s ease;
}

.cross__active {
  transform: rotate(45deg);
}

.accordion__cross::before {
  content: "";

  width: 100%;
  height: 2px;

  background: var(--reversed-font);

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.accordion__cross::after {
  content: "";

  width: 2px;
  height: 100%;

  background: var(--reversed-font);

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.info__box {
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: center;
}

.info__box p {
  font-size: 1.4rem;
}

.accordion__content {
  width: 100%;
  height: 0px;

  overflow: hidden;
  padding: 0rem 0rem;

  transition:
    height 0.5s ease-out,
    padding 0.5s ease;
}

.accordion__active {
  height: 172px;
  padding: 2rem 0rem;
}

.active__less {
  height: 135px;
  padding: 2rem 0rem;
}

.accordion__content ul {
  width: 100%;
  height: 100%;

  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  transition: opacity 0.5s ease;
}
</style>
