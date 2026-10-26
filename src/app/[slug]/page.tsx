import type { Metadata } from 'next'
import { allPages, pageHtml } from '@/lib/pages'
import PageBody from '../PageBody'

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(allPages())
    .filter((slug) => slug !== 'index')
    .map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return { title: `${allPages()[params.slug].title} | She's Geeky` }
}

export default function Page({ params }: { params: { slug: string } }) {
  return <PageBody html={pageHtml(params.slug)} script={allPages()[params.slug].script} />
}
