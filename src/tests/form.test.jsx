import React from 'react';
import Form from '../Form.jsx';
import renderer from 'react-test-renderer';


const testSchema2FormSnapshot = (testTitle, schema) => test(testTitle, () => {
  const component = renderer.create(
    <Form
      schema={schema}
      onSubmit={() => {}}
    >
    </Form>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// See https://getbootstrap.com/docs/4.0/components/forms/#horizontal-form
testSchema2FormSnapshot('Example from https://getbootstrap.com/docs/4.0/components/forms/#horizontal-form',
  {
    fields: [
      {
        name: "email",
        title: "Email",
        type: "email",
      },
      {
        name: "password",
        title: "Mot de passe",
        type: "password",
      },
      {
        name: "accept",
        title: "J'accepte.",
        type: "opt-in",
      },
    ],
  }
);
