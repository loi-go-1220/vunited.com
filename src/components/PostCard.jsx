import { Link } from 'react-router-dom'
import { formatDate, readingTime } from '../posts/index.js'

export default function PostCard({ post }) {
  return (
    <article className="card">
      <Link to={`/blog/${post.slug}`} className="card__link">
        <img src={post.cover} alt="" className="card__img" loading="lazy" />
        <div className="card__body">
          <div className="meta">
            <span className="eyebrow">{post.tags[0]}</span>
            <span aria-hidden="true">·</span>
            <span>{readingTime(post.body)} min read</span>
          </div>
          <h3 className="card__title">{post.title}</h3>
          <p className="card__excerpt">{post.excerpt}</p>
          <time className="card__date" dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
      </Link>
    </article>
  )
}
