class Registry {
  constructor(fallback) {
    this.fallback = fallback;
    this.mapping = {};
  }
  get(name) {
    const o = this.mapping[name || this.fallback];
    if (o == null) throw new Error('No object registered for: ' + name);
    return o;
  }
  register(name, o){
    this.mapping[name] = o
  }
}

// Widgets
const widgetRegistry = new Registry(null);
export const makeWidget = (config, formikParams) => widgetRegistry.get(config.type)(config, formikParams);
export const registerWidget = widgetRegistry.register.bind(widgetRegistry);

// Renderers
const rendererRegistry = new Registry('bs4-horizontal');
export const registerRenderer = rendererRegistry.register.bind(rendererRegistry);
export const fetchRenderer = rendererRegistry.get.bind(rendererRegistry);
