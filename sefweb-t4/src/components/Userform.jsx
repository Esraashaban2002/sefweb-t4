import React from 'react'
import { useForm } from 'react-hook-form'
import Sidebar from './Sidebar'
import './forms.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Userform() {
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    return (
      <div className='section-article'>
         <div className='overlay'> 
     <div className='container-section'>
      
        {/* header */}

        <div className='row  py-5 create-title'>
        <h2 className=''>create new user</h2>
          <p>6th jun 2024</p>
        </div>

        <div className='section-forms '>
        <Sidebar />
        <div className='ms-0 ms-md-5 mt-5'>
            <div className='row mb-5 section-article-title'>
                <h2 className='col-12 col-md-6'>add user details</h2>
                <button  className='col-6 col-md-2'>publish</button>
            </div>
        <form>
        <div className='row'>

        <div className='col-12 col-lg-5 mb-4'>
          <label htmlFor="firstName" className='mb-2'>first name</label>
          <input
            id="firstName"
            type="text"
            {...register('firstName', { required: 'first name is required' })}
          />
          {errors.firstName && <p className='text-danger'>{errors.firstName.message}</p>}
        </div>

        <div className='col-12 col-lg-5 mb-4'>
          <label htmlFor="lastName" className='mb-2'>last name</label>
          <input
            id="lastName"
            type="text"
            {...register('lastName', { required: 'last name is required' })}
          />
          {errors.lastName && <p className='text-danger'>{errors.lastName.message}</p>}
        </div>
  
        <div className='col-12 col-lg-2 mb-4 form_select'>
          <label htmlFor="status" className='mb-2'>status</label>
          <select id='status' 
           {...register('status', { required: 'status is required'})}
          >
            <option hidden></option>
            <option>active</option>
            <option>inactive</option>
          </select>
         
          {errors.status && <p className='text-danger'>{errors.status.message}</p>}
        </div>

        <div className='col-12 col-lg-8 mb-4'>
          <label htmlFor="email" className='mb-2'>email address</label>
          <input
            id="email"
            type="email"
            {...register('email', { required: 'email address is required' })}
          />
          {errors.email && <p className='text-danger'>{errors.email.message}</p>}
        </div>
  
        <div className='col-12 col-lg-4 mb-4 form_select'>
          <label htmlFor="role" className='mb-2'>role</label>
          <select id='role' 
           {...register('role', { required: 'role is required'})}
          >
            <option>student</option>
            <option>admin</option>
          </select>
         
          {errors.role && <p className='text-danger'>{errors.role.message}</p>}
        </div>

        <div className='col-12 col-lg-6 mb-4'>
          <label htmlFor="mobile" className='mb-2'>mobile number </label>
          <input
            id="mobile"
            type="text"
            {...register('mobile', { required: 'mobile is required' })}
          />
          {errors.mobile && <p className='text-danger'>{errors.mobile.message}</p>}
        </div>

        <div className='col-12 col-lg-6 mb-4'>
          <label htmlFor="userId" className='mb-2'>user id</label>
          <input
            id="userId"
            type="text"
            {...register('userId', { required: 'user id is required' })}
          />
          {errors.userId && <p className='text-danger'>{errors.userId.message}</p>}
        </div>

        <div className='col-12 col-lg-6 mb-4'>
          <label htmlFor="password" className='mb-2'>password</label>
          <input
            id="password"
            type="password"
            {...register('password', { required: 'password is required' })}
          />
          {errors.password && <p className='text-danger'>{errors.password.message}</p>}
        </div>

        <div className='col-12 col-lg-6 mb-4'>
          <label htmlFor="passwordConfirmation" className='mb-2'>password confirmation</label>
          <input
            id="passwordConfirmation"
            type="password"
            {...register('passwordConfirmation', { required: 'password confirmation is required' })}
          />
          {errors.passwordConfirmation && <p className='text-danger'>{errors.passwordConfirmation.message}</p>}
        </div>

       <div className='artical-form-btn mb-4'>
       <button className='col-12 col-lg-2 m-3 btn_close order-1 order-md-0' type="submit">cancel</button>
       <button className='col-12 col-lg-2 m-3 order-0 order-md-0' type="submit">save</button>
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

export default Userform
