import { computed, type Ref } from 'vue'
import _ from 'lodash'
import { Sort } from '@/interfaces/Utility'

export function useSort<T extends { name: string }>(data: Ref<T[]>, sortOrder: Ref<Sort>) {
  return computed(() => {
    return _.orderBy(data.value, ['name'], [sortOrder.value])
  })
}
