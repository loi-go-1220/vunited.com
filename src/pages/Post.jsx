import { useParams, Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import { getPost, posts, formatDate, readingTime } from '../posts/index.js'
import PostCard from '../components/PostCard.jsx'
import CtaBand from '../components/CtaBand.jsx'
import usePageMeta from '../usePageMeta.js'
import NotFound from './NotFound.jsx'

export default function Post() {
  const { slug } = useParams()
  const post = getPost(slug)
  usePageMeta(post?.title, post?.excerpt)
  if (!post) return <NotFound />

  const related = posts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <article className="container article">
        <Link to="/blog" className="text-link">← All insights</Link>
        <div className="meta" style={{ marginTop: 28 }}>
          {post.tags.map((t) => (
            <Link key={t} to={`/blog?tag=${encodeURIComponent(t)}`} className="eyebrow">{t}</Link>
          ))}
        </div>
        <h1 className="h1 article__title">{post.title}</h1>
        <div className="meta">
          <span>{post.author}</span><span aria-hidden="true">·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time><span aria-hidden="true">·</span>
          <span>{readingTime(post.body)} min read</span>
        </div>
        <img src={post.cover} alt="" className="article__cover" />
        <div className="prose">
          <Markdown
            components={{
              a: ({ href = '', children }) =>
                href.startsWith('/') ? <Link to={href}>{children}</Link> : <a href={href} target="_blank" rel="noreferrer">{children}</a>,
            }}
          >
            {post.body}
          </Markdown>
        </div>
      </article>

      {related.length > 0 && (
        <section className="band">
          <div className="container">
            <h2 className="h2" style={{ marginBottom: 32 }}>More insights</h2>
            <div className="grid">{related.map((p) => <PostCard key={p.slug} post={p} />)}</div>
          </div>
        </section>
      )}
      <CtaBand />
    </>
  )
}
