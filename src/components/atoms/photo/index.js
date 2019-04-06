import React, { Component } from 'react'
import styled from 'styled-components'
import { SimpleImg } from 'react-simple-img'
import Measure from "react-measure"

const PhotoStyles = styled.span`
  .imageWrapper {
    display: block;
    padding-top: 1rem;
  }


`;

class Photo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aspect: props.width / props.height,
      dimensions: {
        width: 0
      }
    }
  }

  render() {
    const { width } = this.state.dimensions
    const { aspect } = this.state
    const { src, alt, placeholder } = this.props
    return (
      <PhotoStyles>
        <Measure
          bounds
          onResize={(contentRect) => {
            this.setState({ dimensions: contentRect.bounds })
          }}
        >
          {({ measureRef }) =>
            <span
              className="imageWrapper"
              ref={measureRef}
            >
              <SimpleImg
                decoding="async"
                src={src}
                alt={alt}
                placeholder={placeholder}
                width={`${width}px`}
                height={`${width / aspect}px`}
              />
            </span>
          }
        </Measure>
      </PhotoStyles>
    )
  }
}

export default Photo