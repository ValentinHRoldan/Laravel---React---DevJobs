import {createBrowserRouter} from 'react-router-dom';
import Layout from './Layouts/Layout';
import Inicio from './components/Inicio';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children: [
            {
                index:true,
                element:<Inicio/>,
            }
        ]

    }
])

export default router;