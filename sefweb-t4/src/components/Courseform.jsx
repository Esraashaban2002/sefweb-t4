import React from 'react'
import { useForm } from 'react-hook-form'
import Sidebar from './Sidebar'
import './forms.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import DragDropFile from './DragDropFile'

function Courseform() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
    return (
      <div className='section-article'>
         <div className='overlay'> 
     <div className='container-fluid container-md'>
      
        {/* header */}

        <div className='row py-5 create-title'>
        <h2 className=''>create new course</h2>
          <p>6th jun 2024</p>
        </div>

        <div className='section-forms '>
        <Sidebar />
        <div className='ms-0 ms-md-5 mt-5'>
            <div className='row mb-5 section-article-title'>
                <h2 className='col-12 col-md-6'>add course details</h2>
                <button  className='col-6 col-md-2'>publish</button>
            </div>
        <form>
        <div className='row'>

        <div className='col-12 col-lg-5 mb-4 form_select'>
          <label htmlFor="courseName" className='mb-2'>course name</label>
          <select id='courseName' 
           {...register('courseName', { required: 'course name is required'})}
          >
            <option hidden></option>
            <option>html</option>
            <option>css</option>
            <option>javascript</option>
            <option>bootstrap</option>
            <option>react</option>
          </select>
         
          {errors.courseName && <p className='text-danger'>{errors.courseName.message}</p>}
        </div>
  
        <div className='col-12 col-md-4 col-lg-2 mb-4'>
          <label htmlFor="level" className='mb-2'>level</label>
          <input
            id="level"
            type="text"
            {...register('level', { required: 'level is required' })}
          />
          {errors.level && <p className='text-danger'>{errors.level.message}</p>}
        </div>

        <div className='col-12 col-md-8 col-lg-5 mb-4'>
          <label htmlFor="numOfLesson" className='mb-2'>number of lessons</label>
          <input
            id="numOfLesson"
            type="text"
            {...register('numOfLesson', { required: 'number of lessons is required' })}
          />
          {errors.numOfLesson && <p className='text-danger'>{errors.numOfLesson.message}</p>}
        </div>

        <div className='col-12 col-md-6 col-lg-3 mb-4'>
          <label htmlFor="language" className='mb-2'>language</label>
          <input
            id="language"
            type="text"
            {...register('language', { required: 'language is required' })}
          />
          {errors.language && <p className='text-danger'>{errors.language.message}</p>}
        </div>

        <div className='col-12 col-md-6 col-lg-3 mb-4 form_date'> 
          <label htmlFor="date" className='mb-2'>start date</label>
          <input
           type='date'
            id="date"
            {...register('date', { required: 'date is required' })}
          />
          
          {errors.date && <p className='text-danger'>{errors.date.message}</p>}
        </div>

        <div className='col-12 col-md-6 col-lg-3 mb-4 form_date'> 
          <label htmlFor="time" className='mb-2'>duration</label>
          <input
           type='time'
            id="time"
            {...register('time', { required: 'time is required' })}
          />
          
          {errors.time && <p className='text-danger'>{errors.time.message}</p>}
        </div>

        <div className='col-12 col-md-6 col-lg-3 mb-4'>
          <label htmlFor="certificate" className='mb-2'>certificate</label>
          <input
            id="certificate"
            type="text"
            {...register('certificate', { required: 'certificate is required' })}
          />
          {errors.certificate && <p className='text-danger'>{errors.certificate.message}</p>}
        </div>

        <div className='col-12 mb-4'> 
          <label htmlFor="courseIntro" className='mb-2'>course introduction </label>
          <textarea
            id="courseIntro"
            rows={5}
            {...register('courseIntro', { required: 'course introduction is required' })}
          ></textarea>
          {errors.courseIntro && <p className='text-danger'>{errors.courseIntro.message}</p>}
        </div>

        <div className='col-12 col-md-6 mb-4'> 
          <label htmlFor="courseAss" className='mb-2'>course assessment</label>
          <textarea
            id="courseAss"
            rows={5}
            {...register('courseAss', { required: 'course assessment is required' })}
          ></textarea>
          {errors.courseAss && <p className='text-danger'>{errors.courseAss.message}</p>}
        </div>

        <div className='col-12 col-md-6 mb-4'> 
          <label htmlFor="courseReq" className='mb-2'>course requirements</label>
          <textarea
            id="courseReq"
            rows={5}
            {...register('courseReq', { required: 'course requirements is required' })}
          ></textarea>
          {errors.courseReq && <p className='text-danger'>{errors.courseReq.message}</p>}
        </div>

        <div className='col-12 mb-4'> 
          <label htmlFor="courseMater" className='mb-2'>course materials</label>
          <textarea
            id="courseMater"
            rows={5}
            {...register('courseMater', { required: 'course materials is required' })}
          ></textarea>
          {errors.courseMater && <p className='text-danger'>{errors.courseMater.message}</p>}
        </div>

        <div className='col-12 col-md-6 col-lg-4 mb-4 form_date'> 
          <label htmlFor="publishingDate" className='mb-2'>publishing date</label>
          <input
           type='date'
            id="publishingDate"
            {...register('publishingDate', { required: 'date is required' })}
          />
          
          {errors.publishingDate && <p className='text-danger'>{errors.publishingDate.message}</p>}
        </div>
        
        <div className='col-12 mb-4 browse'>
        <label htmlFor="" className='mb-2'>Upload Cover Photo</label>
         <DragDropFile />
        {errors.Photo && <p className='text-danger'>{errors.Photo.message}</p>}
      </div>

      <div className='col-12 mb-4 '>
        <h2>lessons</h2>
        <div className='row justify-content-between flex-wrap-reverse'>
          <div className='col-12 col-md-9 lesson'>
            <div className='mb-2 d-flex justify-content-between'>
                  <h2>lesson 1</h2>
                  <i class="fa-regular fa-trash-can"></i>
              </div>
            <form >
            <div className='col-12 mb-3'>
          <label htmlFor="title" className='mb-2'>Title</label>
          <input
            id="title"
            type="text"
            {...register('title', { required: 'Title is required' })}
          />
          {errors.title && <p className='text-danger'>{errors.title.message}</p>}
        </div>
            <div className='col-12 mb-3'> 
          <label htmlFor="description" className='mb-2'>description</label>
          <textarea
            id="description"
            rows={2}
            {...register('description', { required: 'description is required' })}
          ></textarea>
          {errors.description && <p className='text-danger'>{errors.description.message}</p>}
        </div>
        <div className='col-12 mb-2'>
          <label htmlFor="lecUrl" className='mb-2'>lecture URL</label>
          <input
            id="lecUrl"
            type="url"
            {...register('lecUrl', { required: 'lecture URL is required' })}
          />
          {errors.lecUrl && <p className='text-danger'>{errors.lecUrl.message}</p>}
        </div>
            </form>

          </div>
          <div className='col-12 col-md-2 d-flex justify-content-end justify-content-md-between addLesson'>
            <p className='h5'>add lesson</p>
            <div className='plusIcon'>
            <i className="fa-solid fa-plus" />
            </div>
            
          </div>
        </div>
      </div>

      <div className='artical-form-btn mb-4 '>
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

export default Courseform
