export { Form } from './Form';
export * from './registry';
export * from './renderers/bs4/horizontal';

// Load default renderers and widgets
import './renderers/bs4/horizontal';
import './widgets/builtin';
import './widgets/address';
import './widgets/dates';
