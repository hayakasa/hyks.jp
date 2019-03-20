import React, { Component } from 'react'
import { Router, Link, Head, Route } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import GA from 'GA'

injectGlobal`

  /* vietnamese */
  @font-face {
    font-family: 'Faustina';
    font-style: normal;
    font-weight: 400;
    src: local('Faustina Regular'), local('Faustina-Regular'), url(https://fonts.gstatic.com/s/faustina/v3/XLYlIZPxYpJfTbZAFV-wHcxopH8udXg.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Faustina';
    font-style: normal;
    font-weight: 400;
    src: local('Faustina Regular'), local('Faustina-Regular'), url(https://fonts.gstatic.com/s/faustina/v3/XLYlIZPxYpJfTbZAFV-xHcxopH8udXg.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Faustina';
    font-style: normal;
    font-weight: 400;
    src: local('Faustina Regular'), local('Faustina-Regular'), url(https://fonts.gstatic.com/s/faustina/v3/XLYlIZPxYpJfTbZAFV-_HcxopH8u.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
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
  .imageLink {
    display: block;
    break-inside: avoid;
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
    z-index: 1;
    a {
      padding: 1rem 2rem;
      display: inline-block;
    }
    .privacy_policy {
      position: absolute;
      right: 0;
      bottom: 0;
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
  }
  
  img {
    width: 100%;
    height: auto;
  }
  .info {
    width: 65%;
    margin: 0 auto;
    display: block;
  }
`

class App extends Component {
  render () {
    return(
      <Router>
        <AppStyles>
          <Head
            htmlAttributes={{lang: "en", prefix: "og: http://ogp.me/ns#"}}
            titleTemplate="%s | Ryoji Hayasaka Portfolio"
            meta={[
              {name: "twitter:card", content: "summary"},
              {name: "twitter:site", content: "@r_hayakasa"},
              {property: "fb:app_id", content: "551655515340796"},
              {name: "google-site-verification", content: "stBLSAKsdNkeuX_D2_maEbxHvAVIw6uZb7VOiokLRnQ"}
            ]}
          />
          <Route path="/" component={GA} />
          <nav>
            <span className="site-title">Ryoji Hayasaka</span>
            <Link exact to="/">home</Link>
            <Link to="/about/">about</Link>
            <Link to="/privacy_policy/" className="privacy_policy"><img className="info" src="/OOjs_UI_icon_info_big-invert.svg"/></Link>
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
