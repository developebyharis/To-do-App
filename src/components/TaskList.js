import React from 'react';
import Task from './Task';

function TaskList({ tasks, onDelete, onToggleComplete, onSave }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
          onSave={onSave}
        />
      ))}
    </div>
  );
}

export default TaskList;
