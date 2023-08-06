"use client"

import functionPlot from "function-plot"
import { useEffect, useRef } from "react"

export default function Graph({ equation }) {

  const rootEl = useRef(null);

  useEffect(() => {
    functionPlot({
      target: rootEl.current,
      width: 900,
      data: [{
        fn: equation
      }],
      grid: true,
    })
  })
  return (
    <div ref={rootEl}></div>
  )
}
