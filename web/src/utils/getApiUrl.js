/**
 * @param {string} path
 */
export function getApiUrl(path) {
  return `http://localhost:8000/api/v1${path}`;
}
