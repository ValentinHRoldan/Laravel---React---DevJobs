import {createBrowserRouter} from 'react-router-dom';
import Layout from './Layouts/Layout';
import Navigation from './Layouts/Navigation';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children: [
            {
                index:true,
                element:<Navigation/>,
            }
        ]

    }
])

export default router;