import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import styles from './upload.css';

const fileTypes = ["JPG", "JPEG", "PNG", "GIF"];

function DragDrop() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
  );
}

export default DragDrop;