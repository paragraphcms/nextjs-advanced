import { Client, type PageSummaryWithSlug } from "@paragraphcms/client"
import { SEO, localizedContentRoute, localizedRoute } from "@paragraphcms/seo"

const apiKey = process.env.PARAGRAPH_API_KEY

if (!apiKey) {
  throw new Error("PARAGRAPH_API_KEY environment variable is not set")
}

export const client = new Client({ apiKey })

export const seo = new SEO({
  client,
  site: {
    url: "https://example.com",
    name: "Next.js Starter",
  },
  routes: {
    home: localizedRoute("blog"),
    blog: localizedContentRoute("blog"),
  },
})
