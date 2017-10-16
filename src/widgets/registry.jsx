const widgetRegistry = {
  mapping: {},
  get: function(name) {return this.mapping[name]},
  register: function(name, widget) { this.mapping[name] = widget },
}

export const makeWidget = (config, formikParams) => {
  const widget = widgetRegistry.get(config.type);
  if (widget == null) throw new Error('Unkown widget type: ' + config.type);
  return widget(config, formikParams);
};

export const registerWidget = widgetRegistry.register.bind(widgetRegistry);
