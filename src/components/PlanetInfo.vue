<template>
  <v-row class="planet-info">
    <v-col cols="12">
      <span class="planet-info__label">{{ label }}:</span>
      <span v-if="isLink" class="planet-info__value">
        <a :href="value" class="planet-info__link" target="_blank">{{ value }}</a>
      </span>
      <span v-else class="planet-info__value">{{ value }}</span>
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
  &__label {
    font-weight: bold;
    margin-right: 4px;
  }

  &__value {
    margin-left: 4px;
  }

  &__link {
    color: blue;
    text-decoration: none;
    font-size: 0.9em;
    padding: 2px 4px;
    border-radius: 4px;
    transition:
      background-color 0.3s,
      color 0.3s;

    &:hover {
      background-color: #e0e0e0;
      text-decoration: underline;
    }
  }
}
</style>
