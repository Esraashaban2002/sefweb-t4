import React from 'react'
import { useForm } from 'react-hook-form'
import Sidebar from './Sidebar'
import './forms.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import DragDropFile from './DragDropFile'

function Certificateform() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <div className='section-article'>
       <div className='overlay'> 
   <div className='container-fluid container-md'>
    
      {/* header */}

      <div className='section-forms '>
      <Sidebar />
      <div className='ms-0 ms-md-5 mt-5'>
          <div className='row mb-5 section-article-title'>
              <h2 className='col-12 col-md-6'> Certificate details</h2>
          </div>
      <form>
      <div className='row'>

      <div className='col-12 col-md-4 mb-4 form_select order-0 order-md-0'>
        <label htmlFor="studentName" className='mb-2'>student name</label>
        <select id='studentName' 
         {...register('studentName', { required: 'student name is required'})}
        >
          <option hidden></option>
          <option>tech</option>
          <option>education</option>
          <option>business</option>
        </select>
       
        {errors.studentName && <p className='text-danger'>{errors.studentName.message}</p>}
      </div>

      <div className='col-12 col-md-4 mb-4 order-2 order-md-0'>
        <label htmlFor="dateAcquired" className='mb-2'>date acquired</label>
        <input
          id="dateAcquired"
          type="date"
          {...register('dateAcquired', { required: 'date acquired is required' })}
        />
        {errors.dateAcquired && <p className='text-danger'>{errors.dateAcquired.message}</p>}
      </div>

      <div className='col-12 col-md-4 mb-4 order-3 order-md-0'>
        <label htmlFor="uploadDate" className='mb-2'>upload date</label>
        <input
          id="uploadDate"
          type="date"
          {...register('uploadDate', { required: 'upload date is required' })}
        />
        {errors.uploadDate && <p className='text-danger'>{errors.uploadDate.message}</p>}
      </div>

      <div className='col-12 mb-4 form_select order-1 order-md-0'>
        <label htmlFor="course" className='mb-2'>course title</label>
        <select id='course' 
         {...register('course', { required: 'course is required'})}
        >
          <option hidden></option>
          <option>tech</option>
          <option>education</option>
          <option>business</option>
        </select>
       
        {errors.course && <p className='text-danger'>{errors.course.message}</p>}
      </div>

      
      <div className='col-12 mb-4 browse order-4 order-md-0'>
      <label htmlFor="" className='mb-2'>Upload Certificate</label>
       <DragDropFile />
      {errors.Photo && <p className='text-danger'>{errors.Photo.message}</p>}
    </div>

     <div className='artical-form-btn mb-4 order-5 order-md-0'>
     <button className='col-12 col-md-2 m-3 btn_close order-1 order-md-0' type="submit">cancel</button>
     <button className='col-12 col-md-2 m-3 order-0 order-md-0' type="submit">upload</button>
     </div>
      
      </div>
    </form>
  
    </div> {/* form */}
    </div>  {/* section-forms */}

    {/* footer */}

    </div>   {/* container */}
     </div>  {/* overlay */}
    </div>   // section
  );
}

export default Certificateform
