<script setup>
import { reactive } from "vue";

const props = defineProps({
  nameError: Object,
  surnameError: Object,
  mobileError: Object,
  addressError: Object,
  cityError: Object,
  paymentError: Object,
});

const emit = defineEmits(["dataInp"]);

const local = reactive({
  inp: {
    nameInp: "",
    surnameInp: "",
    mobileInp: "",
    addressInp: "",
    cityInp: "",
    paymentInp: "",
  },
  hidden: {
    cityInp: false,
    paymentInp: false,
  },
});

function handleInp(type) {
  emit("dataInp", type, local.inp[type]);
}

function handleSelect(type) {
  local.hidden[type] = true;
  emit("dataInp", type, local.inp[type]);
}
</script>

<template>
  <div class="form__wrapper">
    <form class="order__form">
      <div class="title__cont">
        <h6 class="form__title">Delivery</h6>
      </div>
      <div class="input__cont">
        <div class="input__box">
          <input
            type="text"
            placeholder="First name"
            :class="{ error__inp: props.nameError.isOccured }"
            v-model="local.inp.nameInp"
            @input="handleInp('nameInp')"
          />
          <div
            class="error__box"
            :class="{ error__active: props.nameError.isOccured }"
          >
            <p
              class="error__text"
              :class="{ active__text: props.nameError.isOccured }"
            >
              {{ props.nameError.text }}
            </p>
          </div>
        </div>
        <div class="input__box">
          <input
            type="text"
            placeholder="Last name"
            :class="{ error__inp: props.surnameError.isOccured }"
            v-model="local.inp.surnameInp"
            @input="handleInp('surnameInp')"
          />
          <div
            class="error__box"
            :class="{ error__active: props.surnameError.isOccured }"
          >
            <p
              class="error__text"
              :class="{ active__text: props.surnameError.isOccured }"
            >
              {{ props.surnameError.text }}
            </p>
          </div>
        </div>
        <div class="input__box">
          <input
            type="tel"
            placeholder="Mobile phone"
            :class="{ error__inp: props.mobileError.isOccured }"
            v-model="local.inp.mobileInp"
            @input="handleInp('mobileInp')"
          />
          <div
            class="error__box"
            :class="{ error__active: props.mobileError.isOccured }"
          >
            <p
              class="error__text"
              :class="{ active__text: props.mobileError.isOccured }"
            >
              {{ props.mobileError.text }}
            </p>
          </div>
        </div>
        <div class="input__box">
          <input
            type="text"
            placeholder="Address"
            :class="{ error__inp: props.addressError.isOccured }"
            v-model="local.inp.addressInp"
            @input="handleInp('addressInp')"
          />
          <div
            class="error__box"
            :class="{ error__active: props.addressError.isOccured }"
          >
            <p
              class="error__text"
              :class="{ active__text: props.addressError.isOccured }"
            >
              {{ props.addressError.text }}
            </p>
          </div>
        </div>
        <div class="input__box select__area">
          <span
            class="place__holder"
            :class="{
              hidden: local.hidden.cityInp,
              error__placeholder: props.cityError.isOccured,
            }"
            >City</span
          >
          <select
            name="city"
            id="select1"
            :class="{
              error__inp: props.cityError.isOccured,
            }"
            v-model="local.inp.cityInp"
            @change="handleSelect('cityInp')"
          >
            <option value="Moscow">Moscow</option>
            <option value="Minsk">Minsk</option>
            <option value="Saint-Petersburg">Saint-Petersburg</option>
            <option value="Ekaterinburg">Ekaterinburg</option>
          </select>
          <div
            class="error__box"
            :class="{ error__active: props.cityError.isOccured }"
          >
            <p
              class="error__text"
              :class="{ active__text: props.cityError.isOccured }"
            >
              {{ props.cityError.text }}
            </p>
          </div>
        </div>
        <div class="input__box select__area">
          <span
            class="place__holder"
            :class="{
              hidden: local.hidden.paymentInp,
              error__placeholder: props.paymentError.isOccured,
            }"
            >Payment</span
          >
          <select
            name="payment"
            id="select2"
            :class="{ error__inp: props.paymentError.isOccured }"
            v-model="local.inp.paymentInp"
            @change="handleSelect('paymentInp')"
          >
            <option value="Online">Online</option>
            <option value="By cash">By cash</option>
          </select>
          <div
            class="error__box"
            :class="{ error__active: props.paymentError.isOccured }"
          >
            <p
              class="error__text"
              :class="{ active__text: props.paymentError.isOccured }"
            >
              {{ props.paymentError.text }}
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style>
.form__wrapper {
  width: 100%;
  height: fit-content;
}

.order__form {
  width: 100%;
  height: fit-content;

  padding: 0rem clamp(0rem, -3.236rem + 8.629vw, 5.6rem);

  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2rem;
}

.form__title {
  font-size: clamp(2.6rem, 2.253rem + 0.924vw, 3.2rem);
}

.input__cont {
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  row-gap: 2rem;
}

.input__box {
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.select__area {
  position: relative;
}

.place__holder {
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--select-color);

  user-select: none;

  position: absolute;
  left: 2rem;
  bottom: 1.1rem;

  transition: bottom 0.5s ease;
}

.error__placeholder {
  bottom: 3.6rem;
}

.hidden {
  display: none;
}

.input__name {
  font-size: 1.4rem;
}

input {
  width: 327px;
}

select {
  width: 327px;
}

.error__active {
  height: 21px !important;
}

@media screen and (width > 768px) {
  .input__cont {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (width > 1024px) {
  .order__form {
    padding: 0rem 5.6rem;
  }

  .form__title {
    font-size: 3.2rem;
  }

  .input__cont {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
