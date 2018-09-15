// Run this example by adding <%= javascript_pack_tag 'Welcome_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Welcome React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Welcome = props => (
  <div>Welcome {props.name}!</div>
)

Welcome.defaultProps = {
  name: 'David'
}

Welcome.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Welcome name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})
