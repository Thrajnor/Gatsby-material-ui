import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

import "assets/scss/material-kit-react.css?v=1.1.0";

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());

const Layout = (props) => {
  return (
    <JssProvider jss={jss} generateClassName={generateClassName}>
      {props.children}
    </JssProvider>
  );
}

export default Layout;
