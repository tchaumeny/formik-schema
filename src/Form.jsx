import { Formik } from 'formik';

import { fetchRenderer } from './registry';

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.renderer = fetchRenderer(this.props.rendererName);
  }
  render () {
    return (
      <Formik
        {...this.props}
        render={this.renderer(this.props.schema)}
      />
    );
  }
}
