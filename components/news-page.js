import Head from './news-head';
import Header from './news-header';
import NewsContainer from './news-container';
import ArticleContainer from './article-container';
import Footer from './news-footer';

const NewsPage = props => [
  <Head title={props.title} description={props.description} />,
  <Header title={props.title} />,
  <NewsContainer articles={props.articles} />,
  <ArticleContainer />,
  <Footer />,
];

export default NewsPage;
