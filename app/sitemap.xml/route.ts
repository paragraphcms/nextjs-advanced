import { seo } from "@/paragraph.config"

export async function GET() {
  return new Response(await seo.sitemapXml(), {
    headers: {
      "content-type": "application/xml; charset=utf-8",
    },
  })
}
