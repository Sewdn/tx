import { useCallback, useState } from "react"

export function useSearchField(initialValue = "") {
  const [value, setValue] = useState(initialValue)

  const onChange = useCallback((next: string) => {
    setValue(next)
  }, [])

  const clear = useCallback(() => {
    setValue("")
  }, [])

  return { value, onChange, clear }
}
