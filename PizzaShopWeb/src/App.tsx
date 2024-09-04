
import { RouterProvider } from 'react-router-dom'

import './index.css'
import { router } from './Router'

export function App() {
  

  return (
   
   <div className="flex h-screen items-center justify-center ">
        <RouterProvider router={router}/>
   </div>
  )
}





