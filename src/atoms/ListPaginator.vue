<template>
  <div class="d-flex paginator">
    <v-select
      :modelValue="itemsPerPage"
      @update:modelValue="(newValue) => $emit('update:itemsPerPage', newValue)"
      :items="itemsPerPageOptions"
      :label="labelText"
      class="paginator__select"
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

const itemsPerPageOptions = ref([2, 3, 5, 10])
</script>
<style scoped lang="scss">
.paginator {
  &__select {
    width: 150px;
  }
}
</style>
