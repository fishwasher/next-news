import fetch from 'isomorphic-unfetch';
import qs from 'query-string';

const baseConfig = {
  feed: 'newsapi',
  type: 'top',
  country: 'us'
};

export const getApiUrl = (config) => {
  let params = Object.assign({}, baseConfig, config || {});
  const endpoint = 'https://newsapi.strayfish.now.sh/api';
  return endpoint + '?' + qs.stringify(params);
};

const getNews = async (config) => {
  const url = getApiUrl(config);
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
    ret.error = x.toString();
  }
  return ret;
}

export default getNews;
