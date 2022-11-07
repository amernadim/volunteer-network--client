import { createBrowserRouter } from 'react-router-dom';
import Login from '../../components/Login/Login/Login';
import Register from '../../components/Login/Register/Register';
import NavBar from '../../components/NavBar/NavBar';
import Home from '../../components/Pages/Home';
import SingleVolunteer from '../../components/Pages/Update/SingleVolunteer';
import VolunteerList from '../../components/Pages/VolunteerList';
import Main from '../../layout/Main';
import PrivateRouter from '../PrivateRoutes/PrivateRouter';

export const router = createBrowserRouter([
  {path : '/' , element : <Main/> , children : [
    {
     path : '/' ,
     element : <Home/>
    },
    {
     path : '/home' , 
     element : <Home/>
    },
    {
     path : '/navbar' ,
     element : <NavBar/>
    },
    {
      path : '/register' ,
     element : <Register/>
    },
    {
      path : '/login' ,
     element : <Login/>
    },
    {
      path : '/volunteer' ,
      element : <PrivateRouter> <VolunteerList/></PrivateRouter>
    },
    {path : '/singleVolunteer/:id', 
    element : <SingleVolunteer/>,
    loader : ({params}) => fetch(`http://localhost:5000/user/${params.id}`)
    }
    
  ]}
])