<script setup>
import { reactive } from "vue";

const props = defineProps({
  errorKey: {},
});

const emit = defineEmits(["dataInput"]);

const local = reactive({
  emailInp: "",
  passInp: "",
  dataInp: "",
});

function sendData() {
  emit("dataInput", local.emailInp, local.passInp);
}
</script>

<template>
  <div class="inp__cont">
    <input type="text" v-model="local.emailInp" placeholder="Your email"
      :class="{ error__inp: props.errorKey.isOccurred }" @input="sendData" />
    <input type="password" v-model="local.passInp" placeholder="Password"
      :class="{ error__inp: props.errorKey.isOccurred }" @input="sendData" />
    <div class="error__box" :class="{ error__active: props.errorKey.isOccurred }">
      <p class="error__text" :class="{ active__text: props.errorKey.isOccurred }">
        {{ props.errorKey.text }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.inp__cont {
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  gap: 2rem;
}

.error__box {
  height: 41px;
}

.error__active {
  height: 41px !important;
}

.error__text {
  opacity: 0;
}

.active__text {
  opacity: 1;
}
</style>
