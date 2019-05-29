import fetch from 'isomorphic-unfetch'

const getApiUrl = (category, country) => `http://podvorny.com/vendor/api?feed=newsapi&type=top&category=${category}&country=${country}&size=100`

const news = async (category, country = 'us') => {
  const url = getApiUrl(category, country)
  const ret = {}
  console.log(`fetching '${url}'`)
  try {
    const res = await fetch(url)
    const json = await res.json()
    if (json.error) throw new Error(json.error)
    if (!json.data) throw new Error("Data is missing")
    const data = json.data
    Object.assign(ret, data)
  } catch (x) {
    console.error(x)
  }
  return ret
}

export default news
