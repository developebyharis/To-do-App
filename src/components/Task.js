import React, { useState } from 'react';
import './Task.css';
import { Icon } from '@iconify/react';

function Task({ task, onDelete, onToggleComplete, onSave }) {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    onSave(task.id, editedText);
    setEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input className="editedInput"
          type="text"
          value={editedText}
          onChange={handleInputChange}
        />
      ) : (
        <p>{task.text}</p>
      )}

      {/* <div className="icons"> */}
        {isEditing ? (
          <Icon className="taskIcon saveIcon" onClick={handleSaveClick} icon="mdi:tick" />
        ) : (
          <>
            <Icon className="taskIcon doneIcon" onClick={() => onToggleComplete(task.id)} icon="mdi:tick" />
            <Icon className="taskIcon editIcon" onClick={handleEditClick} icon="basil:edit-outline" />
            <Icon className="taskIcon deleteIcon" onClick={() => onDelete(task.id)} icon="ic:baseline-delete" />
          </>
        )}
      </div>
    // </div>
  );
}

export default Task;
