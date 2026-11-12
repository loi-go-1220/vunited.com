import { useSearchParams } from 'react-router-dom'
import { posts, allTags } from '../posts/index.js'
import PostCard from '../components/PostCard.jsx'

export default function Blog() {
  const [params, setParams] = useSearchParams()
  const tag = params.get('tag')
  const q = (params.get('q') || '').toLowerCase()

  const list = posts.filter(
    (p) =>
      (!tag || p.tags.includes(tag)) &&
      (!q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q))
  )

  const update = (key, value) => {
    const next = new URLSearchParams(params)
    value ? next.set(key, value) : next.delete(key)
    setParams(next, { replace: true })
  }

  return (
    <section className="container section">
      <h1 className="h1">Blog</h1>
      <p className="lead">Everything we've written, newest first.</p>

      <div className="filters">
        <input
          type="search"
          className="search"
          placeholder="Search posts…"
          value={params.get('q') || ''}
          onChange={(e) => update('q', e.target.value)}
        />
        <div className="chips">
          <button className={`chip${!tag ? ' chip--active' : ''}`} onClick={() => update('tag', '')}>All</button>
          {allTags.map((t) => (
            <button key={t} className={`chip${tag === t ? ' chip--active' : ''}`} onClick={() => update('tag', t)}>
              {t}
            </button>
          ))}
        </div>
      </div>

      {list.length ? (
        <div className="grid">{list.map((p) => <PostCard key={p.slug} post={p} />)}</div>
      ) : (
        <p className="empty">No posts match your filters.</p>
      )}
    </section>
  )
}
