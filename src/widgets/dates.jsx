import { registerWidget } from './registry.jsx';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


// Date and times...
const makeDatePickerWidget = (baseProps) => (config, formikParams) => {
  const datePickerProps = Object.assign({className: "form-control"}, baseProps, config.datePickerProps);
  return (
    <DatePicker
      id={config.name}
      name={config.name}
      selected={formikParams.values[config.name]}
      onChange={formikParams.setFieldValue.bind(null, config.name)}
      {...datePickerProps}
    />
  );
}

registerWidget('date', makeDatePickerWidget({}));
registerWidget('datetime', makeDatePickerWidget({showTimeSelect: true}));
