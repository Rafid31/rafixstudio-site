import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import config from '@payload-config'
import { importMap } from '../importMap'

export const dynamic = 'force-dynamic'

export const generateMetadata = ({ params, searchParams }: any) =>
  generatePageMetadata({ config, params, searchParams })

export default function Page({ params, searchParams }: any) {
  return RootPage({ config, params, searchParams, importMap })
}
