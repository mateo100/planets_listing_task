import { computed, type Ref } from 'vue'

export function useSearch<T>(data: Ref<T[]>, searchQuery: Ref<string>) {
  return computed(() => {
    return data.value.filter((item) =>
      String(item).toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  })
}
