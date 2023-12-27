<template>
  <v-container>
    <LoadingSpinner v-if="loading" />
    <ErrorAlert v-else-if="error" :errorMessage="error" />
    <template v-else>
      <v-row align="center">
        <v-col cols="6" md="3">
          <v-text-field
            v-model="searchQuery"
            label="Planet name"
            :prependInnerIcon="Icon.Search"
            flat
            variant="underlined"
          />
        </v-col>
        <v-col cols="6" md="3">
          <IconButton @buttonIconClicked="toggleSortOrder" :iconName="sortOrderIcon" rounded="xl">
            Sort by name
          </IconButton>
        </v-col>
      </v-row>
      <v-row>
        <PlanetList :planets="paginatedPlanets" />
      </v-row>
      <v-row justify="end">
        <ListPaginator
          :totalPages="totalPages"
          v-model:itemsPerPage="itemsPerPage"
          v-model:currentPage="currentPage"
        />
      </v-row>
    </template>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import _ from 'lodash'
import { useFetchData } from '@/composables/useFetch'
import LoadingSpinner from '@/atoms/LoadingSpinner.vue'
import IconButton from '@/atoms/IconButton.vue'
import ErrorAlert from '@/atoms/ErrorAlert.vue'
import ListPaginator from '@/atoms/ListPaginator.vue'
import PlanetList from '@/components/PlanetList.vue'
import { type PlanetsResponse } from '@/interfaces/Planet'
import { Icon } from '@/interfaces/Utility'

const { data, loading, error } = useFetchData<PlanetsResponse>('https://swapi.dev/api/planets')

const itemsPerPage = ref(5)
const currentPage = ref(1)
const searchQuery = ref('')
const sortOrder = ref('asc')

const planets = computed(() => data.value?.results || [])

const calculatePagination = () => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value
  const endIndex = startIndex + itemsPerPage.value
  return sortedPlanets.value.slice(startIndex, endIndex)
}
const paginatedPlanets = computed(calculatePagination)

const filteredPlanets = computed(() => {
  return planets.value.filter((planet) =>
    planet.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const sortedPlanets = computed(() => {
  return _.orderBy(filteredPlanets.value, ['name'], [sortOrder.value as 'asc' | 'desc'])
})

const totalPages = computed(() => Math.ceil(sortedPlanets.value.length / itemsPerPage.value))

const toggleSortOrder = () => {
  sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
}

watch(searchQuery, () => {
  currentPage.value = 1
})
</script>
