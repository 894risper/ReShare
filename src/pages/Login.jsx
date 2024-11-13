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
    <div  className='flex flex-row bg-blue-100'>
       <img src="src/assets/splash.png" alt="" className='h-screen' />
       <div className='flex items-center justify-center flex-col ml-96'> 
        <h1 className='font-semibold'>Login</h1>
<form  className='border border-gray-500 rounded-md h-72 flex flex-col bg-white shadow-md p-4 w-72 '

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
<button className='bg-blue-950 mt-4 rounded-md h-7' type="submit">Submit</button>

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
    </div>
  )
}

export default Login