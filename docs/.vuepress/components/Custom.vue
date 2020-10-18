<template>
  <Common :sidebar="false">
    <template #default="slotProps">
      <main class="page">
        <MyTransition :delay="0.24">
          <Content :key="$route.path" class="theme-default-content custom" />
        </MyTransition>

        <MyTransition :delay="0.28">
          <PageFooter :key="$route.path" />
        </MyTransition>
      </main>
    </template>
  </Common>
</template>

<script>
import Common from "@theme/components/Common.vue";
import MyTransition from "@theme/components/MyTransition.vue";
import PageFooter from "@theme/components/PageFooter.vue";

export default {
  components: {
    Common,
    MyTransition,
    PageFooter,
  },
};
</script>
