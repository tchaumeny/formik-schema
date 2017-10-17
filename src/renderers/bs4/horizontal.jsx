import { makeWidget, registerRenderer } from '../../registry';


const renderFieldRow = (formikParams) => (config) => (
  <div key={config.name} className="form-group row">
    <label htmlFor={config.name} className="col-3 col-form-label">{config.title}</label>
    <div className="col">
      {makeWidget(config, formikParams)}
      { config.helpText && (<small className="form-text text-muted">{config.helpText}</small>) }
    </div>
  </div>
);

const renderForm = (schema) => (formikParams) => (
  <form onSubmit={formikParams.handleSubmit}>
    {schema.fields.map(renderFieldRow(formikParams))}
    <button type="submit" className="btn btn-primary">OK</button>
  </form>
);

registerRenderer('bs4-horizontal', renderForm);
