import { Formik } from 'formik';

import { buildRenderFunction } from './registry';

export class Form extends React.Component {
  render () {
    return (
      <Formik
        {...this.props}
        render={buildRenderFunction(this.props.schema)}
      />
    );
  }
}
