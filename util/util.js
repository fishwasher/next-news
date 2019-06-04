export const isValidName = name => typeof name === 'string' && !!name.match(/^[a-z]+[a-z0-9\s]*$/i);

export const unescapeCodePoints = text => text && text.replace(/&#(\d+);/g,
  (match, g1) => isNaN(g1) ? match : String.fromCodePoint(Number(g1))) || '';

// date comes from API as '2019-06-04T15:40:31Z'
export const formatDate = dateStr => dateStr ?
  dateStr.replace(/-/g, '/')
  .replace('T', ' ')
  .replace(/:\d+Z$/, '')
  : '';

// remove trailing stuff from article content
export const trimArticleContent = text => text ? text.replace(/\s*\[[^\]]+\]$/, '') : text;
