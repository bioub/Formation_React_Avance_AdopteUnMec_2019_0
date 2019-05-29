import React from 'react';
import css from './TodoItem.module.scss';
import { shape, string, number, bool } from 'prop-types';
import { hideable } from '../../../hoc/hideable';

export function TodoItem({ item, onDeleteItem = () => {} }) {
  return (
    <div className={css.TodoItem}>
      <span>{item.text}</span>
      <button onClick={() => onDeleteItem(item)}>-</button>
    </div>
  );
}

TodoItem.propTypes = {
  item: shape({
    id: number,
    text: string.isRequired,
    completed: bool,
  }),
};

export const HideableTodoItem = hideable(TodoItem);
