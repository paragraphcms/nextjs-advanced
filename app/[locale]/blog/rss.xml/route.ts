import { client, seo } from "@/paragraph.config"

export async function GET(
  _request: Request,
  context: { params: Promise<{ locale: string }> }
) {
  const { locale } = await context.params
  const { data: defaultLocale, error } = await client.locales.getDefaultLocale()

  if (error) {
    throw error
  }

  if (locale === defaultLocale) {
    return new Response("Not Found", { status: 404 })
  }

  return new Response(
    await seo.rssXml({
      locale,
      route: "blog",
    }),
    {
      headers: {
        "content-type": "application/rss+xml; charset=utf-8",
      },
    }
  )
}
