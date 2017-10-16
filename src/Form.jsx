import React from 'react';

import { Formik } from 'formik';
import { makeWidget } from './registry.jsx';


const buildFieldRow = (formikParams) => (config) => (
  <div key={config.name} className="form-group row">
    <label htmlFor={config.name} className="col-3 col-form-label">{config.title}</label>
    <div className="col">
      {makeWidget(config, formikParams)}
      { config.helpText && (<small className="form-text text-muted">{config.helpText}</small>) }
    </div>
  </div>
);

const buildForm = (schema) => (formikParams) => (
  <form onSubmit={formikParams.handleSubmit}>
    {schema.fields.map(buildFieldRow(formikParams))}
    <button type="submit" className="btn btn-primary">OK</button>
  </form>
);

export class Form extends React.Component {
  render () {
    return (
      <Formik
        {...this.props}
        render={buildForm(this.props.schema)}
      />
    );
  }
}

