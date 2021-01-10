/**
 * Get unique ID.
 *
 * @return {string} uid.
 */
export function getUID() {
  return (
    Number(String(Math.random()).slice(2)) +
    Date.now() +
    Math.round(window.performance.now())
  ).toString(36);
}
