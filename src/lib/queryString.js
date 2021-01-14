const objecToQueryString = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error('Inner object is not accepted.');
  }

  return `${key}=${value}`;
};

module.exports.queryString = (obj) =>
  Object.entries(obj).map(objecToQueryString).join('&');

module.exports.parse = (string) => {
  return Object.fromEntries(string.split('&').map((value) => value.split('=')));
};
