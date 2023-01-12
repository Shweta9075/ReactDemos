import axios from 'axios'
import React, { useEffect, useState } from 'react'
import search from '../../Assets/search.png'
import EmployeePayRole from './EmployeePayRoll';
import {DeleteOutlined} from '@ant-design/icons/lib/icons'
import { EditOutlined } from '@ant-design/icons/lib/icons';
import { HomeOutlined } from '@ant-design/icons/lib/icons';
import { LeftOutlined } from '@ant-design/icons/lib/icons';
import { RightOutlined } from '@ant-design/icons/lib/icons';
import { UserOutlined } from '@ant-design/icons/lib/icons';
import { Link } from 'react-router-dom'
import img6 from "../../Assets/img6.png"



function Table () {
  const[employees, setEmployees] = useState([]);
  const[value, setValue]= [0]
  

useEffect(()=>{
  axios.get("http://localhost:8080/Employee/Show all employees")
  .then(Response=>{
    console.log(Response.data.obj);
    const employees = Response.data.obj
  setEmployees(employees)
  console.log(employees)})
  .catch(error=>console.log(error));
  
},[])

function deleteEmployees(name) {
  console.log(name);
  axios.delete(`http://localhost:8080/Employee/Delete-Employee?name=${name}`)
  .then(responce => alert(responce.data.msg))
  .catch(error => console.log(error))

}

function updateEmployees() {
  let name = parseInt(name)
  axios.put(`http://localhost:8080/Employee/Update-Employee?name=${name}`)
  .then(responce => alert(responce.data.msg))
  .catch(error => console.log(error))
}

function searchEmployee() {
  var input, filter, found, table, tr, td, i, j;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("tableid");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td");
      for (j = 0; j < td.length; j++) {
          if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
              found = true;
          }
      }
      if (found) {
          tr[i].style.display = "";
          found = false;
      } else {
          tr[i].style.display = "none";
      }
  }
}

  function callBackEndApi(value) {
    console.log(value);
    axios.get(`http://localhost:8080/Employee/Search-Employee-ByName?name=${value}`)
    .then(responce => console.log(responce))
    .catch(error => console.log(error));
  }

  return (
    <div>
    <div className='img6'>
    <img src={img6} className="img6"></img> &nbsp; &#160;
    </div>
    <div className='container'>
    <div className='heading'>
    <div className='title'>
     <h2 className='h2'>Employee Details</h2>
    </div>
    <div className='search-box'>
     <input type="text" id='myInput' onKeyUp={searchEmployee} placeholder="Search for names.." title="Type in a name"/>
    <input type='text' onChange={(event) => callBackEndApi(event.target.value)}></input>&nbsp; &#160;&nbsp; &#160;
    <Link to= "/EmployeePayRoll" className="button">+AddUser</Link>
     </div>
    </div>
    <table className='table' id="tableid">
    <thead className='thead'>
       <th className='th1'>Name</th>
       <th className='th2'>Gender</th>
       <th className='th3'>Department</th>
       <th className='th4'>Salary</th>
       <th className='th5'>StartDate</th>
       <th className='th6'>Action </th>
       
    </thead>
      <tbody className='tbody'>{
        employees.map((emp)=>(
          <tr>
          <td className='td1'>{emp.name}</td>
          <td className='td2'>{emp.gender}</td>
          <td className='td3'>{emp.department}</td>
          <td className='td4'>{emp.salary}</td>
          <td className='td4'>{emp.startDate}</td>
          <td className='td6'>{emp.action}
           <DeleteOutlined  onClick={() => deleteEmployees(emp.name)} />&nbsp; &#160;
           <EditOutlined  onClick={() =>updateEmployees(emp.name)} />
          </td>
          </tr>
        ) )
      }
      </tbody>
    </table>
    <div className='outline'>
    <HomeOutlined />&nbsp; &#160;
    <LeftOutlined />&nbsp; &#160;
    <label>1 of 2</label>&nbsp; &#160;
    <RightOutlined />
    </div>
    </div>
    </div>
  )
    }


export default Table