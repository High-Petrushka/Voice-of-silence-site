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
      emailError: { text: "", isOccurred: false },
      passError: { text: "", isOccurred: false },
      nameError: { text: "", isOccurred: false },
      surnameError: { text: "", isOccurred: false },
    },
  },
});

const router = useRouter();

function clearAuth() {
  local.error.authError.text = "";
  local.error.authError.isOccurred = false;
}

function clearReg() {
  local.error.regError.emailError.text = "";
  local.error.regError.emailError.isOccurred = false;

  local.error.regError.passError.text = "";
  local.error.regError.passError.isOccurred = false;

  local.error.regError.nameError.text = "";
  local.error.regError.nameError.isOccurred = false;

  local.error.regError.surnameError.text = "";
  local.error.regError.surnameError.isOccurred = false;
}

function reciveAuth(eData, pData) {
  local.authData.email = eData;
  local.authData.pass = pData;

  clearAuth();
}

function reciveReg(eData, pData, nData, sData) {
  local.regData.email = eData;
  local.regData.pass = pData;
  local.regData.firstName = nData;
  local.regData.lastName = sData;

  clearReg();
}

function authFunc() {
  const check = useUsers().compareUser(
    local.authData.email,
    local.authData.pass,
  );

  switch (check.state) {
    case "OK":
      useUsers().setUser(check.userId);
      makeRoute("");
      break;
    case "LoginError":
      local.error.authError.text = "Incorrect email or password!";
      local.error.authError.isOccurred = true;
      break;
  }
}

function compareEmail() {
  const check = useUsers().checkEmail(local.regData.email);
  let answer = 0;

  switch (check) {
    case "OK":
      answer = 1;
      break;
    case "EmptyError":
      local.error.regError.emailError.text = "Required to be filled!";
      local.error.regError.emailError.isOccurred = true;
      break;
    case "PatternError":
      local.error.regError.emailError.text = "Incorrect email pattern!";
      local.error.regError.emailError.isOccurred = true;
      break;
  }

  return answer;
}

function comparePass() {
  const check = useUsers().checkPass(local.regData.pass);
  let answer = 0;

  switch (check) {
    case "OK":
      answer = 1;
      break;
    case "EmptyError":
      local.error.regError.passError.text = "Required to be filled!";
      local.error.regError.passError.isOccurred = true;
      break;
    case "LengthError":
      local.error.regError.passError.text = "Should include at least 4 signs!";
      local.error.regError.passError.isOccurred = true;
      break;
    case "PatternError":
      local.error.regError.passError.text = "Too weak password!";
      local.error.regError.passError.isOccurred = true;
      break;
  }

  return answer;
}

function compareName(str, err) {
  const check = useUsers().checkName(local.regData[`${str}`]);
  let answer = 0;

  switch (check) {
    case "OK":
      answer = 1;
      break;
    case "EmptyError":
      local.error.regError[`${err}`].text = "Required to be filled!";
      local.error.regError[`${err}`].isOccurred = true;
      break;
    case "PatternError":
      local.error.regError[`${err}`].text = "Should include only letters!";
      local.error.regError[`${err}`].isOccurred = true;
      break;
  }

  return answer;
}

function regFunc() {
  let x1 = compareEmail();
  let x2 = comparePass();
  let x3 = compareName("firstName", "nameError");
  let x4 = compareName("lastName", "surnameError");

  if (x1 + x2 + x3 + x4 == 4) {
    const email = local.regData.email;
    const pass = local.regData.pass;
    const firstName = local.regData.firstName;
    const lastName = local.regData.lastName;

    useUsers().addUser(email, pass, firstName, lastName);
    makeRoute("authentification");
  }
}

function btnAction(act) {
  if (act == "compare") {
    authFunc();
  } else {
    regFunc();
  }
}

function routeReg() {
  router.push({ path: "/registration" });
}

function makeRoute(target) {
  router.push({ path: `/${target}`, replace: true });
}
</script>

<template>
  <div class="form__cont">
    <form class="action__form" id="auth__form" autocomplete="off">
      <div class="form__title">
        <h2 class="form__title">{{ props.formTitle }}</h2>
      </div>
      <div class="form__input">
        <AuthInp
          @dataInput="reciveAuth"
          :errorKey="local.error.authError"
          v-if="props.formAction == 'compare'"
        />
        <RegInp
          @regInput="reciveReg"
          :emailError="local.error.regError.emailError"
          :passError="local.error.regError.passError"
          :nameError="local.error.regError.nameError"
          :surnameError="local.error.regError.surnameError"
          v-if="props.formAction == 'check'"
        />
      </div>
      <div class="form__buttpn">
        <button class="form__btn" @click.prevent="btnAction(props.formAction)">
          {{ props.buttonText }}
        </button>
        <p
          class="form__link"
          @click="routeReg"
          v-if="props.formAction == 'compare'"
        >
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
