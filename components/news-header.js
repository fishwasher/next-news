import Menu from './news-nav';
import '../styles/news-header.less';

const Header = props => [
  <header className="news-header">
    <h1>{'News in ' + props.title}</h1>
    <Menu />
  </header>
];

export default Header;
