import { allPages, pageHtml } from '@/lib/pages'
import PageBody from './PageBody'

export default function Home() {
  return <PageBody html={pageHtml('index')} script={allPages().index.script} />
}
