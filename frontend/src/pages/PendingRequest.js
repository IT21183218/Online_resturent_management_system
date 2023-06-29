import React, {useState,useEffect} from 'react';
import ApprovelTab from '../components/FinanceComponent/ApprovelTab';
import Background from '../components/Template/Background';
import axios from 'axios'

const title = "pending requests"

const PendingRequest = () => {

  const[preq ,setPreq] = useState([]); 

  useEffect(() => {

      const getData = () => {
          axios.get("http://localhost:8000/posts").then((res) => {
              setPreq(res.data);
              console.log(res.data)
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
              {preq.map((item, idm)=>{
                return(
                  <ApprovelTab userName={item.name} description={item.description} profile={item.userPhoto} payment = {item.amount} />
                )
              })}                         
            </div>            
        } title = {title}/>
    </div>
  )
}
 export default PendingRequest;