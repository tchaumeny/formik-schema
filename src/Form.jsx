import React from 'react';

const widget = (config) => (
  <input type={config.type} className="form-control" id={config.name} placeholder={config.placeholder} />
);

const buildFieldRow = (config) => (
  <div key={config.name} className="form-group row">
    <label for={config.name} className="col-sm-2 col-form-label">{config.title}</label>
    <div className="col-sm-10">
      {widget(config)}
    </div>
  </div>
);

export const buildForm = (schema) => (
  <form>
    {schema.fields.map(buildFieldRow)}
  </form>
);
