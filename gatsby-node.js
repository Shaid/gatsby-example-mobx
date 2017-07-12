
// Add a route match for the /portal path to enable client-only paths
// all paths under /portal/ are routed to the app page, and from there we do magic!
exports.onCreatePage = ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    if (page.path === `/app/`) {
      page.matchPath = `/app/:path` //eslint-disable-line
      createPage(page)
    }
    resolve()
  })
}
