import { ref, onMounted, type Ref } from 'vue'
import axios from 'axios'

export function useFetchData<T>(url: string): {
  data: Ref<T | null>
  loading: Ref<boolean>
  error: Ref<string | null>
} {
  const data: Ref<T | null> = ref(null)
  const loading = ref(true)
  const error = ref<string | null>(null)

  onMounted(async () => {
    try {
      const response = await axios.get(url)
      data.value = response.data as T
    } catch (err) {
      error.value = (err as Error).message || 'An error occurred'
    } finally {
      loading.value = false
    }
  })

  return { data, loading, error }
}
