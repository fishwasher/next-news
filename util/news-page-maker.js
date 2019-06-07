import {setGlobal} from 'reactn';
import getConf from './news-categories';
import getNews from './news-api';

import NewsPage from '../components/news-page';

const newsPageFactory = category => {

  const {title, description} = getConf(category);

  const getPageData = async () => await getNews({category});
  
  const NewsCategoryPage = function(props) {
    
    setGlobal({
      category,
      article: null
    });

    let articles = props.articles;
    if (!articles) {
      articles = getPageData().articles;
    }

    const pageProps = {title, description, articles};

    return (<NewsPage {...pageProps} />);
  };

  NewsCategoryPage.getInitialProps = async function() {
    const data = await getPageData(); // default page size is used if not configured
    const {articles} = data;
    return {articles};
  }

  return NewsCategoryPage;
}
export default newsPageFactory;
