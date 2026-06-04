import { Blog } from "@/components/blog/blog"
import { client } from "@/paragraph.config"

export default async function Page() {
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

  return <Blog defaultLocale={defaultLocale} locale={defaultLocale} posts={posts} />
}
