import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'

const HomeStyles = styled.div`
  column-count: 2;
  column-gap: 1rem;

  @media (max-width: 480px) {
    column-count: 1;
  }
  
  h2 {
    font-size: 1.2rem;
    margin: 0 0 .5rem;
  }
  
  a {
    break-inside: avoid;
    display: block;
    padding-top: 1rem;
  }  
`

export default withRouteData(({ collections }) => (
  <HomeStyles>
    <Head
      title="home"
      meta={[
        {name: "description", content: `it's my portfolio website. you can see photographs i took`},
        {property: "og:title", content: "home | Ryoji Hayasaka Portfolio"},
        {property: "og:description", content: `it's my portfolio website. you can see photographs i took`},
        {property: "og:image", content: "https://secure.gravatar.com/avatar/301071becdd1890fa7078cbe29ce83ba?s=400"},
        {property: "og:url", content: "https://hyks.jp"},
        {property: "og:type", content: "website"}
      ]}
    />
    {collections.map(item => (
      <Link
        key={item.id}
        to={`/collection/${item.id}/`}
      >
        <LazyLoad
          width={item.cover_photo.width}
          height={item.cover_photo.height}
        >
          <img
            src={item.cover_photo.urls.regular}
            alt={`${item.title} cover photo`}
            width={item.cover_photo.width}
            height={item.cover_photo.height}
          />
        </LazyLoad>
        <h2>{item.title}</h2>
      </Link>
    ))}
  </HomeStyles>
))
