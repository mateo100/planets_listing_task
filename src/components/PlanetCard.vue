<template>
  <v-card class="ma-5">
    <v-card-title class="pa-4 font-weight-bold">{{ planet[PlanetEnum.Name] }}</v-card-title>
    <v-card-text class="ma-2">
      <PlanetInfo v-for="content in planetCardContents" v-bind="content" :key="content.label" />
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { PlanetEnum, type Planet } from '@/interfaces/Planet'
import { type SingleCardInfo } from '@/interfaces/Utility'
import PlanetInfo from '@/components/PlanetInfo.vue'

const props = defineProps({
  planet: {
    type: Object as PropType<Planet>,
    required: true
  }
})

const { planet } = props

const formattedPopulation = computed(() => {
  const population = planet[PlanetEnum.Population]
  return population && population !== 'unknown'
    ? population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    : population
})

const formattedCreationDate = computed(() =>
  new Date(planet[PlanetEnum.Created]).toLocaleDateString()
)

const planetCardContents: SingleCardInfo[] = [
  { label: 'Population', icon: 'mdi-account-group', value: formattedPopulation.value },
  { label: 'Created', icon: 'mdi-update', value: formattedCreationDate.value },
  {
    label: 'Rotation Period',
    icon: 'mdi-rotate-3d-variant',
    value: planet[PlanetEnum.RotationPeriod]
  },
  { label: 'Climate', icon: 'mdi-thermometer', value: planet[PlanetEnum.Climate] },
  { label: 'Gravity', icon: 'mdi-earth', value: planet[PlanetEnum.Gravity] },
  { label: 'Url', icon: 'mdi-link', value: planet[PlanetEnum.Url], isLink: true }
]
</script>
<style scoped lang="scss">
.v-card {
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  &-title {
    font-size: 1.5em;
    border-radius: 10px 10px 0 0;
    color: #fff;
    background: #3498db;
  }
}

.planet-info {
  margin-bottom: 16px;
}
</style>
