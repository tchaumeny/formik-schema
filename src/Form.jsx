import React from 'react';
import { Formik } from 'formik';

import makeWidget from './Widgets';


const buildFieldRow = (formikParams) => (config) => (
  <div key={config.name} className="form-group row">
    <label for={config.name} className="col-sm-2 col-form-label">{config.title}</label>
    <div className="col-sm-10">
      {makeWidget(config, formikParams)}
    </div>
  </div>
);

const buildForm = (schema) => (formikParams) => (
  <form onSubmit={formikParams.handleSubmit}>
    {schema.fields.map(buildFieldRow(formikParams))}
  </form>
);

export default class Form extends React.Component {
  render () {
    return (
      <Formik
        {...this.props}
        render={buildForm(this.props.schema)}
      >
      </Formik>
    );
  }
}

