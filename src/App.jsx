import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes'
import {Toaster} from 'react-hot-toast';

function App() {

  return (
    <div className="App">
      <RouterProvider router={routes} />
      {/* react hot toast container */}
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  )
}

export default App
