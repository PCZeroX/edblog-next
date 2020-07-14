import Head from 'next/head'

const About = () => (
  <div>
    <Head>
      <title>About | {process.env.SITE_NAME}</title>
    </Head>

    <main>
      <h1>About us (Acerca de nosotros)</h1>
      <span>Lorem ipsum ... - {process.env.API_BLOG}</span>
    </main>
  </div>
)

export default About