import './App.css'
import Calculator from './files/calculator' //addong my calsc!
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Structuring from './components/Structuring'
import Home from './files/home'
import Experiences from './files/experiences'
import Education from './files/education'
import Projects from './files/projects'
import Certifications from './files/certifications'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Structuring />,
    children: [
      {index: true, element: <Home />},
      {path: 'experiences', element: <Experiences />},
      {path: 'education', element: <Education />},
      {path: 'projects', element: <Projects />},
      {path: 'certifications', element: <Certifications />},
      {path: 'calculator', element: <Calculator />}, //hello calc! can u tell this was my favorite part
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App