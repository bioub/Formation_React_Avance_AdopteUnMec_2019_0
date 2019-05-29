import React, { Component } from 'react';
import { HideableTodoItem as TodoItem } from '../TodoItem/TodoItem';
import { TodoCount } from '../TodoCount/TodoCount';

export class TodoList extends Component {
  // shouldComponentUpdate(nextProps) {
  //   return this.props.items !== nextProps.items;
  // }
  render() {
    const { count, items = [], onDeleteItem } = this.props;
    return (
      <>
        <div className="TodoList">
          {items.map(it => (
            <TodoItem key={it.id} item={it} onDeleteItem={onDeleteItem} show={true} />
          ))}
        </div>
        <TodoCount count={count} />
      </>
    );
  }
}
