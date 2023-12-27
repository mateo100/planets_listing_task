<template>
  <v-btn
    @click="$emit('buttonIconClicked')"
    class="icon-button d-flex justify-center align-center pa-3"
  >
    <slot />
    <v-icon small class="icon-button__icon ml-2">
      {{ iconName }}
    </v-icon>
  </v-btn>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue'
import { Icon } from '@/interfaces/Utility'

defineProps({
  iconName: {
    type: Object as PropType<Icon>,
    required: true
  }
})
</script>

<style scoped lang="scss">
.icon-button {
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid $blue-1;
  background-color: $blue-1;
  color: $white-1;
  transition: background-color 0.2s ease;
}
</style>
