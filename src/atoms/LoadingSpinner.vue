<template>
  <div class="loading-container">
    <v-progress-circular indeterminate color="primary" size="70" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.loading-container {
  display: flex;
  align-items: center;
  height: 100vh;
  margin: auto;
  z-index: 99;
}
</style>
