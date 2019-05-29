import React from 'react';
import { UserFormContainer } from '../../containers/UserFormContainer';

export function UsersAdd({userCreateRequested}) {
  return (
    <div className="UsersAdd">
      <h2>Add a new user</h2>
      <UserFormContainer onSubmit={userCreateRequested} />
    </div>
  );
}
