import { Post } from "@/components/blog/post"
import { client } from "@/paragraph.config"

export const dynamicParams = false

export async function generateStaticParams() {
  const { data: defaultLocale, error: defaultLocaleError } =
    await client.locales.getDefaultLocale()

  if (defaultLocaleError) {
    throw defaultLocaleError
  }

  const { data: posts, error } = await client.pages.list({
    language: defaultLocale,
    requiredSlug: true,
  })

  if (error) {
    throw error
  }

  return posts
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { data: defaultLocale, error } = await client.locales.getDefaultLocale()

  if (error) {
    throw error
  }

  const { data: page, error: pageError } = await client.page.getBySlug(slug)

  if (pageError) {
    throw pageError
  }

  return (
    <Post defaultLocale={defaultLocale} locale={defaultLocale} page={page} />
  )
}
