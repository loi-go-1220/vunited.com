import { Link } from 'react-router-dom'
import { posts, allTags } from '../posts/index.js'
import PostCard from '../components/PostCard.jsx'

export default function Home() {
  return (
    <>
      <section className="container hero">
        <div>
          <h1 className="hero__title">Stories, ideas and lessons from the VUnited team</h1>
          <p className="lead">
            Notes on how we build products, work together across borders, and grow as a company —
            written by the people doing the work.
          </p>
          <div className="hero__actions">
            <Link to="/blog" className="btn btn--primary btn--lg">Read the blog</Link>
            <Link to="/about" className="btn btn--ghost btn--lg">Learn about us</Link>
          </div>
        </div>
        <img
          className="hero__img"
          src="/images/hero.jpg"
          alt="The VUnited team working together"
        />
      </section>

      <section id="topics" className="band">
        <div className="container band__grid">
          <div>
            <h2 className="h2">Find what interests you</h2>
            <p className="lead lead--sm">From engineering deep-dives to culture and company news — browse by topic.</p>
          </div>
          <div className="band__right">
            <p className="eyebrow">Topics</p>
            <div className="chips">
              {allTags.map((t) => (
                <Link key={t} to={`/blog?tag=${encodeURIComponent(t)}`} className="chip">{t}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section__head">
          <h2 className="h2">Latest posts</h2>
          <Link to="/blog" className="text-link">View all →</Link>
        </div>
        <div className="grid">
          {posts.slice(0, 3).map((p) => <PostCard key={p.slug} post={p} />)}
        </div>
      </section>

      <section className="container section split">
        <img className="split__img" src="/images/team.jpg" alt="" />
        <div>
          <h2 className="h2">Built by a team that cares</h2>
          <p className="lead lead--sm">
            We're a group of engineers, designers and operators who believe good work comes from
            clear thinking and kind collaboration.
          </p>
          <Link to="/about" className="btn btn--outline" style={{ marginTop: 24 }}>Meet the team</Link>
        </div>
      </section>
    </>
  )
}
