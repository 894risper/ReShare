import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { ResourcesContext } from '../context/ResourcesContext';
const ResourceCreation = () => {
    const {addResources} =useContext(ResourcesContext);
    

    const {register,handleSubmit,formState,reset}=useForm();


    useEffect(()=>{
        reset({})
    },[reset]);

    const handleFormSubmit=(data)=>{

        addResources(data.file,data.title,data.description,data.subject,data.tags,data.privacy)
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
    <label htmlFor="title">Title</label>
    <input 
    
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
        <p>
            {formState.errors.title.message}
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
    <select name="" id=""
{...register("privacy",{
    required:"plz select the privacy"
})}
    >
        
        <option value="public">Public</option>
        <option value="private">Private</option>
    </select>
    {formState.errors.privacy &&(
        <p>
            {formState.privacy.errors.message}
        </p>
    )}
</div>



<button type="submit"> Submit</button>
</form>

    </div>
  )
}

export default ResourceCreation