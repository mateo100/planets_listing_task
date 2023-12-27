<template>
  <v-alert color="orange" class="ma-4" theme="dark" :icon="Icon.AlertCircle">
    {{ warningMessage }}
  </v-alert>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Icon } from '@/interfaces/Utility'

defineProps({
  warningMessage: {
    type: String,
    required: true
  }
})
</script>
