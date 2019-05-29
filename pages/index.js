import Link from 'next/link'
import '../styles/HomeContainer.less'

export default function HomePage() {
  return (
    <div className="wrap1">
      <div className="wrap2">
      <h1>Next News Project</h1>
      <div>
        <Link href="/business">
          <a>Business News</a>
        </Link>
      </div>
      </div>
    </div>
  )
}
