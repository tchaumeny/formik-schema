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
    this.mapping[name] = o
  }
}

// Widgets
const widgetRegistry = new Registry();
export const makeWidget = (config, formikParams) => widgetRegistry.get(config.type)(config, formikParams);
export const registerWidget = widgetRegistry.register.bind(widgetRegistry);
