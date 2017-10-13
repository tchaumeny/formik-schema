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
        type: "checkbox",
        description: "Check me out",
      },
    ],
  }
);

testSchema2FormSnapshot('Form with a choice and a default',
  {
    fields: [
      {
        name: "dog_or_cat",
        title: "Votre préférence ?",
        type: "choices",
        options: [
          {
            value: "cat",
            title: "Chat",
          },
          {
            value: "dog",
            title: "Chien",
            selected: true,
          },
        ],
      },
    ],
  }
);
