import conf from './news-categories'
import getNews from './news-api'
import Layout from '../components/news-layout'
import Head from '../components/news-head'
import NewsContainer from '../components/news-container'

const newsPageFactory = category => {
  const {title, description, pageSize} = conf
  const NewsCategoryPage = function(props) {
    return (
      <Layout>
        <Head title={title} description={description} />
        <NewsContainer articles={props.articles} />
      </Layout>
    )
  }

  NewsCategoryPage.getInitialProps = async function() {
    const data = await getNews(category, 'us', pageSize) // default page size is used if not configured
    const {articles} = data
    return {articles}
  }

  return NewsCategoryPage
}
export default newsPageFactory
