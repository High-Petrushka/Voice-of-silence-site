<script setup>
import { reactive } from "vue";
import ActionForm from "../../action/ActionForm.vue";

const local = reactive({
  title: "Create an account",
  btnText: "Create account",
  action: "check",
});
</script>

<template>
  <div class="cont">
    <ActionForm :formTitle="local.title" :buttonText="local.btnText" :formAction="local.action" />
  </div>
</template>

<style scoped></style>
