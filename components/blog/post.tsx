import Link from "next/link"

import type { Page } from "@paragraphcms/client"
import { ParagraphContent } from "@paragraphcms/parser-react"

export function Post({
  defaultLocale,
  locale,
  page,
}: {
  defaultLocale: string
  locale: string
  page: Page
}) {
  const prefix = locale === defaultLocale ? "" : `/${locale}`

  return (
    <main>
      <p>
        <Link href={`${prefix}/blog`}>Back to blog</Link>
      </p>
      <h1>{page.title}</h1>
      <ParagraphContent content={page.content} />
    </main>
  )
}
