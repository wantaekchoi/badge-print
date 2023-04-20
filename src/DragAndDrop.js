import React from 'react';
import './App.css';

const DragAndDrop = ({ onDrop, children }) => {
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    onDrop(files);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="dropzone"
    >
      {children || <p>Drag and drop your badge file (.json) here</p>}
    </div>
  );
};

export default DragAndDrop;
