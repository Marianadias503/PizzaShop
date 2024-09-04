
import { RouterProvider } from 'react-router-dom'
import{Helmet, HelmetProvider} from 'react-helmet-async'
import './index.css'
import { router } from './Router'

export function App() {
  

  return (
   
   <div className="flex h-screen items-center justify-center ">
    <HelmetProvider>
      <Helmet titleTemplate='%s | pizza.shop' />
    <RouterProvider router={router}/>
    </HelmetProvider>
        
   </div>
  )
}





