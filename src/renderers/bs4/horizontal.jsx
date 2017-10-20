import { makeWidget, registerRenderer } from '../../registry';

const getRendererOption = (schema, name, defaultValue) => (
  schema && schema.form && schema.form.rendererOptions && schema.form.rendererOptions[name] || defaultValue
);

const renderFieldAsRow = (formikParams) => (config) => (
  <div key={config.name} className="form-group row">
    <label htmlFor={config.name} className="col-3 col-form-label">{config.title}</label>
    <div className="col">
      {makeWidget(config, formikParams)}
      { config.helpText && (<small className="form-text text-muted">{config.helpText}</small>) }
    </div>
  </div>
);

registerRenderer('bs4-horizontal',
  (schema) => (formikParams) =>
   (<form onSubmit={formikParams.handleSubmit}>
      {schema.fields.map(renderFieldAsRow(formikParams))}
      <button type="submit" className="btn btn-primary">OK</button>
    </form>)
);
