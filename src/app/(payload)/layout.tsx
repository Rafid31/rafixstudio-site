import type { ServerFunctionClient } from 'payload'
import '@payloadcms/next/css'
import React from 'react'

type Args = {
  children: React.ReactNode
}

const serverFunction: ServerFunctionClient = async function (args) {
  'use server'

  const { handleServerFunctions } = await import('@payloadcms/next/layouts')
  const config = await import('@payload-config')
  const { importMap } = await import('./admin/importMap')

  return handleServerFunctions({
    ...args,
    config: config.default,
    importMap,
  })
}

export default async function Layout({ children }: Args) {
  const { RootLayout } = await import('@payloadcms/next/layouts')
  const config = await import('@payload-config')
  const { importMap } = await import('./admin/importMap')

  return (
    <RootLayout
      config={config.default}
      importMap={importMap}
      serverFunction={serverFunction}
      htmlProps={{ suppressHydrationWarning: true }}
    >
      {children}
    </RootLayout>
  )
}
