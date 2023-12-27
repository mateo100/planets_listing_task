<template>
  <v-card v-for="planet in planets" :key="planet.name">
    <PlanetCard :planet="planet" />
  </v-card>
</template>
<script setup lang="ts">
import type { Planet } from '@/interfaces/Planet'
import type { PropType } from 'vue'
import PlanetCard from '@/components/PlanetCard.vue'

defineProps({
  planets: {
    type: Array as PropType<Planet[]>,
    required: true
  }
})
</script>
