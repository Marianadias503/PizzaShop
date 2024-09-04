
import{createBrowserRouter} from 'react-router-dom'
import { AppLayout } from './pages/_layouts/app'
import { Dashboard } from './pages/app/dashboard'
import { AuthLayout } from './pages/_layouts/auth'
import { SignIn } from './pages/auth/sign-in'
//import { Dashboard } from './pages/app/dashboard'
//import { SignIn } from './pages/auth/sign-in'

export const router = createBrowserRouter([

{
    path:'/',
    element: <AppLayout/>,

    children:[{ //sub-rota, como o AppLayout e o Dashboard possuem o mesmo 'patch' só será mostrado o que foi definido primeiro, então para mostrar mais conteudo, precisar ter uma sub-rota.
        path:'/',
        element: <Dashboard/>,
    }]
},

{
    path:'/',
    element: <AuthLayout/>,

    children:[{ //sub-rota, como o AppLayout e o Dashboard possuem o mesmo 'patch' só será mostrado o que foi definido primeiro, então para mostrar mais conteudo, precisar ter uma sub-rota.
        path:'/sign-in',
        element: <SignIn/>,
    }]
}




    //{path:'/', element: <Dashboard/>},
    
   // {path: '/sign-in', element:<SignIn/> },
])