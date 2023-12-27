<template>
  <v-btn @click="$emit('buttonIconClicked')" class="icon-button">
    <slot />
    <v-icon small>
      {{ iconName }}
    </v-icon>
  </v-btn>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  iconName: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.icon-button:hover {
  background-color: #f0f0f0;
}
</style>
