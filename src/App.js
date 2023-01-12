import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter'
import HookCounter from './Components/HookCounter'
import Hello from './Components/Hello'
import Display from './Components/Display'
import EmployeePayRoll from './Components/Forms/EmployeePayRoll'
import './Components/Forms/EmployeePayRoll.css'
import Table from './Components/Forms/Table'
import './Components/Forms/Table.css'
import Review from './Components/Review';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';



function App() {
  return (
  <Router>
        <Routes>
            <Route path= "/Counter" element= {<Counter />} />
            <Route path= "/HookCounter" element= {<HookCounter />} />
            <Route path= "/Hello" element= {<Hello />} />
            <Route path="/Review" element= {<Review />} />
            <Route path="/EmployeePayRoll" element={<EmployeePayRoll/>} />
            <Route path="/Table" element={<Table/>}/>
        </Routes>
      </Router>

  );
}

export default App;
