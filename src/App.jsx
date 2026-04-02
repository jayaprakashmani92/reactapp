import { Routes, Route } from "react-router-dom";
import Register  from "./component/Register/register"
import Login from "./component/Login/login"
function App() { 
  return ( 
      <> 
       <Routes>
      <Route path="" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
      </>
  )
}

export default App
