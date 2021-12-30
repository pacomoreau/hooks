import { useEffect, useRef } from "react"

export const useLogRender = (name = "component") => {
  const count = useRef(1)

  useEffect(() => {
    console.count(name)
    count.current++
  })

  return count.current
}
