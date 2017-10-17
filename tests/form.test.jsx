import { Form } from '../lib/formik-schema';
import renderer from 'react-test-renderer';
import React from 'react';


const testSchema2FormSnapshot = (testTitle, schema) => test(testTitle, () => {
  const component = renderer.create(
    <Form
      schema={schema}
      onSubmit={() => {}}
    />
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
        title: "I accept.",
        type: "checkbox",
        description: "Common, accept it!",
      },
    ],
  }
);

testSchema2FormSnapshot('Form with a choice and a default',
  {
    fields: [
      {
        name: "dog_or_cat",
        title: "Are you rather a dog or cat person ?",
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
