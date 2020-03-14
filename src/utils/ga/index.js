import ReactGA from 'react-ga'

function initizeAnalytics(page) {
  ReactGA.pageview(page)
}

export default initizeAnalytics
