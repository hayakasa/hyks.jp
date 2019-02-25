import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import styled from 'styled-components'

const CollectionStyles = styled.div`
  column-count: 2;
  column-gap: 1rem;

  @media (max-width: 480px) {
    column-count: 1;
  }

  h1 {
    margin-bottom: 0;
    font-weight: 400;
  }
  
  a {
    break-inside: avoid;
  }
`;

export default withRouteData(({ id, title, collection }) => (
  <CollectionStyles>
    <Head
      title={title}
      meta={[
        {name: "description", content: `it's a collection of ${title} photographs i took.`},
        {property: "og:title", content: `${title} | Ryoji Hayasaka Portfolio`},
        {property: "og:url", content: `https://hyks.jp/collection/${id}/`},
        {property: "og:type", content: "article"}
      ]}
    />
    <h1>{title}</h1>
    {collection.map(photo => (
      <Link
        key={photo.id}
        to={`https://unsplash.com/photos/${photo.id}`}
      >
        <img
          src={photo.urls.regular}
          alt={photo.description}
          width={photo.width}
          height={photo.height}
        />
      </Link>
    ))}
  </CollectionStyles>
))
