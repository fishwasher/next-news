import {useState} from 'react';
import {useGlobal} from 'reactn';
import Link from 'next/link';
import getConf, {catlist} from '../util/news-categories';
import KeyHandler from './global-key-handler';
import '../styles/news-nav.less';


const NavBox = () => {

  const [category] = useGlobal('category');
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => setExpanded(false);
  const toggleMenu = () => setExpanded(!expanded);

  const itemContent = (catname, idx) => {
    const {title} = getConf(catname);
    if (catname === category) return (
      <li key={idx} className="current">
        <span>{title}</span>
      </li>
      );
    return (
      <li key={idx}>
        <Link href={'/' + catname}>
          <a>{title}</a>
        </Link>
      </li>
    );
  };

  return [
    <div className="news-nav">
      <span className="menu-trigger button" onClick={toggleMenu} />
      {expanded ?
        [<KeyHandler callback={closeMenu} />,
        <div className="backplane" onClick={closeMenu}>
          <div className="list-holder">
          <ul className="menu-list">
          {catlist.map((catname, idx) => {
            return itemContent(catname, idx)
          })}
          </ul>
          </div>
        </div>]
        : null
      }
      </div>
  ];

};

export default NavBox
