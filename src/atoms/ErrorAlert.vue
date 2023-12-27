<template>
  <v-alert color="red" theme="dark" icon="mdi-alert-circle">
    {{ errorMessage }}
  </v-alert>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  errorMessage: {
    type: String,
    default: ''
  }
})

const errorMessage = computed(() => {
  if (props.errorMessage) {
    return props.errorMessage
  }
  return 'An unexpected error occurred. Please try again later.'
})
</script>
