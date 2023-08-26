import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a To-Do List', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const addTask = (text) => {
    if (text.trim() === '') return;

    const newTaskItem = {
      id: tasks.length + 1,
      text,
      completed: false,
    };

    setTasks([...tasks, newTaskItem]);
    setNewTask('');
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleSave = (taskId, editedText) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, text: editedText };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      addTask(newTask);
    }
  };

  return (
    <div className="App">
      <h1 className="text-center">To-Do List</h1>
      <InputGroup className="mb-4 my-5 px-5">
        <Form.Control
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          aria-label="Add a new task..."
          aria-describedby="basic-addon2"
          onKeyUp={handleKeyUp}
        />
        <Button variant="outline-primary" onClick={() => addTask(newTask)} id="button-addon2">
          Add
        </Button>
      </InputGroup>

      <TaskList tasks={tasks} onDelete={deleteTask} onToggleComplete={toggleComplete} onSave={handleSave} />
    </div>
  );
}

export default App;
