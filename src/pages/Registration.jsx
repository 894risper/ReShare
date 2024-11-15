import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

const Registration = () => {
const {register,handleSubmit,formState,reset}=useForm();
const navigate = useNavigate();

useEffect(()=>{
    reset ({username:"",email:"",password:""});

},[reset])

const handleFormSubmit=()=>{
    reset();
}

  return (
    <div className='flex flex-row h-screen bg-blue-100 md:flex-row' >
<img src="src\assets\splash.png" alt="" className='h-screen ' />
<div className='justify-center  flex items-center h-screen flex-col ml-96  '>
    <h1 className='font-semibold text-xl'>Registration</h1>

<form onSubmit={handleSubmit(handleFormSubmit)} className='block border border-gray-500 rounded-md p-4  flex-col  max-h-full w-72 shadow-md bg-white ' >
<div className='flex flex-col'>
<label htmlFor="username">Username</label>
<input  className='border border-gray-500 px-1 py-1 rounded-md mt-2 mb-2'
type="text"
placeholder='username'

{...register("username" ,{
required:"the username is required",
pattern:{
    value:/^[a-zA-Z]+$/,
    message:"username should only contain letters"
}

})}
/>
 {formState.errors.username &&(
<p className='text-red-600'>
   {formState.errors.username.message} 
</p>

)}

</div>
<div className='flex flex-col'>

    <label htmlFor="email">Email</label>
    <input className='border border-gray-500 px-1 py-1 rounded-md mt-2 mb-2'
     type="email" 
    placeholder='email'
    {...register("email",{
        required:"the emaiil is required",
        pattern:{
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message:"invalid email"
        }
    })}
    />
    {formState.errors.email &&(

       <p className='text-red-600'>
        {formState.errors.email.message}
       </p> 
    ) }
</div>
<div className='flex flex-col'>
    <label htmlFor="password">Password</label>
    <input className='border border-gray-500 px-1 py-1 rounded-md mt-2 mb-2'
    type="password"
    placeholder='password'
    {...register("password",{
        required:"the password is required",
        pattern:{
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  message: "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character"
        }
    })}
    />
    {formState.errors.password &&(
        <p className='text-red-600'>
            {formState.errors.password.message}
        </p>
    )}
</div>

<button type="submit" className='bg-blue-950 rounded-md w-full h-10 mt-3'>Submit</button>

<p className='mt-3 '  >Already Registered?
    <button className='text-blue-700'
     type='button' 
    onClick={()=>navigate('/login')}
    >
Login
    </button>

</p>

        </form>
        </div>

    </div>
  )
}

export default Registration