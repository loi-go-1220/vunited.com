export default function About() {
  return (
    <>
      <section className="container section split">
        <div>
          <h1 className="h1">About VUnited</h1>
          <p className="lead">
            VUnited brings together people and technology to build products that last. We're a
            distributed team that values clarity, ownership and kindness.
          </p>
        </div>
        <img className="split__img" src="/images/about.jpg" alt="" />
      </section>

      <section id="contact" className="band">
        <div className="container band__grid">
          <div>
            <h2 className="h2">Get in touch</h2>
            <p className="lead lead--sm">Questions, ideas, or want to write with us? We'd love to hear from you.</p>
          </div>
          <div className="band__right">
            <p className="eyebrow">Email</p>
            <a className="contact" href="mailto:hello@vunited.com">hello@vunited.com</a>
          </div>
        </div>
      </section>
    </>
  )
}
