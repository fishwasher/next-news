import NavBox from './news-nav'
import Footer from './news-footer'

const Layout = props => (
  <div>
    <NavBox />
    {props.children}
    <Footer />
  </div>
)

export default Layout
