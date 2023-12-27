import { computed, type Ref } from 'vue'

export function usePaginate<T>(
  data: Ref<T[]>,
  currentPage: Ref<number>,
  itemsPerPage: Ref<number>
) {
  return computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage.value
    const endIndex = startIndex + itemsPerPage.value
    return data.value.slice(startIndex, endIndex)
  })
}
