import NavBox from './news-nav';
import Footer from './news-footer';
import ArticleModal from './article-modal';

const Layout = props => [
  <div>
    <NavBox />
    {props.children}
    <Footer />
  </div>,
  <ArticleModal />
];

export default Layout;
