// Loads every Markdown file in this folder as a blog post.
// Each file starts with a front-matter block:
// ---
// title: My post
// date: 2026-11-01
// author: Jane Doe
// tags: Engineering, Culture
// cover: https://...
// excerpt: One-line summary
// ---
const files = import.meta.glob('./*.md', { query: '?raw', import: 'default', eager: true })

function parse(raw, path) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  const meta = {}
  if (match) {
    for (const line of match[1].split(/\r?\n/)) {
      const i = line.indexOf(':')
      if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim()
    }
  }
  const slug = path.replace('./', '').replace(/\.md$/, '')
  return {
    slug,
    title: meta.title || slug,
    date: meta.date || '',
    author: meta.author || 'VUnited Team',
    tags: (meta.tags || 'News').split(',').map((t) => t.trim()).filter(Boolean),
    cover: meta.cover || "/images/welcome.jpg",
    excerpt: meta.excerpt || '',
    body: match ? match[2] : raw,
  }
}

export const posts = Object.entries(files)
  .map(([path, raw]) => parse(raw, path))
  .sort((a, b) => b.date.localeCompare(a.date))

export const allTags = [...new Set(posts.flatMap((p) => p.tags))].sort()

export const getPost = (slug) => posts.find((p) => p.slug === slug)

export const readingTime = (text) => Math.max(1, Math.round(text.split(/\s+/).length / 220))

export const formatDate = (iso) =>
  iso ? new Date(iso + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''
