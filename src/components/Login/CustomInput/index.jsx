import React from 'react';
import { useField } from 'formik';
import { Input } from '@material-ui/core';

export default function CustomInput({ ...props }) {
  const [field, meta] = useField(props);
  return <Input {...field} {...props} error={meta.error ? true : false} />;
}
