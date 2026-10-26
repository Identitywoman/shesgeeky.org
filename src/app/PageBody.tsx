'use client'

import { useEffect, useRef } from 'react'

// Renders a carried-over page. If the page has a signup script (Email Octopus),
// it is loaded into the page's form slot after render.
export default function PageBody({ html, script }: { html: string; script: string | null }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!script || !ref.current) return
    const slot = ref.current.querySelector('.eo-form-slot') || ref.current
    if (slot.querySelector('script')) return
    const s = document.createElement('script')
    s.src = script
    s.async = true
    const formId = script.match(/form\/([^.]+)\.js/)?.[1]
    if (formId) s.dataset.form = formId
    slot.appendChild(s)
  }, [script])

  return <div ref={ref} className="page-body" dangerouslySetInnerHTML={{ __html: html }} />
}
