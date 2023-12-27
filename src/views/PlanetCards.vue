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
          <IconButton
            @buttonIconClicked="toggleSortOrder"
            :iconName="sortOrder === Sort.Ascending ? Icon.ArrowDown : Icon.ArrowUp"
            rounded="xl"
          >
            Sort by name
          </IconButton>
        </v-col>
      </v-row>
      <v-row>
        <WarningAlert v-if="!paginatedPlanets.length" warningMessage="No data found" />
        <PlanetList v-else :planets="paginatedPlanets" />
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
import { useSearch } from '@/composables/useSearch'
import { useSort } from '@/composables/useSort'
import { usePaginate } from '@/composables/usePaginate'
import LoadingSpinner from '@/atoms/LoadingSpinner.vue'
import IconButton from '@/atoms/IconButton.vue'
import ErrorAlert from '@/atoms/ErrorAlert.vue'
import WarningAlert from '@/atoms/WarningAlert.vue'
import ListPaginator from '@/atoms/ListPaginator.vue'
import PlanetList from '@/components/PlanetList.vue'
import { type PlanetsResponse } from '@/interfaces/Planet'
import { Icon, Sort } from '@/interfaces/Utility'

const { data, loading, error } = useFetchData<PlanetsResponse>('https://swapi.dev/api/planets')

const itemsPerPage = ref(6)
const currentPage = ref(1)
const searchQuery = ref('')
const sortOrder = ref(Sort.Ascending)

const planets = computed(() => data.value?.results || [])

const filteredPlanets = useSearch(planets, searchQuery)
const sortedPlanets = useSort(filteredPlanets, sortOrder)
const paginatedPlanets = usePaginate(sortedPlanets, currentPage, itemsPerPage)

const totalPages = computed(() => Math.ceil(sortedPlanets.value.length / itemsPerPage.value))

const toggleSortOrder = () => {
  sortOrder.value = sortOrder.value === Sort.Ascending ? Sort.Descending : Sort.Ascending
}

watch([searchQuery, sortOrder], () => {
  currentPage.value = 1
})
</script>
