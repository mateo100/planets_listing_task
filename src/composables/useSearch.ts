import { computed, type Ref } from 'vue'

export function useSearch<T extends { name: string }>(data: Ref<T[]>, searchQuery: Ref<string>) {
  return computed(() => {
    return data.value.filter((item) =>
      String(item.name).toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  })
}
