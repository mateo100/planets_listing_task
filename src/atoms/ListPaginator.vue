<template>
  <div style="display: flex">
    <v-select
      :modelValue="itemsPerPage"
      @update:modelValue="(newValue) => $emit('update:itemsPerPage', newValue)"
      :items="itemsPerPageOptions"
      label="Items per page"
      style="width: 150px"
    />
    <v-pagination
      :modelValue="currentPage"
      @update:modelValue="(newValue) => $emit('update:currentPage', newValue)"
      :length="totalPages"
      circle
      :totalVisible="3"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  itemsPerPage: {
    type: Number,
    required: true
  },
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
})

const itemsPerPageOptions = ref([2, 3, 5, 10])
</script>
