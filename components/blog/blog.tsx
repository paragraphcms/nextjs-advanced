import Link from "next/link"

type BlogPost = {
  id: string
  slug: string
  title: string
}

export function Blog({
  defaultLocale,
  locale,
  posts,
}: {
  defaultLocale: string
  locale: string
  posts: BlogPost[]
}) {
  const prefix = locale === defaultLocale ? "" : `/${locale}`

  return (
    <main>
      <h1>Blog</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`${prefix}/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
