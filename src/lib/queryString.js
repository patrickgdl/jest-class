const objecToQueryString = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error('Inner object is not accepted.');
  }

  return `${key}=${value}`;
};

export function queryString(obj) {
  return Object.entries(obj).map(objecToQueryString).join('&');
}

export function parse(string) {
  return Object.fromEntries(string.split('&').map((value) => value.split('=')));
}
