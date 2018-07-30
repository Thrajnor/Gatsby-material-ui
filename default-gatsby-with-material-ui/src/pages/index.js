import React from 'react'
import Link from 'gatsby-link'
// import Button from '@material-ui/core/Button';
import Button from '../components/CustomButtons/Button.jsx';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="#">Go to page 2</Link>
    {/* <Button variant="contained" color="secondary" >Any button</Button> */}
    <Button type="button" color="rose" >Your Material-kit-react button!</Button>
  </div>
)

export default withRoot(withStyles(styles)(IndexPage))
