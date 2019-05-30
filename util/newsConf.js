const catlist = [
  //'general',
  'business',
  'technology',
  'science',
  'entertainment',
  'sports',
  'health',
]

const newsConf = (() => {
  const obj = {}
  catlist.forEach(cat => {
    obj[cat] = {
      title: cat.charAt(0).toLocaleUpperCase + cat.substring(1)
    }
    obj[cat].desctiption = obj[cat].title + ' News from US sources provided by NewsAPI'
  })
  return obj;
})()

export default newsConf
