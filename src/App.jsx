import { Routes, Route } from "react-router-dom";
import Register  from "./component/Register/register"
import Login from "./component/Login/login"
import ListEvent from "./coreconcepts/7-list/listExample";
import ListOfData from "./coreconcepts/4-props/listofProps";
// import PropsExample from "./coreconcepts/4-props/PropsExample"; 
import UserDatalist from "./component/Register/userdetails";
function App() { 
  return ( 
      <>  
        {/* <div className="parentListdata"><ListOfData/></div> */}
       <Routes>
      <Route path="" element={<Register /> } />
      
      <Route path="/login" element={<Login />} />
    </Routes>
    {/* <Register/>  */}
    {/* <UserDatalist/> */}
      {/* <ListEvent/> */}
      </>
  )
}

export default App
