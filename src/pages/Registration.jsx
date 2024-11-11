import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'


const Registration = () => {
const {register,handleSubmit,formState,reset}=useForm();

useEffect(()=>{
    reset ({username:"",email:"",password:""});

},[reset])

const handleFormSubmit=()=>{
    reset();
}

  return (
    <div>
        <form onSubmit={handleSubmit(handleFormSubmit)} >
<div>
<label htmlFor="username">Username</label>
<input type="text"
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
<p>
   {formState.errors.username.message} 
</p>

)}

</div>
<div>

    <label htmlFor="email">Email</label>
    <input type="email" 
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

       <p>
        {formState.errors.email.message}
       </p> 
    ) }
</div>
<div>
    <label htmlFor="password">Password</label>
    <input type="password"
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

<button type="submit">Submit</button>

        </form>


    </div>
  )
}

export default Registration