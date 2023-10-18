'use client'

import createGlobe from 'cobe'
import { useTheme } from 'next-themes'
import { useEffect, useRef } from 'react'

const Globe = () => {
  const canvasRef = useRef()
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    let phi = 0

    let width = 0
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth)
    window.addEventListener('resize', onResize)
    onResize()

    const baseColor =
      resolvedTheme === 'dark' ? [0.3, 0.3, 0.3] : [0.9, 0.9, 0.9]
    const glowColor = resolvedTheme === 'dark' ? [0, 0, 0] : [1, 1, 1]

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2 * 0.4,
      phi: 0,
      theta: 0,
      dark: resolvedTheme === 'dark' ? 1 : 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor,
      markerColor: [0.1, 0.8, 1],
      glowColor,
      markers: [],
      scale: 2.8,
      offset: [0, width * 0.5],
      onRender: state => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.width = width * 2
        state.height = width * 2 * 0.4
        state.phi = phi
        phi += 0.005
      }
    })

    setTimeout(() => (canvasRef.current.style.opacity = '1'))
    return () => {
      globe.destroy()
    }
  }, [resolvedTheme])
  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        aspectRatio: 1,
        contain: 'layout paint size',
        opacity: 0.1,
        transition: 'opacity 1s ease'
      }}
    />
  )
}

export default Globe
