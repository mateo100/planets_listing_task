<template>
  <v-alert color="red" theme="dark" icon="mdi-alert-circle">
    {{ errorMessage }}
  </v-alert>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  errorMessage: {
    type: String,
    default: 'An unexpected error occurred. Please try again later'
  }
})
</script>
