import { useCallback, useEffect, useState } from 'react'
import { useSmoothScroll } from '@/hooks/useSmoothScroll.js'

const DEFAULT_HEADER_OFFSET = 128

function resolveHashFromLocation(hashes) {
  const { hash } = window.location
  return hash && hashes.includes(hash) ? hash : null
}

function scrollToHash(hash, headerOffset, scrollTo, isSmooth) {
  const id = hash.replace(/^#/, '')
  const element = document.getElementById(id)
  if (!element) return

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  scrollTo(element, {
    // Lenis already applies scroll-margin from CSS; manual offset would double-count.
    offset: isSmooth() ? 0 : -headerOffset,
    immediate: prefersReducedMotion,
  })
}

export function useActiveSection(
  hashes = [],
  { headerOffset = DEFAULT_HEADER_OFFSET, scrollRootId = 'site-main' } = {},
) {
  const { scrollTo, isSmooth } = useSmoothScroll()
  const hashKey = hashes.join('|')

  const [activeHash, setActiveHash] = useState(null)

  useEffect(() => {
    if (!hashes.length) {
      setActiveHash(null)
      return undefined
    }

    setActiveHash(resolveHashFromLocation(hashes) ?? hashes[0])

    const syncFromHash = (shouldScroll = false) => {
      const fromLocation = resolveHashFromLocation(hashes)
      if (fromLocation) {
        setActiveHash(fromLocation)
        if (shouldScroll) {
          scrollToHash(fromLocation, headerOffset, scrollTo, isSmooth)
        }
      }
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const handleHashChange = () => syncFromHash(true)

    if (prefersReducedMotion) {
      syncFromHash(resolveHashFromLocation(hashes) !== null)
      window.addEventListener('hashchange', handleHashChange)
      return () => window.removeEventListener('hashchange', handleHashChange)
    }

    const sections = hashes
      .map((hash) => {
        const id = hash.replace(/^#/, '')
        const element = document.getElementById(id)
        return element ? { hash, element } : null
      })
      .filter(Boolean)

    if (!sections.length) {
      syncFromHash(resolveHashFromLocation(hashes) !== null)
      return undefined
    }

    const visible = new Set()

    const pickActive = () => {
      for (let index = sections.length - 1; index >= 0; index -= 1) {
        if (visible.has(sections[index].hash)) {
          setActiveHash(sections[index].hash)
          return
        }
      }
    }

    const scrollRoot = scrollRootId
      ? document.getElementById(scrollRootId)
      : null

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const hash = `#${entry.target.id}`
          if (entry.isIntersecting) {
            visible.add(hash)
          } else {
            visible.delete(hash)
          }
        })
        pickActive()
      },
      {
        root: scrollRoot,
        rootMargin: `-${headerOffset}px 0px -45% 0px`,
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    )

    sections.forEach(({ element }) => observer.observe(element))

    syncFromHash(resolveHashFromLocation(hashes) !== null)
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [hashKey, headerOffset, scrollRootId, scrollTo, isSmooth])

  const navigateToHash = useCallback(
    (hash) => {
      if (!hashes.includes(hash)) return

      setActiveHash(hash)
      scrollToHash(hash, headerOffset, scrollTo, isSmooth)

      if (window.location.hash !== hash) {
        window.history.pushState(null, '', hash)
      }
    },
    [hashKey, headerOffset, scrollTo, isSmooth],
  )

  return { activeHash, navigateToHash }
}
