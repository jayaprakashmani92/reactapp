import PropsExample from "./PropsExample";
import "../../styles/table.css";
import { useState } from "react";
export default function ListOfData() {
  const [listofObj, setListofObj] = useState([
    { name: "Jayaprakash", age: 22, department: "CSE" },
    { name: "Visalya", age: 21, department: "CSE" }
  ]);
  const gettheValue = (e) => {
    e.preventDefault(); 
    const newEntry = {
      name: e.target.name.value,
      age: e.target.age.value,
      department: e.target.department.value,
    };
    setListofObj([...listofObj, newEntry]);
  };
  return (
    <>
        <div className="forms">
               <form action="" onSubmit={gettheValue}>
        <input type="text" name="name" placeholder="Enter the Name" required/>
        <br />
        <input type="text" name="age" placeholder="Enter the Age" required/>
        <br />
        <input
          type="text"
          name="department"
          placeholder="Enter the Department" required
        />
        <button type="submit">Register</button>
      </form>
        </div>
      <table className=" table table-bordered ">
        <thead className="table__head">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {listofObj.map((data) => (
            <PropsExample key={data.name} name={data.name} age={date.age}  department={data.department}/>
          ))}
        </tbody>
      </table>
    </>
  );
}
