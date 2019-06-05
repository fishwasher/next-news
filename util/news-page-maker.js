import { setGlobal } from 'reactn';
import getConf from './news-categories';
import getNews from './news-api';
import Head from '../components/news-head';
import NewsContainer from '../components/news-container';
import ArticleContainer from '../components/article-container';
import NavBox from '../components/news-nav';
import Footer from '../components/news-footer';

const country = 'us';



const newsPageFactory = category => {

  const {title, description, pageSize} = getConf(category);

  // default page size is used if not configured
  const getPageData = async () => await getNews(category, 'us', pageSize);
  
  const NewsCategoryPage = function(props) {
    
    setGlobal({
      category,
      article: null
    });

    let articles = props.articles;
    if (!articles) {
      articles = getPageData().articles;
    }

    return [
      <Head title={title} description={description} />,
      <NavBox />,
      <NewsContainer articles={articles} />,
      <ArticleContainer />,
      <Footer />,
    ];
  };

  NewsCategoryPage.getInitialProps = async function() {
    const data = await getPageData(); // default page size is used if not configured
    const {articles} = data;
    return {articles};
  }

  return NewsCategoryPage;
}
export default newsPageFactory;
