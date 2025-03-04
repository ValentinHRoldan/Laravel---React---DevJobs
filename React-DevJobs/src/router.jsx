import {createBrowserRouter} from 'react-router-dom';
import Layout from './Layouts/Layout';
import Navigation from './Layouts/Navigation';
import AuthLayout from './Layouts/AuthLayout';
import Login from './views/Login';
import Register from './views/Register';

const router = createBrowserRouter([
    {
        path:'/',
        element:
        <Layout>
            <div class="py-16 bg-slate-70000 overflow-hidden lg:py-24">
                <div class=" max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                    <div class="relative">
                        <h2 class="text-center text-4xl leading-8 font-extrabold tracking-tight text-yellow-500 sm:text-6xl">Encuentra un trabajo en Tech de forma remota</h2>
                        <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-300">Encuentra el trabajo de tus sueños en una empresa internacional; tenemos vacantes para front end developer, backend, devops, mobile y mucho más!</p>
                    </div>
                </div>
            </div>            
        </Layout>,
        children: [
            {
                index:true,
                element:<Navigation/>,
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