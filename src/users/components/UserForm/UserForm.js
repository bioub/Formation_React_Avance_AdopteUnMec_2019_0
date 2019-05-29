import React from 'react';
import { Field } from 'redux-form';
import css from './UserForm.module.scss';

function renderField({input, label, meta: {touched, error}}) {
  return (
    <label className={css.FormRow}>
      <span>{label} :</span>
      <input {...input} />
      {touched && <span>{error}</span>}
    </label>
  );
}

export function UserForm({handleSubmit}) {
  return (
    <form onSubmit={handleSubmit}>
      <Field label="Prénom" name="name" component={renderField} />
      <Field label="Email" name="email" component={renderField} />
      <Field label="Téléphone" name="phone" component={renderField} />
      <button>Ajouter</button>
    </form>
  )
}
