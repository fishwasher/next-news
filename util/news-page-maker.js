import { setGlobal } from 'reactn';
import getConf from './news-categories';
import getNews from './news-api';
import Head from '../components/news-head';
import NewsContainer from '../components/news-container';
import ArticleContainer from '../components/article-container';
import NavBox from '../components/news-nav';
import Footer from '../components/news-footer';

const newsPageFactory = category => {

  const {title, description, pageSize} = getConf(category);
  
  const NewsCategoryPage = function(props) {
    
    setGlobal({
      article: null
    });

    return [
      <Head title={title} description={description} />,
      <NavBox />,
      <NewsContainer articles={props.articles} />,
      <ArticleContainer />,
      <Footer />,
    ];
  };

  NewsCategoryPage.getInitialProps = async function() {
    const data = await getNews(category, 'us', pageSize); // default page size is used if not configured
    const {articles} = data;
    return {articles};
  }

  return NewsCategoryPage;
}
export default newsPageFactory;
