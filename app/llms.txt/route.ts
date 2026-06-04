import { seo } from "@/paragraph.config"

export async function GET() {
  return new Response(await seo.llmsTxt(), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  })
}
