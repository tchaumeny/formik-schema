import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import { Form } from 'formik-schema';


const schema1 = {
  fields: [
    {
      name: "email",
      title: "Email",
      type: "email",
    },
    {
      name: "password",
      title: "Password",
      type: "password",
    },
    {
      name: "OS",
      title: "Your OS",
      type: "choices",
      options: [
        {
          value: 'linux',
          title: "Linux",
        },
        {
          value: 'macos',
          title: "macOS / OS X",
        },
        {
          value: 'windows',
          title: "Windows",
        },
        {
          value: 'other',
          title: "Other",
        },
      ]
    },
    {
      name: "date",
      title: "Chose a date",
      type: "date",
      datePickerProps: {
        inline: true,
      },
      helpText: "Here is an example with the inline option",
    },
  ],
};

const schema2 = {
  form: {
    renderer: 'bs4-horizontal',
    rendererOptions: {
    }
  },
  fields: [
    {
      name: "address",
      title: "Your address",
      type: "address",
    },
    {
      name: "comment",
      title: "A comment ?",
      type: "textarea",
      helpText: "Any comment you may have."
    },
    {
      name: "accept",
      title: "Conditions",
      type: "checkbox",
      description: "I accept everything.",
    },
  ],
};

const submitHandler = (values) => {
  console.log(values);
  window.alert("Form submitted! (check console)");
}

export default (
  <div>
    <h2>Sample form</h2>
    <Form
      initialValues={{
        email: "",
        password: "",
        OS: 'linux',
        date: moment("2016-12-24"),
      }}
      schema={schema1}
      onSubmit={submitHandler}
    />
    <hr />
    <h2>Second example</h2>
    <Form
      initialValues={{
        address: "",
        accept: true,
      }}
      schema={schema2}
      onSubmit={submitHandler}
    />
  </div>
);
