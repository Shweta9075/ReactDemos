import React from 'react'
import search from '../../Assets/search.png'

const Table = () => {
  return (
    <div>
    <div className='container'>
    <div className='heading'>
    <div className='title'>
     <h1 className='h1'>Employee Details</h1>
    </div>
    <div className='search-box'>
     <input type="text" className='searchText' placeholder='Type to search'></input>
     <img src={search} className="search"></img>&nbsp; &#160;
     <a href='#' className='searchbtn'></a>
    <button type="button" className='button'>+ Add User</button>
    </div>
    </div>
    <table className='table'>
    <thead className='thead'>
    <div className='th'>
       <th>Name</th>
       <th>Gender</th>
       <th>Department</th>
       <th>Salary</th>
       <th>StartDate</th>
       <th>Action</th>
       </div>
    </thead>
    <tbody className='tbody'>
      <tr>
      <div className='td'>
        <td data-lable="name">Shweta Patil</td>
        <td data-label="gender">Female</td>
        <td data-lable="department">Engineer</td>
        <td data-lable="Salary">30k</td>
        <td data-lable="startDate">4-march-2021</td>
        <td data-label="action"></td>
        </div>
      </tr>
      <tr>
      <div className='td'>
        <td data-lable="name">Pooja Mane</td>
        <td data-label="gender">Female</td>
        <td data-lable="department">Hr</td>
        <td data-lable="Salary">40k</td>
        <td data-lable="startDate">8 June 2020</td>
        <td data-label="action"></td>
        </div>
      </tr>
      <tr>
      <div className='td'>
        <td data-lable="name">Kiran Birajdar</td>
        <td data-label="gender">Male</td>
        <td data-lable="department">Finance</td>
        <td data-lable="Salary">40k</td>
        <td data-lable="startDate">1 January 2019</td>
        <td data-label="action"></td>
        </div>
      </tr>
      <tr>
      <div className='td'>
        <td data-lable="name">Geeta Patil</td>
        <td data-label="gender">Female</td>
        <td data-lable="department">Hr</td>
        <td data-lable="Salary">35k</td>
        <td data-lable="startDate">2 Feb 2018</td>
        <td data-label="action"></td>
        </div>
      </tr>
      <tr>
      <div className='td'>
        <td data-lable="name">Deepak Patil</td>
        <td data-label="gender">Male</td>
        <td data-lable="department">Engineer</td>
        <td data-lable="Salary">50k</td>
        <td data-lable="startDate">7 August 2021</td>
        <td data-label="action"></td>
        </div>
      </tr>
      <tr>
      <div className='td'>
        <td data-lable="name">Abhijeet Birajdar</td>
        <td data-label="gender">Male</td>
        <td data-lable="department">Finance</td>
        <td data-lable="Salary">35k</td>
        <td data-lable="startDate">6 Dec 2022</td>
        <td data-label="action"></td>
        </div>
      </tr>
    </tbody>
    </table>
    </div>
    </div>
  )
}

export default Table