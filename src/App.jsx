import { RouterProvider } from 'react-router'
import  './App.module.scss'
import router  from './routes'
function App() {


  return (
  <>
  <RouterProvider router={router}/>
  </>
  )
}

export default App
