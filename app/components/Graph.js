"use client"

import functionPlot from "function-plot"
import { useEffect, useRef } from "react"
import { Container } from "@mui/material";

export default function Graph({ equation }) {

  const rootEl = useRef(null);

  useEffect(() => {
    functionPlot({
      target: rootEl.current,
      width: rootEl.current.offsetWidth,
      data: [{
        fn: equation
      }],
      grid: true,
    })
  })
  return (
    <div ref={rootEl} sx={{width:"inherit"}}/>
  )
}
