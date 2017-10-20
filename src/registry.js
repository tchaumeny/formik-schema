class Registry {
  constructor() {
    this.mapping = {};
  }
  get(name) {
    const o = this.mapping[name];
    if (o == null) throw new Error('No object registered for: ' + name);
    return o;
  }
  register(name, o){
    this.mapping[name] = o;
  }
}

// Widgets
const widgetRegistry = new Registry();
export const makeWidget = (config, formikParams) => widgetRegistry.get(config.type)(config, formikParams);
export const registerWidget = widgetRegistry.register.bind(widgetRegistry);

// Renderers

const rendererRegistry = new Registry();
export const buildRenderFunction = (schema) => (formikParams) => {
  const defaultRenderer = 'bs4-horizontal';
  const renderer = (schema.form && schema.form.renderer) || defaultRenderer;
  return rendererRegistry.get(renderer)(schema)(formikParams);
};
export const registerRenderer = rendererRegistry.register.bind(rendererRegistry);
