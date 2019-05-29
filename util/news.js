//import fetch from 'isomorphic-unfetch'
import axios from 'axios'

/*
process.on('unhandledRejection', err => {
  console.log(err);
  throw err;
})
*/

const getApiUrl = (category, country) => `http://podvorny.com/vendor/api?feed=newsapi&type=top&category=${category}&country=${country}&size=100`

const news = async (category, country = 'us') => {
  const url = getApiUrl(category, country)
  const ret = {}
  console.log(`fetching '${url}'`)
  try {
    const res = await axios.get(url)
    if (res.error) throw new Error(res.error)
    if (!res.data) throw new Error("Data is missing")
    const data = res.data.data
    Object.assign(ret, data)
  } catch (x) {
    console.error(x)
  }
  return ret
}

export default news
