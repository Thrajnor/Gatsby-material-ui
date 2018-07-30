import React from 'react'
import { Link } from 'gatsby'
// import Button from '@material-ui/core/Button';
import Button from '../components/CustomButtons/Button.jsx';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import Layout from '../components/layout'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    {/* <Button variant="contained" color="secondary" >Any button</Button> */}
    <Button type="button" color="rose" >Your Material-kit-react button!</Button>
  </Layout>
)

export default withRoot(withStyles(styles)(IndexPage))
