import React, { Component } from 'react'
import { Router, Link, Head } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import ReactGA from 'react-ga'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
history.listen(({ pathname }) => {
  ReactGA.set({ page: pathname })
  ReactGA.pageview(pathname)
});

injectGlobal`

  @import url('https://fonts.googleapis.com/css?family=Faustina:400');
  body {
    font-family: 'Faustina', serif;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: .07rem;
    color: #e9845e;
    margin: 0;
    padding: 0;
    background: #141312;
  }
  .site-title {
    font-size: 1.5rem;
    display: inline-block;
    margin: 1rem;
    font-weight: 400;
  }
  @media (max-width: 480px) {
    .site-title {
      margin: .5rem 1rem;
      font-size: 1.3rem;
    }
  }
`

const AppStyles = styled.div`
  a {
    color: #e9845e;
  }

  nav {
    background: rgba(20,19,18,0.9);
    display: block;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    a {
      padding: 1rem 2rem;
      display: inline-block;
    }
    @media (max-width: 480px) {
      a {
        padding: 1rem;
      }
    }
  }

  .content {
    margin: 0 auto 100px;
    padding: 0 1rem;

    a {
      display: block;
      padding-top: 1rem;
    }  
  }
  
  img {
    width: 100%;
    height: auto;
  }
`

class App extends Component {
  componentDidMount() {
    const pathname = window.location.pathname + window.location.search
    ReactGA.set({ page: pathname })
    ReactGA.pageview(pathname)
  }
  render () {
    return(
      <Router history={history}>
        <AppStyles>
          <Head
            htmlAttributes={{lang: "en", prefix: "og: http://ogp.me/ns#"}}
            titleTemplate="%s | Ryoji Hayasaka Portfolio"
            meta={[
              {name: "twitter:card", content: "summary"},
              {name: "twitter:site", content: "@r_hayakasa"},
              {property: "fb:app_id", content: "551655515340796"}
            ]}
          />
          <nav>
            <span className="site-title">Ryoji Hayasaka</span>
            <Link exact to="/">Home</Link>
            <Link to="/about/">About</Link>
          </nav>
          <main className="content">
            <Routes />
          </main>
        </AppStyles>
      </Router>
    )
  }
}

export default hot(module)(App)
