'use client'

import { createContext, useCallback, useContext, useMemo } from 'react'

const SmoothScrollContext = createContext(null)

function getScrollTop(scrollRoot, element, offset) {
  const rootRect = scrollRoot.getBoundingClientRect()
  const elementRect = element.getBoundingClientRect()
  let top = scrollRoot.scrollTop + (elementRect.top - rootRect.top) + offset

  if (offset === 0) {
    top -= parseFloat(getComputedStyle(element).scrollMarginTop) || 0
  }

  return top
}

export function SmoothScrollProvider({ children, scrollRootId = 'site-main' }) {
  const scrollTo = useCallback(
    (target, options = {}) => {
      const { offset = 0, immediate = false } = options
      const element =
        typeof target === 'string' ? document.querySelector(target) : target

      if (!element) return

      const scrollRoot = document.getElementById(scrollRootId)

      if (scrollRoot) {
        const top = getScrollTop(scrollRoot, element, offset)

        scrollRoot.scrollTo({
          top: Math.max(0, top),
          behavior: immediate ? 'auto' : 'smooth',
        })
        return
      }

      element.scrollIntoView({
        behavior: immediate ? 'auto' : 'smooth',
        block: 'start',
      })
    },
    [scrollRootId],
  )

  const isSmooth = useCallback(() => true, [])

  const value = useMemo(() => ({ scrollTo, isSmooth }), [scrollTo, isSmooth])

  return (
    <SmoothScrollContext.Provider value={value}>
      {children}
    </SmoothScrollContext.Provider>
  )
}

export function useSmoothScroll() {
  const context = useContext(SmoothScrollContext)

  if (!context) {
    throw new Error('useSmoothScroll must be used within SmoothScrollProvider')
  }

  return context
}
