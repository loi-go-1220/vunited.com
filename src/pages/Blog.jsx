import { useSearchParams } from 'react-router-dom'
import { posts, allTags } from '../posts/index.js'
import PostCard from '../components/PostCard.jsx'
import usePageMeta from '../usePageMeta.js'

export default function Blog() {
  usePageMeta('Insights', 'Practical guides on hiring international talent and landing a job with a US company.')
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
    <section className="section container">
      <p className="kicker">Insights</p>
      <h1 className="h1">Guides for employers and job seekers</h1>
      <p className="lead">Practical advice on hiring international talent and building a career with US companies.</p>

      <div className="filters">
        <input
          type="search"
          className="search"
          placeholder="Search articles…"
          aria-label="Search articles"
          value={params.get('q') || ''}
          onChange={(e) => update('q', e.target.value)}
        />
        <div className="chips">
          <button className={`chip chip--btn${!tag ? ' chip--active' : ''}`} onClick={() => update('tag', '')}>All</button>
          {allTags.map((t) => (
            <button key={t} className={`chip chip--btn${tag === t ? ' chip--active' : ''}`} onClick={() => update('tag', t)}>
              {t}
            </button>
          ))}
        </div>
      </div>

      {list.length ? (
        <div className="grid">{list.map((p) => <PostCard key={p.slug} post={p} />)}</div>
      ) : (
        <p className="empty">No articles match your search.</p>
      )}
    </section>
  )
}
