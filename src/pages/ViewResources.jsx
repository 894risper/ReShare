import React from 'react'
import { useContext } from 'react'
import { ResourcesContext } from '../context/ResourcesContext'
import { FaTrash ,FaEdit} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const ViewResources = () => {
const {resources ,deleteResource}= useContext(ResourcesContext)
const navigate= useNavigate();
  return (
    <div>
      {resources.length > 0 ?(
        <table>
          <thead>
            <tr>
              <th>File</th>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Tags</th>
              <th>Privacy</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
<tbody>
{resources.map((resources,index)=>(
  <tr key={index}>
<td>{resources.file}</td>
<td>{resources.title}</td>
<td>{resources.description}</td>
<td>{resources.subject}</td>
<td>{resources.tags}</td>
<td>{resources.privacy}</td>
<td>
  <button onClick={()=> deleteResource (index)}>
    <FaTrash/>
  </button>
</td>
<td>
  <button onClick={()=>navigate('/edit',{state :{index}})}>
    <FaEdit/>
  </button>
</td>

  </tr>
))}
</tbody>
        </table>
      ):(
        
        <p> no task added yet</p>
      )}

    </div>
  )
}

export default ViewResources