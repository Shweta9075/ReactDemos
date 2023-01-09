import axios from 'axios'
import React,{useState} from 'react'
import img1 from "../../Assets/img1.png"
import img2 from "../../Assets/img2.png"
import img3 from "../../Assets/img3.png"
import img4 from "../../Assets/img4.png"

const EmployeePayRole = () => {
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("")
  const [gender, setGender] = useState("")
  const [department, setDepartment] = useState()
  const [salary, setSalary] = useState("")
  const [day, setDay] = useState(0)
  const [month, setMonth] = useState(0)
  const [year, setYear] = useState(0)
  const [notes, setNotes] = useState("")
  const [error, setError] = useState(false)

  let Employee = {
    name : name,
    gender: gender,
    salary:salary,
    department:department
  }
  
  function handleSubmit(e){
    e.preventDefault(e)
    console.log("submited");
    axios.post("http://localhost:8080/Employee/RegisterEmployee",Employee)
    .then(response => console.log(response))
    .catch(error => console.log(error))
    if(name.length==0 || gender.length==0){
      setError(true)
    }
    console.log(name)
  }

  return (
    <div>
    <form className='form' onSubmit={handleSubmit}>
    <h2>Employee Payroll Form</h2>
    <div>
    <label className='label1'>Name</label>
    <div>
    <input type="text" placeholder='Enter employee name....' className='text' name="name" onChange={(event) =>{
      console.log(event.target.value)
     setName(event.target.value)}}
     ></input>
    </div>
    <div>
    {error?
    <label className='requ1'>Name is Required*</label>:""}
    </div>
    </div>

    <br></br>
    <div>
    <label className='label2'>Profile image</label>
     <input type="radio" name="profilepPic" onChange={() => setProfilePic(profilePic)}></input>
    <img src={img1} className="img1"></img> &nbsp; &#160;
     <input type="radio" name="profilepPic" onChange={() => setProfilePic(profilePic)}></input>
    <img src={img2} className="img2"></img> &nbsp; &#160;
     <input type="radio" name="profilepPic" onChange={() => setProfilePic(profilePic)}></input>
    <img src={img3} className="img3"></img> &nbsp; &#160;
     <input type="radio" name="profilepPic" onChange={() => setProfilePic(profilePic)}></input>
    <img src={img4} className="img4"></img> &nbsp; &#160;
    </div>
    <br></br>

    <div>
    <label className='label3'>Gender</label>
     <input type="radio" onChange={() => setGender("Male")}></input>
    <text>Male</text> &nbsp; &#160;
     <input type="radio" onChange={() => setGender("Female")}></input>
    <text>Female</text>
    </div>
    <div>
    {error?
    <label className='requ2'>Please select Gender*</label>:""}
    </div>
    <br></br>

    <div>
     <label className='label4'>Department</label>
     <input type="checkbox" size= "5" name="hr" onChange={() => setDepartment("Hr")}></input>
    <text>HR</text> &nbsp; &#160;
     <input type="checkbox" size= "5" name="department" value="sales" onChange={(event) => setDepartment("Sales")} ></input>
    <text>Sales</text> &nbsp; &#160;
     <input type="checkbox" size= "5" name="department" value="finance" onChange={(event) => setDepartment("Finance")}></input>
    <text>Finance</text> &nbsp; &#160;
      <input type="checkbox" size= "5" name="department" value="engineer" onChange={(event) => setDepartment("Engineer")}></input>
    <text>Engineer</text> &nbsp; &#160;
     <input type="checkbox" size= "5" name="department" value="others" onChange={(event) => setDepartment("Others")}   ></input>
    <text>Others</text>
    </div>
    <br></br>

    <div>
    <label className='label5'>Salary</label>
    <select name="Select salary" class="salary" onChange={(event) => setSalary(event.target.value)}>
     <option>20K</option>
     <option>35K</option>
     <option>40K</option>
     <option>45K</option>
     <option>50K</option>
     <option>60K</option>
     <option>70K</option>
    </select>
    </div>
    <br></br>

    <div>
    <label className='label6'>StartDate</label>
    <select name="day" onChange={() => setDay(day)}>
     <option value="day">Day</option>
     <option value="1">1</option>
     <option value="2">2</option>
     <option value="3">3</option>
     <option value="4">4</option>
     <option value="5">5</option>
     <option value="6">6</option>
     <option value="7">7</option>
     <option value="8">8</option>
     <option value="9">9</option>
     <option value="10">10</option>
     <option value="11">11</option>
     <option value="12">12</option>
     <option value="13">13</option>
     <option value="14">14</option>
     <option value="15">15</option>
     <option value="16">16</option>
     <option value="17">17</option>
     <option value="18">18</option>
     <option value="19">19</option>
     <option value="20">20</option>
     <option value="21">21</option>
     <option value="22">22</option>
     <option value="23">23</option>
     <option value="24">24</option>
     <option value="25">25</option>
     <option value="26">26</option>
     <option value="27">27</option>
     <option value="28">28</option>
     <option value="29">29</option>
     <option value="30">30</option>
     <option value="31">31</option>
    </select> &nbsp; &#160;

    <select name="month" onChange={() => setMonth(month)}>
     <option value="month">Month</option>
     <option value="january">January</option>
     <option value="feburary">Feburary</option>
     <option value="march">March</option>
     <option value="april">April</option>
     <option value="may">May</option>
     <option value="jun">June</option>
     <option value="jully">Jully</option>
     <option value="august">August</option>
     <option value="september">September</option>
     <option value="octomber">Octomber</option>
     <option value="november">November</option>
     <option value="december">December</option>
    </select> &nbsp; &#160;

    <select name="year" onChange={() => setYear(year)}>
     <option value="year">Year</option>
     <option value="2015">2015</option>
     <option value="2016">2016</option>
     <option value="2017">2017</option>
     <option value="2018">2018</option>
     <option value="2019">2019</option>
     <option value="2020">2020</option>
     <option value="2021">2021</option>
     <option value="2022">2022</option>
     <option value="2023">2023</option>
    </select>
    </div>
    
    <br></br>

    <div>
     <label className='label7' onChange={() => setNotes(notes)}>Notes</label>
     <textarea name="" rows="4" placeholder='Write something here.....' class="notes"></textarea>
    </div>
    <br></br>

    <div>
     <input type="text" value="Cancel"></input> &nbsp; &#160; &nbsp; &#160;
     <input type="Submit" value="Submit" class="submit" onClick={(e) =>handleSubmit}></input>
     <input type="Reset" value="Reset" class="reser"></input>
    </div>
    </form>
    </div>
  )
}

export default EmployeePayRole