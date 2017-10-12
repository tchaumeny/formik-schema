import React from 'react';
import { buildForm } from '../Form.jsx';
import renderer from 'react-test-renderer';

// See https://getbootstrap.com/docs/4.0/components/forms/#horizontal-form
test('Generates an horizontal form', () => {
  const form = buildForm({
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
  });
  const component = renderer.create(form);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
