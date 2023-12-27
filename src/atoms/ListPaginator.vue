<template>
  <div class="paginator d-flex justify-center" style="flex-wrap: wrap">
    <v-select
      :modelValue="itemsPerPage"
      @update:modelValue="(newValue) => $emit('update:itemsPerPage', newValue)"
      :items="itemsPerPageOptions"
      :label="labelText"
      class="paginator__select mx-4"
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
  },
  labelText: {
    type: String,
    default: 'Items per page'
  }
})

const itemsPerPageOptions = ref([3, 6, 10])
</script>

<style scoped lang="scss">
.paginator {
  &__select {
    width: 150px;
  }
}
</style>
