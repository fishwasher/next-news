export const catlist = [
  //'general',
  'business',
  'technology',
  'science',
  'entertainment',
  'sports',
  'health',
];

export const categories = (() => {
  const obj = {};
  catlist.forEach(cat => {
    obj[cat] = {
      title: cat.charAt(0).toLocaleUpperCase + cat.substring(1)
    };
    obj[cat].description = obj[cat].title + ' News from US sources provided by NewsAPI';
  })
  return obj;
})();

const getConf = category => categories[category] || {};

export default getConf;
