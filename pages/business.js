import news from '../util/news'
import Layout from '../components/NewsLayout'
import Head from '../components/CustomHead'
import NewsContainer from '../components/NewsContainer'

const category = 'business'
const title = 'Business News'
const description = 'Business News from US Sources'

export default function BusinessPage(props) {
  return (
    <Layout>
      <Head title={title} description={description} />
      <NewsContainer articles={props.articles} />
    </Layout>
  )
}

BusinessPage.getInitialProps = async function() {
  const data = await news('business', 'us')
  const {articles} = data

  articles && console.log(`News data fetched. Count: ${articles.length}`)

  return {articles}
}
