const apiUrl = "//localhost:3000";

/**
 *
 * moviesFetch to enhance all the Movies product request
 * @param {*} route
 * @returns Promise
 */
export default function moviesFetch(route, options = {}) {
  return fetch(`${apiUrl}${route}`, {
    ...options,
    headers: {
      "x-session": "formation",
    },
  });
}
