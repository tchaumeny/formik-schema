⚠ *Work in progress*, use at your own risk ⚠

# formik-schema

Create forms simply using [React](https://reactjs.org/) and [Bootstrap 4](https://getbootstrap.com/).

```js
import { Form } from 'formik-schema';

const schema = {
  fields: [
    {
      name: "email",
      title: "Email",
      type: "email"
    },
    {
      name: "date",
      title: "Chose a date",
      type: "date",
      datePickerProps: {
        inline: true
      }
    },
    {
      name: "accept",
      title: "Conditions",
      type: "checkbox",
      description: "I accept everything."
    }
  ]
};

ReactDOM.render(
  <Form
    initialValues={{
      email: "",
      date: moment("2016-12-24"),
      accept: true,
    }}
    schema={schema}
    onSubmit={(values) => {console.log(values)}}
  />,
  document.getElementById('root')
);
```

## Installation

WIP

## Testing

WIP

## Custom widgets

You can register your own widgets (or override existing ones) simply:

```js
import { registerWidget } from 'formik-schema/registry';

registerWidget('textarea', (config, formikParams) => (
  <MyTextarea name={config.name} onChange={formikParams.handleChange} id={config.name} value={formikParams.values[config.name]} rows={config.rows || 3} />
));
```

## Custom form renderers

By default, forms are rendered as Bootstrap 4 vertical forms (see <https://getbootstrap.com/docs/4.0/components/forms/#horizontal-form>). You can also define your own renderer (TODO).
