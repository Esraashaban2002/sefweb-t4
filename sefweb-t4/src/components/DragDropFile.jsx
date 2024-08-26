import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './forms.css'

function DragDropFile() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [fileName, setFileName] = useState('');

  // const onSubmit = data => {
  //   console.log(data);
  // };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setValue('Photo', file); // Set the file value in the form
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      setValue('Photo', file); // Set the file value in the form
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return(
    <div className='file-drop-area p-3' 
      onDrop={handleDrop}
      onDragOver={handleDragOver}
        >
         <img   src={`${process.env.PUBLIC_URL}/images/download.png`} 
              alt=""  width={80} />
          <input
            type='file'
            id="Photo"
            {...register('browse', { required: 'Photo is required' })}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <div className='drop-message'>
          {fileName ? <p>{fileName}</p> : <p>Drag and drop files or 
            <button
            type='button'
            className='browse-button'
            onClick={() => document.getElementById('Photo').click()}
          >
            Browse
          </button>
          </p>}
          <p className='formate'>supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT </p>
          </div>
        </div>
  )
}

export default DragDropFile
