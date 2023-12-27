<template>
  <v-col v-for="planet in planets" :key="planet.name" cols="12" md="6" lg="4" xl="3">
    <v-card class="fill-height outer-card">
      <PlanetCard :planet="planet" />
    </v-card>
  </v-col>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Planet } from '@/interfaces/Planet'
import PlanetCard from '@/components/PlanetCard.vue'

defineProps({
  planets: {
    type: Array as PropType<Planet[]>,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.outer-card {
  border-radius: 10px;
}
</style>
