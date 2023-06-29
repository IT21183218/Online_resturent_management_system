import React from "react";
import {ReactToPrint} from 'react-to-print'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GenerateReport from './pages/GenerateReport';
import InquaryReply from './pages/InquaryReply';
import Inquaries from './pages/Inquaries';
import Transactions from './pages/Transactions';
import FinanceDB from './pages/FinanceDB';
import UpdateTransaction from './pages/UpdateTransaction';
import PendingRequest from './pages/PendingRequest';
import MainDashboard from "./pages/MainDashboard";
import AdminDash from "./components/AdminDash/AdminDash";


function App() {

  return (
    <Router>        
        <div className="App"> 
          <Routes> 
            <Route path="/admindash" element={<AdminDash/>}/>
            <Route exact path="/Finance" element ={<FinanceDB/>}/>   
            <Route exact path="/Finance/PendingRequest" element ={<PendingRequest/>}/>   
            <Route exact path="/Finance/Inquaries" element ={<Inquaries/>}/>   
            <Route exact path="/Finance/Inquary/reply" element ={<InquaryReply/>}/>   
            <Route exact path="/Finance/Transaction" element ={<Transactions/>}/>   
            <Route exact path="/Finance/Transaction/update" element ={<UpdateTransaction/>}/>   
            <Route exact path="/Finance/GenerateReport" element ={<GenerateReport/>}/>  

            <Route exact path="/Dashboard" element ={<MainDashboard/>}/> 
          </Routes> 
        </div>     
    </Router>         
  );

}
export default App;