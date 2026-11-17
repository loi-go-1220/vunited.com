import { useEffect } from 'react'
import { site } from './site.js'

// Sets the browser tab title and meta description for each page.
export default function usePageMeta(title, description = site.description) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : `${site.name} — ${site.tagline}`
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])
}
