import places from 'places.js';

import { registerWidget } from '../registry.jsx';

class AddressInput extends React.Component {
  componentDidMount() {
    this.placesAutocomplete = places({
      container: document.querySelector('#' + this.props.id)
    });
    this.placesAutocomplete.on('change', this.props.onSelect);
  }
  componentWillUnmount() {
    this.placesAutocomplete.destroy();
  }
  render() {
    const {onSelect, ...childProps} = this.props;
    return (<input type="search" className="form-control pr-4" {...childProps} />);
  }
}
AddressInput.defaultProps = {
    id: "address-input",
};

registerWidget('address', (config, formikParams) => (
  <AddressInput
    id={config.name}
    name={config.name}
    onChange={formikParams.handleChange}
    onSelect={e => formikParams.setFieldValue(config.name, e.suggestion.value)}
    value={formikParams.values[config.name]}
  />
));
