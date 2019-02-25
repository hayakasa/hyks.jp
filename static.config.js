import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

import collections from './public/collections.json'

export default {
  siteRoot: 'http://hyks.jp',
  getSiteData: () => ({
  }),
  getRoutes: async () => {
    // const { data: collections } = await axios.get('http://127.0.0.1:3000/collection.json')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          collections: collections
        }),
        children: collections.map(item => ({
          path: `/collection/${item.id}`,
          component: 'src/containers/Collection',
          getData: () => ({
            title: item.title,
            collection: require(`./public/collection_${item.id}.json`),
          }),
        })),
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
