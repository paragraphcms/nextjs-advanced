import { notFound } from "next/navigation"

import { Post } from "@/components/blog/post"
import { client } from "@/paragraph.config"

export const dynamicParams = false

export async function generateStaticParams() {
  const { data: locales, error: localesError } = await client.locales.list()

  if (localesError) {
    throw localesError
  }

  const { data: defaultLocale, error: defaultLocaleError } =
    await client.locales.getDefaultLocale()

  if (defaultLocaleError) {
    throw defaultLocaleError
  }

  const params: { locale: string; slug: string }[] = []

  for (const locale of locales) {
    if (locale.code === defaultLocale) {
      continue
    }

    const { data: posts, error } = await client.pages.list({
      language: locale.code,
      requiredSlug: true,
    })

    if (error) {
      throw error
    }

    params.push(
      ...posts.map((post) => ({ locale: locale.code, slug: post.slug }))
    )
  }

  return params
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const { data: defaultLocale, error } = await client.locales.getDefaultLocale()

  if (error) {
    throw error
  }

  if (locale === defaultLocale) {
    notFound()
  }

  const { data: page, error: pageError } = await client.page.getBySlug(slug)

  if (pageError) {
    throw pageError
  }

  if (page.language !== locale) {
    notFound()
  }

  return <Post defaultLocale={defaultLocale} locale={locale} page={page} />
}
