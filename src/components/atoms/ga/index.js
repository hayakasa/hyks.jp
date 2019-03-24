import React from 'react'
import ReactGA from 'react-ga'

class GA extends React.Component {
  constructor () {
    super()
    ReactGA.initialize('UA-35906821-6')
    this.state = {
      initialised: false,
      hasWindow: false,
    }
  }
  componentWillMount () {
    this.setState({
      initialised: true,
    })
  }
  componentDidMount () {
    this.setState({
      hasWindow: true,
    })
  }
  render () {
    if (this.state.initialised && this.state.hasWindow) {
      ReactGA.set({ page: this.props.location.pathname })
      ReactGA.pageview(this.props.location.pathname)
    }
    return null
  }
}

export default GA