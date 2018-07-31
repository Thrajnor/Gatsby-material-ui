import React from 'react'
import { Link } from 'gatsby'

// depo for vanila button V
// import Button from '@material-ui/core/Button';

// depo for material-kit-react
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
    <h1>Hi Czapel!</h1>
    <p>Welcome to your new Gatsby site which is using features form your favorite material-kit-react.</p>
    <p>Now go build something great.</p>
    {/* This is vanilla @material-ui/core button
     <Button variant="contained" color="secondary" >Any button</Button> */}
    <Button type="button" color="rose" >Your Material-kit-react button!</Button>
  </Layout>
)

export default withRoot(withStyles(styles)(IndexPage))
