<script setup>
import { onMounted, onUpdated, reactive } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useRouter } from "vue-router";

const router = useRouter();

const local = reactive({
  actPage: {
    profile: 1,
    order: 0,
    purchase: 0,
  },
});

function changeActivePage(page) {
  for (let i in local.actPage) {
    if (i == page) {
      local.actPage[i] = 1;
    } else {
      local.actPage[i] = 0;
    }
  }
}

onUpdated(() => {
  const path = router.currentRoute.value.path;
  const param = router.currentRoute.value.params.name;

  const page = path.slice(7 + param.length);

  changeActivePage(page);
});

onMounted(() => {
  router.push({ name: "Info" });
});
</script>

<template>
  <div class="cont">
    <div class="user__menu">
      <RouterLink
        class="user__link"
        :class="{ active__link: local.actPage.profile }"
        :to="{ name: 'Info' }"
        >Profile
      </RouterLink>
      <RouterLink
        class="user__link"
        :class="{ active__link: local.actPage.order }"
        :to="{ name: 'Order' }"
        >Order
      </RouterLink>
      <RouterLink
        class="user__link"
        :class="{ active__link: local.actPage.purchase }"
        :to="{ name: 'Purchase' }"
      >
        Purchase
      </RouterLink>
    </div>
  </div>
  <div class="cont">
    <RouterView />
  </div>
</template>

<style scoped>
.user__menu {
  width: 100%;
  height: fit-content;

  padding: 3.6rem 0rem 0rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.main__cont {
  gap: 0rem;
}

.user__link {
  text-decoration: none;

  font-size: clamp(1.6rem, 1.138rem + 1.233vw, 2.4rem);
  color: var(--user-link-color);

  transition: color 0.35s ease;
}

.user__link:hover {
  color: var(--font-color);
}

.active__link {
  color: var(--font-color);
}

@media screen and (width > 1024px) {
  .main__cont {
    gap: 0rem;
  }

  .user__menu {
    padding: 5.2rem 0rem 0rem;
  }

  .user__link {
    font-size: 24px;
  }
}
</style>
