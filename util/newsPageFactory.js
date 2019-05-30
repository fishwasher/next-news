import conf from './newsConf'
import getNews from './getNews'
import Layout from '../components/NewsLayout'
import Head from '../components/CustomHead'
import NewsContainer from '../components/NewsContainer'

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
