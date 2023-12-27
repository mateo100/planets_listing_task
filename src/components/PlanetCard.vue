<template>
  <v-card>
    <v-card-title>{{ planet.name }}</v-card-title>
    <v-card-text>
      <PlanetInfo label="Population" :value="formattedPopulation" />
      <PlanetInfo label="Rotation Period" :value="planet.rotation_period" />
      <PlanetInfo label="Climate" :value="planet.climate" />
      <PlanetInfo label="Gravity" :value="planet.gravity" />
      <PlanetInfo label="Created" :value="formattedCreationDate" />
      <PlanetInfo label="URL" :value="planet.url" isLink />
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import type { Planet } from '@/interfaces/Planet'
import PlanetInfo from '@/components/PlanetInfo.vue'

// Define props with improved type annotations
const props = defineProps({
  planet: {
    type: Object as PropType<Planet>,
    required: true
  }
})

const { planet } = props

const formattedPopulation = computed(() => new Intl.NumberFormat().format(planet.population))
const formattedCreationDate = computed(() => new Date(planet.created).toLocaleDateString())
</script>
