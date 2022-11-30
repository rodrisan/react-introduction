import React from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoCounter.css';

const styles = {
  // color: 'orange',
  // backgroundColor: 'green',
};

export const TodoCounter = () => {
  const {completedTodos, totalTodos} = React.useContext(TodoContext);

  return (
    <h2 style={styles} className="TodoCounter">Haz completado {completedTodos} de {totalTodos} ToDos</h2>
  )
}
