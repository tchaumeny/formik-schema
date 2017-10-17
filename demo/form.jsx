import ReactDOM from 'react-dom';
import moment from 'moment';

import { Form } from '../src/index';
import '../src/widgets/address';
import '../src/widgets/dates';


const schema = {
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

ReactDOM.render(
  <Form
    initialValues={{
      date: moment("2016-12-24"),
      email: "",
      password: "",
      address: "",
      OS: 'linux',
      accept: true,
    }}
    schema={schema}
    onSubmit={(values) => {console.log(values)}}
  />,
  document.getElementById('root')
);
