<template>
  <TheHeader />
  <body style="min-height: 50vh;" class="container p-5">
    <slot />
  </body>
  <TheFooter />
</template>

<script setup>
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";
</script>
