import { RouterProvider } from 'react-router-dom'
import './App.css'
import routes from './Routes/Routes'
import {Toaster} from 'react-hot-toast';

function App() {

  return (
    <div className="App">
      <RouterProvider router={routes} />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  )
}

export default App
