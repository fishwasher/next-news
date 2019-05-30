import Link from 'next/link'
import conf from '../util/newsConf'
import '../styles/homepage.less'

const categories = Object.keys(conf)

export default function HomePage() {
  return (
    <div className="home-wrap">
      <div className="home-inner">
      <h1>The Next News Project</h1>
      <div className="categories">
        <ul>
        {categories.map((cat, i) => (
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
