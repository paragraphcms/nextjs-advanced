import { notFound } from "next/navigation"

import { Blog } from "@/components/blog/blog"
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

  return locales
    .filter((locale) => locale.code !== defaultLocale)
    .map((locale) => ({ locale: locale.code }))
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const { data: defaultLocale, error: defaultLocaleError } =
    await client.locales.getDefaultLocale()

  if (defaultLocaleError) {
    throw defaultLocaleError
  }

  if (locale === defaultLocale) {
    notFound()
  }

  const { data: posts, error } = await client.pages.list({
    language: locale,
    requiredSlug: true,
  })

  if (error) {
    throw error
  }

  return <Blog defaultLocale={defaultLocale} locale={locale} posts={posts} />
}
