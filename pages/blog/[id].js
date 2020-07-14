import Head from 'next/head'
import fetch from 'node-fetch'
import Comments from '../../components/blog/Comments'

const PostBlog = ({ post }) => (
  <div>
    <Head>
      <title>{ post.title } | { process.env.SITE_NAME }</title>
    </Head>

    <main>
      <div>
        <h1> Post { post.id } - { post.title }</h1>
        <p>{ post.body }</p>

        <br />

        <p>Archivo JSON</p>

        <p>{ JSON.stringify(post) }</p>
      </div>

      <Comments id={ post.id } />

    </main>
  </div>
)

PostBlog.getInitialProps = async function (ctx) {
  const { id } = ctx.query
  const resp = await fetch(`${process.env.API_BLOG}/posts/${id}`)
  const post = await resp.json()

  return {
    post
  }
}

export default PostBlog
