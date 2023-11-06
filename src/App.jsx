import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./App-Routes/AppRoutes"

const App = () => {
  return (
    <BrowserRouter>
    <AppRoutes/>
    </BrowserRouter>
  )
}

export default App