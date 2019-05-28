import React from 'react';
import css from './TodoItem.module.scss';
import { shape, string, number, bool } from 'prop-types';

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
