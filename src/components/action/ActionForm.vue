<script setup>
import { useRouter } from "vue-router";
import { reactive } from "vue";
import useUsers from "../../composables/useUsers";

import AuthInp from "./input/AuthInp.vue";
import RegInp from "./input/RegInp.vue";

const props = defineProps({
  formTitle: "",
  buttonText: "",
  formAction: "",
});

const local = reactive({
  authData: {
    email: "",
    pass: "",
  },
  regData: {
    email: "",
    pass: "",
    firstName: "",
    lastName: "",
  },
  error: {
    authError: { text: "", isOccurred: false },
    regError: {
      emailError: "",
      passError: "",
    },
  },
});

const router = useRouter();

function clearAuth() {
  local.error.authError.text = "";
  local.error.authError.isOccurred = false;
}

function reciveAuth(eData, pData) {
  local.authData.email = eData;
  local.authData.pass = pData;

  clearAuth();
}

function authFunc() {
  const check = useUsers().compareUser(
    local.authData.email,
    local.authData.pass,
  );

  switch (check) {
    case "OK":
      console.log("OK");
      break;
    case "LoginError":
      local.error.authError.text = "Incorrect email or password!";
      local.error.authError.isOccurred = true;
      break;
  }
}

function btnAction(act) {
  if (act == "compare") {
    authFunc();
  } else {
    pass;
  }
}

function routeReg() {
  router.push({ path: "/registration" });
}
</script>

<template>
  <div class="form__cont">
    <form class="action__form" id="auth__form" autocomplete="off">
      <div class="form__title">
        <h2 class="form__title">{{ props.formTitle }}</h2>
      </div>
      <div class="form__input">
        <AuthInp @dataInput="reciveAuth" :errorKey="local.error.authError" v-if="props.formAction == 'compare'" />
        <RegInp v-if="props.formAction == 'check'" />
      </div>
      <div class="form__buttpn">
        <button class="form__btn" @click.prevent="btnAction(props.formAction)">
          {{ props.buttonText }}
        </button>
        <p class="form__link" @click="routeReg" v-if="props.formAction == 'compare'">
          Create account
        </p>
      </div>
    </form>
  </div>
</template>

<style scoped>
.form__cont {
  width: 327px;
  height: fit-content;

  margin: 0 auto;
  padding-top: 6rem;
}

.form__cont form {
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  row-gap: 6rem;
}

.form__title {
  font-size: 3rem;
  font-weight: 600;
  line-height: 38px;
}

.form__buttpn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  margin-top: 10rem;
}

.form__btn {
  width: 279px;
  height: 48px;

  text-align: center;
  display: flex;
  place-items: center;
  justify-content: center;
  color: var(--reversed-font);

  background: var(--accent-color);
  border-color: var(--accent-color);
}

.form__btn:hover {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
}

.form__link {
  font-size: 1.6rem;
  font-weight: 400;
  text-decoration: underline;
  cursor: pointer;
}

@media screen and (width > 1024px) {
  .form__cont form {
    row-gap: 6rem;
  }

  .form__btn {
    background: var(--form-btn-color);
    border-color: var(--form-btn-color);
  }
}
</style>
