import React from 'react'

function Form(){
    const [firstName, setFirstName]=useState('')
    const [lastName, setLastName]=useState('')

    return(
        <div>
        <form>
        <div>
          <input onChange={e=>setFirstName(e.target.value)}/>
        </div>
        <label>Frist name can't be Empty</label>
       <div>
         <input onChange={e=>setLastName(e.target.value)}/>
       </div>
       <label>Last Name can't be empty</label>
       <div>
       <button>Submit</button>
       </div> 
       </form>
        </div>
    );
}
export default Form