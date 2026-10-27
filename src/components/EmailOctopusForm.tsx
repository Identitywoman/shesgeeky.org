'use client'

import { useEffect, useRef } from 'react'

// The She's Geeky mailing list signup, embedded from Email Octopus.
const FORM_ID = '5c3cb87c-1ca0-11f1-81e7-2fc416113e8f'

export default function EmailOctopusForm() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slot = ref.current
    if (!slot || slot.querySelector('script')) return
    const s = document.createElement('script')
    s.src = `https://eomail1.com/form/${FORM_ID}.js`
    s.async = true
    s.dataset.form = FORM_ID
    slot.appendChild(s)
  }, [])

  return <div ref={ref} className="eo-form" />
}
