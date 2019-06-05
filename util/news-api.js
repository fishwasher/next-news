import fetch from 'isomorphic-unfetch';

const getApiUrl = (category, country, pageSize) => `http://podvorny.com/vendor/api?feed=newsapi&type=top&category=${category}&country=${country}&size=${pageSize}`;

const getNews = async (category, country = 'us', pageSize = 50) => {
  const url = getApiUrl(category, country, pageSize);
  const ret = {};
  console.log(`fetching '${url}'`);
  try {
    const res = await fetch(url);
    const json = await res.json();
    if (json.error) throw new Error(json.error);
    const data = json.data || json; // might be wrapped in 'data' property
    Object.assign(ret, data);
  } catch (x) {
    console.error(x);
  }
  return ret;
}

export default getNews;
