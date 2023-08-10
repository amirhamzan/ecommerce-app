<template>
  <TheHeader />
  <body style="min-height: 50vh" class="container p-5">
    <slot />
  </body>
  <TheFooter />
</template>

<script setup>
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";
</script>

<style>
.border-radius {
  border-radius: 20px;
}

.a-primary-color {
  color: #1f2d40;
}
</style>
