import {createBrowserRouter} from 'react-router-dom';
import Layout from './Layouts/Layout';
import Navigation from './Layouts/Navigation';
import AuthLayout from './Layouts/AuthLayout';
import Login from './views/Login';
import Register from './views/Register';
import CrearVacante from './views/CrearVacante';
import Principal from './views/Principal';

const router = createBrowserRouter([
    {
        path:'/',
        element:
        <Layout>
            <Navigation/>
        </Layout>,
        children: [
            {
                index:true,
                element:<Principal/>,
            },
            {
                path:'/crear',
                element:<CrearVacante/>
            }
        ]

    },
    {
        path:'/auth',
        element:<AuthLayout/>,
        children: [
            {
               path:'/auth/login',
               element:<Login/> 
            },
            {
                path:'/auth/register',
                element:<Register/>
            }
        ]
    }
])

export default router;