interface TUrlOpts {
  /** Ensure if url is root-based: add a slash if it's absent */
  root?: boolean;
}

export function makeUrl(urls: string | string[], opts?: TUrlOpts | undefined) {
  if (Array.isArray(urls)) {
    urls = urls.filter(Boolean).join('/');
  }
  // Remove repeating slashes...
  urls = urls.replace(/\/\/+/g, '/');
  // Ensure leading slash if required...
  if (opts?.root && !urls.startsWith('/')) {
    urls = '/' + urls;
  }
  return urls;
}

export function makeRootUrl(urls: string | string[], opts?: TUrlOpts | undefined) {
  return makeUrl(urls, { ...opts, root: true });
}
