import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
const ResourceCreation = () => {

    const {register,handleSubmit,formState,reset}=useForm();


    useEffect(()=>{
        reset({})
    },[reset]);

    const handleFormSubmit=()=>{
        reset();
    }
  return (
    <div> upload resource
<form onSubmit={handleSubmit(handleFormSubmit)}>
<div>
<label htmlFor="file">File</label>
<input type="file"
{...register("file",{
    required:"you need to upload a file"
})}
/>
{formState.errors.file &&(
    <p>
        {formState.errors.file.message}
    </p>
)}

</div>
<div>
    <label htmlFor="tittle">Tittle</label>
    <input 
    
    type="text"
    placeholder='tittle'
    {...register("tittle",{
        required:"the tittle is required",
        pattern:{
            value:/^[a-zA-Z]+$/,
            message:"the tittle should only comtain letters"
        }
    })}
    />
    {formState.errors.tittle &&(
        <p>
            {formState.errors.tittle.message}
        </p>
    )}
</div>

<div>
<label htmlFor="description">Description</label>
<input type="text"
placeholder='description'
{...register("description",{
    required:"the description is required"
})}
/>
{formState.errors.decription &&(
    <p>
       {formState.errors.description.message} 
    </p>
)}
</div>
<div>
    <label htmlFor="subject">Category</label>
    <input type="text"
    placeholder='subject'
    {...register("subject",{
      required:"the subject is required"  ,
      pattern:{
        value:/^[a-zA-Z]+$/,
        message:"the message should only contain letters"
      }
    })}
    />
    {formState.errors.subject &&(
        <p>
            {formState.errors.subject.message}
        </p>
    )}
</div>
<div>
    <label htmlFor="tags">Tags</label>
    <input type="text" 
    placeholder='tags'
    {...register("tags",{
        pattern:{
            value:/^[a-zA-Z]+$/,
            message:"tags should only contain letters"
        }
    })}
    />
    {formState.errors.tags &&(
        <p >
              {formState.errors.tags.message}
        </p>
    )}
</div>
<div>
    <label htmlFor="privacy">Privacy</label>
    <select name="" id="">
        
        <option value="public">Public</option>
        <option value="private">Private</option>
    </select>
</div>



<button type="submit"> Submit</button>
</form>

    </div>
  )
}

export default ResourceCreation