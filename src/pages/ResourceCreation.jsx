import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { PRIVACY } from '../constants';
import { ResourcesContext } from '../context/ResourcesContext';
const ResourceCreation = () => {
    const {addResources} =useContext(ResourcesContext);
    

    const {register,handleSubmit,formState,reset }=useForm();


    useEffect(()=>{
        reset({})
    },[reset]);

    const handleFormSubmit=(data)=>{

        addResources(data.file,data.title,data.description,data.subject,data.tags,data.privacy)
        reset();
    }
  return (
    <div className='flex justify-center items-center flex-col ml-72 '> 
        <h1>Upload Resource</h1>

{/*container for form*/}
 <div className='border border-gray-400 rounded-md p-2 flex items-center justify-center  '  >

<form onSubmit={handleSubmit(handleFormSubmit)}>
<div className='mb-2'>


<label className='mb-4' htmlFor="file">File</label>
<input 
className='border border-gray-300 rounded-md w-full px-2 py-2'
type="file"
{...register("file",{
    required:"you need to upload a file"
})}
/>
{formState.errors.file &&(
    <p className='text-red-600'>
        {formState.errors.file.message}
    </p>
)}

</div>
<div className=''>
    <label className='mb-3' htmlFor="title">Title</label>
    <input 
    className='border border-gray-300 rounded-md w-full px-2 py-2'
    type="text"
    placeholder='title'
    {...register("title",{
        required:"the tittle is required",
        pattern:{
            value:/^[a-zA-Z]+$/,
            message:"the tittle should only comtain letters"
        }
    })}
    />
    {formState.errors.title &&(
        <p className='text-red-600'>
            {formState.errors.title.message}
        </p>
    )}
</div>

<div>
<label className='mb-3' htmlFor="description">Description</label>
<input  className='border border-gray-300 rounded-md w-full py-2 px-2' 
type="text"

placeholder='description'
{...register("description",{
    required:"the description is required"
})}
/>
{formState.errors.description &&(
    <p>
       {formState.errors.description.message} 
    </p>
)}
</div>
<div>
    <label htmlFor="subject">Category</label>
    <input 
    className='block px-2 py-2 border border-gray-300 rounded-md w-full'
    type="text"
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
    <input className='block border border-gray-300 w-full  rounded-md px-2 py-2'
     type="text" 
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
    <select name="privacy" id="privacy"
{...register("privacy",{
    required:"plz select the privacy"
    
})} className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md'
    >
        <option value=""> Select Privacy</option>
        {PRIVACY.map((privacy)=>(
         <option value={privacy} key={privacy} className='capitalize'
         >{privacy}</option>   
        ))}
        
    </select>
    {formState.errors.privacy &&(
        <p className='text-sm text-red-600'>
            {formState.privacy.errors.message}
        </p>
    )}
</div>



<button type="submit" className='bg-blue-950 w-full rounded-md h-8 mt-4 hover:scale-95 duration-100 text-white'> Submit</button>
</form>
</div>
    </div>
  )
}

export default ResourceCreation