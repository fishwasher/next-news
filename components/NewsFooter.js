
const Footer = () => (
  <footer>
    <span>:)2019 Vlad Podvorny</span>
    <span>
      <a href="https://newsapi.org/" rel="noreferrer" target="_blank">Powered by NewsAPI</a>
    </span>
    <style jsx>{`
      footer {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
      }

      span {
        align-self: stretch;
      }
    `}</style>
  </footer>
)

export default Footer