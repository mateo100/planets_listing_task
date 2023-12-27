<template>
  <v-alert color="red" theme="dark" :icon="Icon.ErrorCircle">
    {{ errorMessage }}
  </v-alert>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Icon } from '@/interfaces/Utility'

defineProps({
  errorMessage: {
    type: String,
    default: 'An unexpected error occurred. Please try again later'
  }
})
</script>
