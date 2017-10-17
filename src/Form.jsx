import React from 'react';
import { Formik } from 'formik';

import { fetchRenderer } from './registry.jsx';

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.renderer = fetchRenderer(this.props.rendererName);
  }
  render () {
    return (
      <Formik
        {...this.props}
        render={this.renderer(this.props.schema)}
      />
    );
  }
}

