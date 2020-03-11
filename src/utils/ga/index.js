import ReactGA from 'react-ga'

function initizeAnalytics(page) {
  ReactGA.initialize('UA-160310065-1')
  ReactGA.pageview(page)
}

export default initizeAnalytics
