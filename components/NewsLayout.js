import NavBox from './NewsNav'
import Footer from './NewsFooter'

const Layout = props => (
  <div>
    <NavBox />
    {props.children}
    <Footer />
  </div>
)

export default Layout
