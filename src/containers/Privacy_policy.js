import React from 'react'
import { Head, Link } from 'react-static'
import styled from 'styled-components'

const PrivacyStyles = styled.div`
    a {
      display: inline;
     }
`
export default () => (
  <PrivacyStyles>
    <Head
      title="privacy policy"
      meta={[
        {name: "description", content: `this is privacy policy of this website.`},
        {property: "og:title", content: "privacy policy | Ryoji Hayasaka Portfolio"},
        {property: "og:description", content: `this is privacy policy of this website.`},
        {property: "og:image", content: "https://secure.gravatar.com/avatar/301071becdd1890fa7078cbe29ce83ba?s=400"},
        {property: "og:url", content: `https://hyks.jp/privacy_policy`},
        {property: "og:type", content: "article"}
      ]}
    />
    <h1>privacy policy</h1>
    <h2>Purpose of using personal information</h2>
    <p>
      This website includes Google Analytics, collects your access data which does not enable the identification of the specific individual. Google Analytics uses Cookie in order to collect your access data. You can refuse this behavior by disabling cookies.<br/>
      For details on this policy, please click <Link to="https://www.google.com/analytics/terms/">HERE</Link>.
    </p>
  </PrivacyStyles>
)
