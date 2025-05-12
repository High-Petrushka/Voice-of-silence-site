<script setup></script>

<template>
  <div class="form__wrapper">
    <form class="order__form">
      <div class="title__cont">
        <h6 class="form__title">Delivery</h6>
      </div>
      <div class="input__cont">
        <div class="input__box">
          <input type="text" placeholder="First name" />
        </div>
        <div class="input__box">
          <input type="text" placeholder="Last name" />
        </div>
        <div class="input__box">
          <input type="tel" placeholder="Mobile phone" />
        </div>
        <div class="input__box">
          <input type="text" placeholder="Address" />
        </div>
        <div class="input__box">
          <select>
            <option value="city" selected disabled hidden>City</option>
            <option value="Moscow">Moscow</option>
          </select>
        </div>
        <div class="input__box">
          <select>
            <option value="payment" selected desabled hidden>Payment</option>
            <option value="Online">Online</option>
            <option value="By cash">By cash</option>
          </select>
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
  row-gap: 2rem;
}

.input__box {
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
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
