import React from 'react';

// Widget registry things
const widgetRegistry = {
  mapping: {},
  get: function(name) {return this.mapping[name]},
  register: function(name, widget) { this.mapping[name] = widget },
}
export const registerWidget = widgetRegistry.register.bind(widgetRegistry);

export const makeWidget = (config, formikParams) => {
  const widget = widgetRegistry.get(config.type);
  if (widget == null) throw new Error('Unkown widget type: ' + config.type);
  return widget(config, formikParams);
};

// Define default widgets: textarea, money, date, address

const basicInputWidget = (config, formikParams) => {
  var extraProps = {};
  if (config.placeholder != null) extraProps['placeholder'] = config.placeholder;
  if (formikParams.handleChange != null) extraProps['onChange'] = formikParams.handleChange;
  return (<input name={config.name} type={config.type} className="form-control" id={config.name} value={formikParams.values[config.name]} {...extraProps} />);
}

// <input type="text" ...> and variants
registerWidget('text', basicInputWidget);
registerWidget('email', basicInputWidget);
registerWidget('password', basicInputWidget);
registerWidget('url', basicInputWidget);
registerWidget('number', basicInputWidget);

registerWidget('textarea', (config, formikParams) => (
  <textarea name={config.name} className="form-control" id={config.name} value={formikParams.values[config.name]} rows={config.rows || 3} />
));

registerWidget('checkbox', (config, formikParams) => (
  <div className="form-check">
    <label className="form-check-label">
      <input name={config.name} className="form-check-input" onChange={formikParams.handleChange} type="checkbox" checked={formikParams.values[config.name]} /> {config.description}
    </label>
  </div>
));
registerWidget('choices', (config, formikParams) =>
  config.options.map((option) => (
    <div className="form-check" key={option.value}>
      <label className="form-check-label">
        <input name={config.name} className="form-check-input" type="radio" id={config.name + '_' + option.value} value={option.value} checked={formikParams.values[config.name] === option.value} />
        {option.title}
      </label>
    </div>
  ))
);
