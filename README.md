⚠ *Work in progress*, use at your own risk ⚠

# formik-schema

Create forms simply using [React](https://reactjs.org/).

```js
import { Form } from 'formik-schema';

let myForm = (
  <Form
    schema={{
      fields: [
        { name: "email", title: "Email", type: "email" },
        { name: "date", title: "Chose a date", type: "date" },
        { name: "accept", title: "Conditions", type: "checkbox", description: "I accept everything." }
      ]
    }}
    initialValues={{
      accept: true,
    }}
    onSubmit={(values) => {console.log(values)}}
  />
);

ReactDOM.render(
  myForm,
  ...
);
```

#### ➡ [Live demo](https://codesandbox.io/s/github/tchaumeny/formik-schema/tree/master/demo)

Built-in support for [Bootstrap 4](https://getbootstrap.com/), multiple widgets available, highly customizable renderers.

## Installation

    npm install formik-schema

## Testing

This library comes with a few basic tests, using [Jest](http://facebook.github.io/jest/):

    npm test

This will actually build the bundle and run a few snapshot tests against it.

## Custom widgets

You can register your own widgets (or override existing ones) simply:

```js
import { registerWidget } from 'formik-schema';

registerWidget('textarea', (config, params) => (
  <MyTextarea name={config.name} onChange={params.handleChange} id={config.name} value={params.values[config.name]} rows={config.rows || 3} />
));
```

## Custom form renderers

By default, forms are rendered as Bootstrap 4 vertical forms (see <https://getbootstrap.com/docs/4.0/components/forms/#horizontal-form>). You can also register your own renderer, e.g.:

```js
import { makeWidget, registerRenderer } from 'formik-schema';

registerRenderer('table-form',
  (schema) => (params) => (
    <form onSubmit={params.handleSubmit}>
      <table>
      {schema.fields.map((field) => (
        <tr>
          <td>{field.title}</td>
          <td>{makeWidget(field, params)}</td>
        </tr>
      ))}
      </table>
      <button type="submit">OK</button>
    </form>
  )
);
```

## Note

Under the hood, this library uses [Formik](https://github.com/jaredpalmer/formik) to handle form state and submission.
The variable `params` appearing in the code samples is documented in Formik (see https://github.com/jaredpalmer/formik#the-gist).
