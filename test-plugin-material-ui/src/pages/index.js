import React from 'react'
import Link from 'gatsby-link'
import createMuiTheme from 'material-ui/styles/createMuiTheme'

import purple from 'material-ui/colors/purple'
import green from 'material-ui/colors/green'
import red from 'material-ui/colors/red'

export default createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
    error: red,
  },
})

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
