import ReactDOM from 'react-dom';
import {Form, registerWidget} from '../src/index.js';


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
      name: "comment",
      title: "Your comment",
      type: "textarea",
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
        email: "",
        password: "",
        OS: 'linux',
        accept: true,
      }}
      schema={schema}
      onSubmit={(values) => {console.log(values)}}
    />,
  document.getElementById('root')
);
