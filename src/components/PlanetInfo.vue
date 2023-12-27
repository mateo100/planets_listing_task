<template>
  <v-row class="planet-info pa-4 mt-4">
    <v-col cols="12" class="d-flex">
      <v-icon class="mr-1">{{ icon }}</v-icon>
      <span class="planet-info__label font-weight-bold mr-1">{{ label }}:</span>
      <span v-if="isLink" class="planet-info__value ml-1">
        <a :href="value" class="planet-info__link" target="_blank">{{ value }}</a>
      </span>
      <span v-else class="planet-info__value ml-1">{{ value }}</span>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  label: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  isLink: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped lang="scss">
.planet-info {
  border-radius: 10px;
  background: linear-gradient(45deg, #f5f5f5, #e0e0e0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &__label {
    color: #333;
  }

  &__value {
    color: #555;
  }

  &__link {
    color: #3498db;
    text-decoration: none;
    font-size: 0.9em;
    border-radius: 4px;
    transition:
      background-color 0.3s,
      color 0.3s;

    &:hover {
      background-color: #2ecc71;
      text-decoration: underline;
      color: #fff;
    }
  }
}
</style>
