import React from 'react'
import { useContext } from 'react'
import { ResourcesContext } from '../context/ResourcesContext'

const ViewResources = () => {
const {resources}= useContext(ResourcesContext)

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