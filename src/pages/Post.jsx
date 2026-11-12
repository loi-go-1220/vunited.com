import { useParams, Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import { getPost, posts, formatDate, readingTime } from '../posts/index.js'
import PostCard from '../components/PostCard.jsx'
import NotFound from './NotFound.jsx'

export default function Post() {
  const { slug } = useParams()
  const post = getPost(slug)
  if (!post) return <NotFound />

  const related = posts
    .filter((p) => p.slug !== slug && p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 2)

  return (
    <>
      <article className="container article">
        <Link to="/blog" className="text-link">← All posts</Link>
        <div className="meta" style={{ marginTop: 24 }}>
          {post.tags.map((t) => (
            <Link key={t} to={`/blog?tag=${encodeURIComponent(t)}`} className="eyebrow">{t}</Link>
          ))}
        </div>
        <h1 className="h1 article__title">{post.title}</h1>
        <div className="meta">
          <span>{post.author}</span><span>·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time><span>·</span>
          <span>{readingTime(post.body)} min read</span>
        </div>
        <img src={post.cover} alt="" className="article__cover" />
        <div className="prose">
          <Markdown>{post.body}</Markdown>
        </div>
      </article>

      {related.length > 0 && (
        <section className="band">
          <div className="container">
            <h2 className="h2" style={{ marginBottom: 32 }}>Keep reading</h2>
            <div className="grid grid--2">{related.map((p) => <PostCard key={p.slug} post={p} />)}</div>
          </div>
        </section>
      )}
    </>
  )
}
