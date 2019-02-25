import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import styled from 'styled-components'

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
  }
`

export default withRouteData(({ collections }) => (
  <HomeStyles>
    <Head
      title="home"
      meta={[
        {name: "description", content: `it's my portfolio website. you can see photographs i took`},
        {property: "og:title", content: "home | Ryoji Hayasaka Portfolio"},
        {property: "og:url", content: "https://hyks.jp"},
        {property: "og:type", content: "website"}
      ]}
    />
    {collections.map(item => (
      <Link
        key={item.id}
        to={`/collection/${item.id}/`}
      >
        <img
          src={item.cover_photo.urls.regular}
          alt={`${item.title} cover photo`}
          width={item.cover_photo.width}
          height={item.cover_photo.height}
        />
        <h2>{item.title}</h2>
      </Link>
    ))}
  </HomeStyles>
))
