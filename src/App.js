import Home from './components/home/Home';
import Aboutus from './components/aboutus/Aboutus';
import Mtcal from './mtcal/Mtcal';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RootLayout from './RootLayout';

function App() {
  const browserRouter=createBrowserRouter([{
    path:'',
    element:<RootLayout />,
    children:[
      {
        path:'',
        element:<Home />
      },
      {
        path:'/aboutus',
        element:<Aboutus/>
      },
      {
        path:'/mortgagecalculator',
        element:<Mtcal/>
      }
    ]
  }])
  return (
    <div>
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
