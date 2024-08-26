import React from 'react'
import { useForm } from 'react-hook-form'
import Sidebar from './Sidebar'
import './forms.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import DragDropFile from './DragDropFile'

function Jobform() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <div className='section-article'>
           <div className='overlay'> 
       <div className='container'>
        
          {/* header */}
  
          <div className='section-forms '>
          <Sidebar />
          <div className='ms-0 ms-md-5 mt-5'>
              <div className='row mb-5 section-article-title'>
                  <h2 className='col-12 col-md-6'>add job details</h2>
                  <button  className='col-6 col-md-2'>publish</button>
              </div>

          <form>
          <div className='row'>
            <div className='row'>
                <div className='col-12 col-md-7 row'>
                <div className='col-12  mb-4 order-0 order-md-0'>
            <label htmlFor="companyName" className='mb-2'>company name</label>
            <input
              id="companyName"
              type="text"
              {...register('companyName', { required: 'company name is required' })}
            />
            {errors.companyName && <p className='text-danger'>{errors.companyName.message}</p>}
                </div>

                <div className='col-12 col-md-6 mb-4 form_select order-2 order-md-0'>
                    <label htmlFor="field" className='mb-2'>field</label>
                    <select id='field' 
                    {...register('field', { required: 'field is required'})}
                    >
                    <option hidden></option>
                    <option>tech</option>
                    <option>education</option>
                    <option>business</option>
                    </select>
                
                    {errors.field && <p className='text-danger'>{errors.field.message}</p>}
                </div> {/* select filed */}

                <div className='col-12 col-md-6 mb-4 form_select order-1 order-md-0'>
                    <label htmlFor="location" className='mb-2'>location</label>
                    <select id='location' 
                    {...register('location', { required: 'location is required'})}
                    >
                    <option hidden></option>
                    <option>tech</option>
                    <option>education</option>
                    <option>business</option>
                    </select>
                
                    {errors.location && <p className='text-danger'>{errors.location.message}</p>}
                </div> {/* select location */}
           </div> 

           <div className='col-12 col-md-5 mb-4 mb-md-0 browse'>
          <label htmlFor="" className='mb-2'>company logo</label>
          <DragDropFile />
          {errors.Photo && <p className='text-danger'>{errors.Photo.message}</p>}
        </div>

        </div> {/* row browse */}
         
          <div className='col-12 mb-4'> 
            <label htmlFor="content" className='mb-2'>about the company</label>
            <textarea
              id="content"
              rows={5}
              {...register('content', { required: 'Content is required' })}
            ></textarea>
            {errors.content && <p className='text-danger'>{errors.content.message}</p>}
          </div>
          
          <div className='col-12 col-md-5 mb-4 '>
          <label htmlFor="position" className='mb-2'>position</label>
          <input
            id="position"
            type="text"
            {...register('position', { required: 'position is required' })}
          />
          {errors.position && <p className='text-danger'>{errors.position.message}</p>}
        </div>

        <div className='col-12 col-md-3 mb-4 '>
          <label htmlFor="jobType" className='mb-2'>job type</label>
          <input
            id="jobType"
            type="text"
            {...register('jobType', { required: 'job type is required' })}
          />
          {errors.jobType && <p className='text-danger'>{errors.jobType.message}</p>}
        </div>
        
        <div className='col-6 col-md-2 radio-input '>
        <label htmlFor="remote">remote
            <input type="radio"  name='radio' id='remote' />
            <span class="checkmark"></span>
            </label>
        </div>

        <div className='col-6 col-md-2 radio-input'>
        <label htmlFor="onSite">on Site
            <input type="radio" name='radio' id='onSite' />
            <span class="checkmark"></span>
             </label>
        </div>

          <div className='col-12 col-md-8 mb-4 row '>
          <label>Salary Range</label>
        <div  className='col-6'>
          <input
            type="number"
            min={0}
            // value="minSalary"
          />
      </div>
      <div className='col-6 d-flex align-items-center' >
        <label className='h5 pe-3 '>to</label>
          <input
            type="number"
            min={0}
            // value="maxSalary"
          />
      </div>

          {errors.position && <p className='text-danger'>{errors.position.message}</p>}
        </div>

            <div className='col-12 col-md-4 mb-4 form_select '>
                        <label htmlFor="currency" className='mb-2'>currency</label>
                        <select id='currency' 
                        {...register('currency', { required: 'currency is required'})}
                        >
                        <option hidden></option>
                        <option>tech</option>
                        <option>education</option>
                        <option>business</option>
                        </select>
                    
                        {errors.currency && <p className='text-danger'>{errors.currency.message}</p>}
          </div> {/* select filed */}
  
          <div className='col-12 mb-4 '> 
            <label htmlFor="description" className='mb-2'>job description</label>
            <textarea
              id="description"
              rows={5}
              {...register('description', { required: 'description is required' })}
            ></textarea>
            {errors.description && <p className='text-danger'>{errors.description.message}</p>}
          </div>

          <div className='col-12 mb-4 '> 
            <label htmlFor="requirements" className='mb-2'>job requirements</label>
            <textarea
              id="requirements"
              rows={5}
              {...register('requirements', { required: 'requirements is required' })}
            ></textarea>
            {errors.requirements && <p className='text-danger'>{errors.requirements.message}</p>}
          </div>

          <div className='col-12 mb-4'> 
            <label htmlFor="skills" className='mb-2'>skills</label>
            <div className='skills-input'
              id="skills"
              {...register('skills', { required: 'skills is required' })}
            >
                <button className='skills-btn'>React js </button>
            </div>
            {errors.skills && <p className='text-danger'>{errors.skills.message}</p>}
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

export default Jobform
