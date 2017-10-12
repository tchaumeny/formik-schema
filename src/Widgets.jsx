import React from 'react';

// inputWidget, ...

export default (config, formikParams) => {
  var extraProps = {};
  if (config.placeholder != null) extraProps['placeholder'] = config.placeholder;
  if (formikParams.handleChange != null) extraProps['onChange'] = formikParams.handleChange;
  return (<input type={config.type} className="form-control" id={config.name} {...extraProps} />);
};
