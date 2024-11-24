import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const {register,handleSubmit,formState,reset}=useForm();

    const navigate= useNavigate();

    useEffect (()=>{
      reset({email:"",password:""})  
    },[reset])

    const handleFormSubmit =async ()=>{
        navigate('/dashboard')

           reset();
    }

  return (
    <div className='bg-blue-100 min-h-screen flex items-center justify-center'>
    <div  className='bg-gray-100 flex rounded-xl  shadow-lg max-w-3xl p-5 items-center' >
       
       <div className='sm:w-1/2 w-full flex-col items-center'> 
        <h1 className='font-bold text-2xl mb-4 text-blue-950 '>Login</h1>
<form  className='border border-gray-500 rounded-md max-h-full flex flex-col bg-white shadow-md p-4 w-full sm:w-72 '

onSubmit={handleSubmit(handleFormSubmit)}>
<div>

   <label className='flex flex-col' htmlFor="email">Email</label> 
   <input className='w-full px-1 py-1 border border-gray-300  rounded-md mb-2 mt-2'
    type="email"
   
   placeholder='email'
   {...register("email",{
    required:"the email is required",
    pattern:{
         value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message:"invalid email"
    }
   })}
   />
       {formState.errors.email &&(

<p>
 {formState.errors.email.message}
</p> 
) }
</div>
<div>
<label className='flex flex-col' htmlFor="password">Password</label>
    <input 
    className='border border-gray-300  px-1 py-1 rounded-md mt-2 w-full'
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
        <p>
            {formState.errors.password.message}
        </p>
    )}  
</div>
<button className='bg-blue-950 mt-4 rounded-xl h-8 text-white hover:scale-95 duration-100 ' type="submit">Submit</button>

<p className='mt-3 justify-center'  >Not Registered?
    <button className='text-blue-700'
     type='button' 
    onClick={()=>navigate('/registration')}
    >
Register
    </button>

</p>

</form>

</div>

<div className='w-1/2 sm:block hidden'>
<img src="src/assets/splash.png" alt="" className='rounded-2xl  '  />
</div>
    </div>
    </div>
  )
}

export default Login