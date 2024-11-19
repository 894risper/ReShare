import React, { useContext, useEffect, useState } from 'react';
import { ResourcesContext } from '../context/ResourcesContext';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const EditResource = () => {
  const { resources, editResource } = useContext(ResourcesContext); // Update function renamed to `editResource`
  const location = useLocation();

  const { register, handleSubmit, formState, reset, setValue } = useForm();
  const [file, setFile] = useState(null); // Local state for file handling

  const { index } = location.state || {}; // Extract the index from location.state

  // Pre-fill form with resource data for editing
  useEffect(() => {
    if (index !== undefined && resources[index]) {
      const resource = resources[index];
      reset({
        title: resource.title,
        description: resource.description,
        subject: resource.subject,
        tags: resource.tags,
        privacy: resource.privacy,
      });
      setFile(resource.file); // Set the file manually
    }
  }, [index, resources, reset]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Capture the file input
  };

  const handleFormSubmit = (data) => {
    if (index !== undefined) {
      const updatedResource = {
        ...data,
        file, // Include the updated file
      };
      editResource(index, updatedResource); // Update the resource at the specified index
    }
  };

  return (
    <div>
      <h2>Edit Resource</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
          <label htmlFor="file">File</label>
          <input
            type="file"
            onChange={handleFileChange} // Handle file input manually
          />
          {formState.errors.file && <p>{formState.errors.file.message}</p>}
        </div>

        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Title"
            {...register('title', {
              required: 'The title is required',
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: 'The title should only contain letters',
              },
            })}
          />
          {formState.errors.title && <p>{formState.errors.title.message}</p>}
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            placeholder="Description"
            {...register('description', {
              required: 'The description is required',
            })}
          />
          {formState.errors.description && (
            <p>{formState.errors.description.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="subject">Category</label>
          <input
            type="text"
            placeholder="Category"
            {...register('subject', {
              required: 'The category is required',
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: 'The category should only contain letters',
              },
            })}
          />
          {formState.errors.subject && <p>{formState.errors.subject.message}</p>}
        </div>

        <div>
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            placeholder="Tags"
            {...register('tags', {
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: 'Tags should only contain letters',
              },
            })}
          />
          {formState.errors.tags && <p>{formState.errors.tags.message}</p>}
        </div>

        <div>
          <label htmlFor="privacy">Privacy</label>
          <select
            {...register('privacy', {
              required: 'Please select the privacy level',
            })}
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
          {formState.errors.privacy && <p>{formState.errors.privacy.message}</p>}
        </div>

        <button type="submit">Update Resource</button>
      </form>
    </div>
  );
};

export default EditResource;
