import { UserForm } from '../components/UserForm/UserForm';
import { reduxForm } from 'redux-form';

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Le prénom est obligatoire';
  }

  return errors;
}

export const UserFormContainer = reduxForm({
  form: 'userForm',
  validate,
  destroyOnUnmount: false,
})(UserForm);
