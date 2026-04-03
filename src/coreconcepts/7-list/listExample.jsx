// import { useState } from "react"
// export default function ListEvent(){
//     const listarray = ['Apple', 'Bannana', 'Jackfruits'] 
//     const [flag, fn] = useState(true)   
//     const toggle=()=>{
//           fn(!flag);
//     }
//     return <>

import { useState } from "react";

    
//          <button onClick={toggle}>Toggle Me</button>
//        {flag &&    <ul > 
//                 {
//                    listarray.map((value, index)=>{
//                         return <li key={index}>{value}</li>
//                    })
//                 } 
//          </ul>
//          }
     
//      </> 
// }

 export default function ListEvent(){
     const arrayData = ['Jayaprakash', 'JP', 'Visalya'];
     const [flag, setData]= useState(true)
     const toggleMe= ()=>{
          setData(!flag)
     }
     return <>
     <button type="button" onClick={toggleMe} className="btn-create">Toggle Me</button>
          {flag &&<ul className="getDatas ps-0">
               {
                    arrayData.map((getdata, index)=>{
                         return <li key={index}>{getdata}</li>
                    })
               }
          </ul>
         }
          </>
 }


