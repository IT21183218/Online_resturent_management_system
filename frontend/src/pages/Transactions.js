import React, { useEffect, useState } from 'react'
import Transaction from '../components/FinanceComponent/Transaction';
import Background from '../components/Template/Background';
import Searchbar from '../components/FinanceComponent/Searchbar';
import axios from 'axios';

export default function Transactions() {
    const title = "Transaction"

    const[transactions, setTransactions] = useState([]);

    useEffect(() => {
      const getData = () => {
        axios.get("http://localhost:8000/transaction/view").then((res) => {
          setTransactions(res.data);
          console.log(res.data);
        }).catch((err) => {
          console.log(err);
        })
      }
      getData();
    },[])
    
    
    
  return (
    <div>
        <Background contents = {
            <div className='flex flex-col items-center gap-10 p-10'>
              {transactions.map((item, idm)=>{
                return(
                  <Transaction 
                    userName={item.name} 
                    description={item.description} 
                    profile={item.profile} 
                    payment = {item.amount}
                    transactinId = {item.transactionID}
                    date = {item.date}
                    _id = {item._id}
                  />   
                )
              })}                         
            </div>            
        } search={
          <div>
            <Searchbar/>
          </div>
          
        } title={title}/>
    </div>
  )
}
