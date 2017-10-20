export { Form } from './Form';
export { registerWidget, registerRenderer } from './registry';

// Load default renderers and widgets
import './renderers/bs4/horizontal';
import './widgets/builtin';
import './widgets/address';
import './widgets/dates';
