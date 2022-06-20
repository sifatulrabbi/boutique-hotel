/**
 * @param {string} path
 */
export function getApiUrl(path) {
  return `http://localhost:8080/api/v1${path}`;
}
