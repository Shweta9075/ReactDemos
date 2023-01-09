import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter'
import HookCounter from './Components/HookCounter'
import Hello from './Components/Hello'
import Display from './Components/Display'
import EmployeePayRoll from './Components/Forms/EmployeePayRoll'
import './Components/Forms/EmployeePayRoll.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Table from './Components/Forms/Table'
import './Components/Forms/Table.css'
import Review from './Components/Review';



function App() {
  return (
  <div>
  <EmployeePayRoll/>
  </div>
  );
}

export default App;
