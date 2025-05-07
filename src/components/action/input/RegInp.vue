<script setup>
import { reactive } from "vue";

const props = defineProps({
  emailError: {},
  passError: {},
  nameError: {},
  surnameError: {},
});

const emit = defineEmits(["regInput"]);

const local = reactive({
  emailInp: "",
  passInp: "",
  firstNameInp: "",
  lastNameInp: "",
});

function sendData() {
  emit(
    "regInput",
    local.emailInp,
    local.passInp,
    local.firstNameInp,
    local.lastNameInp,
  );
}
</script>

<template>
  <div class="inp__cont">
    <div class="inp__box">
      <input type="text" :class="{ error__inp: props.emailError.isOccurred }" v-model="local.emailInp"
        placeholder="Your email" @input="sendData" />
      <div class="error__box" :class="{ error__active: props.emailError.isOccurred }">
        <p class="error__text" :class="{ active__text: props.emailError.isOccurred }">
          {{ props.emailError.text }}
        </p>
      </div>
    </div>
    <div class="inp__box">
      <input type="password" :class="{ error__inp: props.passError.isOccurred }" v-model="local.passInp"
        placeholder="Password" @input="sendData" />
      <div class="error__box" :class="{ error__active: props.passError.isOccurred }">
        <p class="error__text" :class="{ active__text: props.passError.isOccurred }">
          {{ props.passError.text }}
        </p>
      </div>
    </div>
    <div class="inp__box">
      <input type="text" :class="{ error__inp: props.nameError.isOccurred }" v-model="local.firstNameInp"
        placeholder="First name" @input="sendData" />
      <div class="error__box" :class="{ error__active: props.nameError.isOccurred }">
        <p class="error__text" :class="{ active__text: props.nameError.isOccurred }">
          {{ props.nameError.text }}
        </p>
      </div>
    </div>
    <div class="inp__box">
      <input type="text" :class="{ error__inp: props.surnameError.isOccurred }" v-model="local.lastNameInp"
        placeholder="Last name" @input="sendData" />
      <div class="error__box" :class="{ error__active: props.surnameError.isOccurred }">
        <p class="error__text" :class="{ active__text: props.surnameError.isOccurred }">
          {{ props.surnameError.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.inp__cont {
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  gap: 2rem;
}

input {
  width: 100%;
}

/*
.inp__box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
*/

.error__box {
  height: 0px;
}

.error__active {
  height: 21px !important;
  margin-top: 1rem;
}

.error__text {
  opacity: 0;
}

.active__text {
  opacity: 1;
}
</style>
