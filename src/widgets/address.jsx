import places from 'places.js';

import { registerWidget } from '../registry.jsx';

const defaultInputId = "address-input";

class AddressInput extends React.Component {
  componentDidMount() {
    this.placesAutocomplete = places({
        container: document.querySelector('#' + this.props.id)
    });
  }

  componentWillUnmount() {
    this.placesAutocomplete.destroy();
  }

  render() {
    return (<input type="search" className="form-control pr-4" {...this.props} />);
  }
}
AddressInput.defaultProps = {
    id: defaultInputId,
};

registerWidget('address', (config, formikParams) => (
  <AddressInput name={config.name} onChange={formikParams.handleChange} id={config.name} value={formikParams.values[config.name]} />
));
