import React from 'react';
import { Formik } from 'formik'


const makeWidget = (config, formikParams) => {
  var extraProps = {};
  if (config.placeholder != null) extraProps['placeholder'] = config.placeholder;
  if (formikParams.handleChange != null) extraProps['onChange'] = formikParams.handleChange;
  return (<input type={config.type} className="form-control" id={config.name} {...extraProps} />);
};

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
        initialValues={this.props.initialValues}
        validate={this.props.validate}
        onSubmit={this.props.onSubmit}
        render={buildForm(this.props.schema)}
      >
        {this.props.children}
      </Formik>
    );
  }
}

