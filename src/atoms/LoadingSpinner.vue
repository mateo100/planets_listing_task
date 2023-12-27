<template>
  <div class="loading-wrapper d-flex justify-center align-center">
    <v-progress-circular indeterminate size="70" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.loading-wrapper {
  height: 100vh;
  margin: auto;
  z-index: 99;
  color: #3498db;
}
</style>
