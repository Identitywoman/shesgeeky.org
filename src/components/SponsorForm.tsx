'use client'

import { useState } from 'react'
import { contactEmail } from '@/lib/site'

// The WordPress sponsor form posted into WordPress, which a static site cannot do.
// Until a form service is chosen, this opens the sponsor's own email program with
// their answers filled in, addressed to She's Geeky.

const inKindOptions = [
  'Food',
  'Beverages',
  'Supportive technology for capturing, storing, organizing and sharing intelligence from the event sessions',
  'Promotional Schwag',
  'Advertising Media',
  'Supportive event experiences',
  'Parking subsidy at local garage for ticket holders',
  'Event supplies',
  'Other idea not listed',
]

const benefitOptions = [
  'Promoted on shesgeeky.org',
  'Promoted at the event with signage',
  'Promoted via tabling at the event (Seed and Garden levels exclusive)',
  'Promoted in our outreach communications (presenting sponsor exclusive)',
  "Promoted on She's Geeky Schwag (presenting sponsor exclusive)",
  'Other idea not listed',
]

export default function SponsorForm() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const all = (k: string) => f.getAll(k).join('; ') || '-'
    const one = (k: string) => String(f.get(k) || '-')
    const body = [
      `Name: ${one('first')} ${one('last')}`,
      `Email: ${one('email')}`,
      `Phone: ${one('phone')}`,
      `Organization and URL: ${one('org')}`,
      `Role: ${one('role')}`,
      `Preferred contact method: ${one('contact')}`,
      `Type of sponsorship: ${one('type')}`,
      `In kind: ${all('inkind')}`,
      `Budget: ${one('budget')}`,
      `Benefits of interest: ${all('benefits')}`,
      '',
      one('notes'),
    ].join('\n')
    const subject = `She's Geeky sponsorship inquiry: ${one('org')}`
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form className="sponsor-form" onSubmit={onSubmit}>
      <div className="field-row">
        <label>First Name<input name="first" required /></label>
        <label>Last Name<input name="last" required /></label>
      </div>
      <div className="field-row">
        <label>Email address<input name="email" type="email" required /></label>
        <label>Phone number<input name="phone" type="tel" /></label>
      </div>
      <div className="field-row">
        <label>Organization and URL<input name="org" required /></label>
        <label>Your role with the organization<input name="role" /></label>
      </div>

      <fieldset>
        <legend>Preferred contact method</legend>
        {['Phone', 'Email', 'Text to set up meeting'].map((o) => (
          <label key={o} className="choice"><input type="radio" name="contact" value={o} />{o}</label>
        ))}
      </fieldset>

      <fieldset>
        <legend>What type of sponsorship are you offering?</legend>
        {['Financial', 'In Kind', 'Both', 'Other'].map((o) => (
          <label key={o} className="choice"><input type="radio" name="type" value={o} />{o}</label>
        ))}
      </fieldset>

      <fieldset>
        <legend>For In Kind sponsors, please select all that apply</legend>
        {inKindOptions.map((o) => (
          <label key={o} className="choice"><input type="checkbox" name="inkind" value={o} />{o}</label>
        ))}
      </fieldset>

      <fieldset>
        <legend>What is your budget?</legend>
        {['$1,000 - $5,000', '$5,000 - $10,000', '$10,000 - $50,000', '$50,000+'].map((o) => (
          <label key={o} className="choice"><input type="radio" name="budget" value={o} />{o}</label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Please select all of the She&rsquo;s Geeky sponsor benefits that interest you</legend>
        {benefitOptions.map((o) => (
          <label key={o} className="choice"><input type="checkbox" name="benefits" value={o} />{o}</label>
        ))}
      </fieldset>

      <label>
        Please share anything else we should know before reaching out, and thank you!
        <textarea name="notes" rows={5} />
      </label>

      <button className="btn" type="submit">Send inquiry</button>
      {sent && (
        <p className="form-note">
          Your email program should open with your answers filled in. If it doesn&rsquo;t, write to us at{' '}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </p>
      )}
    </form>
  )
}
