import React, { Component } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoCount } from '../TodoCount/TodoCount';

export class TodoList extends Component {
  // shouldComponentUpdate(nextProps) {
  //   return this.props.items !== nextProps.items;
  // }
  render() {
    console.log('render TodoList');
    const { count, items = [], onDeleteItem } = this.props;
    return (
      <>
        <div className="TodoList">
          {items.map(it => (
            <TodoItem key={it.id} item={it} onDeleteItem={onDeleteItem} />
          ))}
        </div>
        <TodoCount count={count} />
      </>
    );
  }
}
