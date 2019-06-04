import Link from 'next/link'
import {catlist} from '../util/news-categories'
import '../styles/homepage.less'

export default function HomePage() {
  return (
    <div className="home-wrap">
      <div className="home-inner">
      <h1>The Next News Project</h1>
      <div className="categories">
        <ul>
        {catlist.map((cat, i) => (
          <li key={i}>
            <Link href={'/' + cat}>
              <a>{cat}</a>
            </Link>
          </li>
        ))}
        </ul>
      </div>
      </div>
    </div>
  )
}
