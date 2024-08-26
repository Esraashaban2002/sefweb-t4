import React from 'react'
import { useForm } from 'react-hook-form'
import Sidebar from './Sidebar'
import './forms.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import DragDropFile from './DragDropFile'

function Articleform() {
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
                <h2 className='col-12 col-md-6'>add article details</h2>
                <button  className='col-6 col-md-2'>publish</button>
            </div>
        <form className='w-100'>
        <div className='row'>
        <div className='col-12 col-md-7 mb-4 order-1 order-md-0'>
          <label htmlFor="title" className='mb-2'>Article Title</label>
          <input
            id="title"
            type="text"
            {...register('title', { required: 'Title is required' })}
          />
          {errors.title && <p className='text-danger'>{errors.title.message}</p>}
        </div>
  
        <div className='col-12 col-md-5 mb-4 form_select order-2 order-md-0'>
          <label htmlFor="category" className='mb-2'>category</label>
          <select id='category' 
           {...register('category', { required: 'category is required'})}
          >
            <option hidden></option>
            <option>tech</option>
            <option>education</option>
            <option>business</option>
          </select>
         
          {errors.category && <p className='text-danger'>{errors.category.message}</p>}
        </div>

        <div className='col-12 mb-4 order-3 order-md-0'> 
          <label htmlFor="content" className='mb-2'>Content</label>
          <textarea
            id="content"
            rows={10}
            {...register('content', { required: 'Content is required' })}
          ></textarea>
          {errors.content && <p className='text-danger'>{errors.content.message}</p>}
        </div>

        <div className='col-12 col-md-4 mb-4 form_date order-4 order-md-0'> 
          <label htmlFor="date" className='mb-2'>publishing date</label>
          <input
           type='date'
            id="date"
            {...register('date', { required: 'date is required' })}
          />
          
          {errors.date && <p className='text-danger'>{errors.date.message}</p>}
        </div>
        
        <div className='col-12 mb-4 browse order-0 order-md-0'>
        <label htmlFor="" className='mb-2'>Upload Cover Photo</label>
        <DragDropFile />
        {errors.Photo && <p className='text-danger'>{errors.Photo.message}</p>}
      </div>

       <div className='artical-form-btn mb-4 order-5 order-md-0'>
       <button className='col-12 col-md-2 m-3 btn_close order-1 order-md-0' type="submit">cancel</button>
       <button className='col-12 col-md-2 m-3 order-0 order-md-0' type="submit">save</button>
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

export default Articleform
