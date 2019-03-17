import React from 'react'
import { SimpleImg } from 'react-simple-img'

export default (props) => (
  <SimpleImg
    src={props.resource.urls.regular}
    alt={props.resource.description}
    placeholder={props.resource.color}

    height='auto'
  />

)