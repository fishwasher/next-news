import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const NavBox = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/business">
      <a style={linkStyle}>Business</a>
    </Link>
  </div>
)

export default NavBox
