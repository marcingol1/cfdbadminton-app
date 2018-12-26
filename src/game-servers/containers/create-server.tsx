import React from 'react';
import { Form, Field } from 'react-final-form';

import LayoutWrapper from './../../navigation/containers/layout-hoc';

const CreateServerForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <h2>Create new server</h2>
    <Field name="phone">
      {({ input, meta }) => (
        <div>
          <label>Phone</label>
          <input type="text" {...input} placeholder="Phone" />
          {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
      )}
    </Field>

    <button type="submit" disabled={false}>
      Submit
    </button>
  </form>
);

const CreateServer = () => {
  const handleSubmit = values => console.log(values);
  return (
    <LayoutWrapper>
      <div>Hello world!</div>
      <Form
        onSubmit={handleSubmit}
        render={({ handleSubmit }) => (
          <CreateServerForm handleSubmit={handleSubmit} />
        )}
      />
    </LayoutWrapper>
  );
};

export default CreateServer;
