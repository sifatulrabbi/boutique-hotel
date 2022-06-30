/**
 * @param {string} path
 */
export function getApiUrl(path) {
  const url = process.env.REACT_APP_API_URL;
  return `${url}/api/v1${path}`;
}
