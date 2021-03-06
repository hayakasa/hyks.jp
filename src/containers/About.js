import React from 'react'
import { Head, Link } from 'react-static'
import styled from 'styled-components'

// import pixelaGraph from '../../public/photo-shoots.svg'

const AboutStyles = styled.div`
  .profile_image {
    max-width: 300px;
    width: 50%;
  }
  
  p {
    margin: 2rem 0;
  }
  ul {
    margin: 2rem 0;
    padding-left: 1.1rem;
    li {
      padding: .3rem 0;
    }
  }

  h3 {
    margin-bottom: .5rem;
  }
  .pixela {
    max-width: 400px;
    background: white;
  }
`
export default () => (
  <AboutStyles>
    <Head
      title="about"
      meta={[
        {name: "description", content: `it's my portfolio website. my information is here`},
        {property: "og:title", content: "about | Ryoji Hayasaka Portfolio"},
        {property: "og:description", content: `it's my portfolio website. my information is here`},
        {property: "og:image", content: "https://secure.gravatar.com/avatar/301071becdd1890fa7078cbe29ce83ba?s=400"},
        {property: "og:url", content: `https://hyks.jp/about`},
        {property: "og:type", content: "article"}
      ]}
    />
    <h1>about</h1>
    <div>
      <img className="profile_image" alt="my portrait" decoding="async" src="https://secure.gravatar.com/avatar/301071becdd1890fa7078cbe29ce83ba?s=400" />
    </div>
    <p>Living in japan as a programmer, or a photographer.</p>
    <ul>
      <li><Link to="https://twitter.com/r_hayakasa">Twitter</Link></li>
      <li><Link to="https://facebook.com/hayakasa">Facebook</Link></li>
      <li><Link to="http://tumblr.hyks.jp">tumblr</Link></li>
      <li><Link to="https://github.com/hayakasa">GitHub</Link></li>
      <li><Link to="https://instagram.com/hayakasa">Instagram</Link></li>
      <li><Link to="https://unsplash.com/@hayakasa">Unsplash</Link></li>
      <li><Link to="https://500px.com/ryojihayasaka">500px</Link></li>
    </ul>
    <h3>my photo shoot counts</h3>
    <object className="pixela" type="image/svg+xml" data="https://pixe.la/v1/users/hayakasa/graphs/photo-shoots"/>
  </AboutStyles>
)
