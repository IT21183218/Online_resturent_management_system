import React ,{useState, useEffect} from 'react'
import Background from '../components/Template/Background'
import Inquary from '../components/FinanceComponent/Inquary'
import axios from 'axios';

export default function Inquaries() {
  const title = "inquiries";

  const[inquaries, setInquaries] = useState([]);

    useEffect(() => {
      const getData = () => {
        axios.get("http://localhost:8000/inquaries/view").then((res) => {
          setInquaries(res.data);
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
              {inquaries.map((item, idm)=>{
                if(item.name !== "Naveen" )
                return(                  
                  <Inquary userName={item.name} description={item.description} profile={item.userPhoto} payment = {item.payment} id={item._id} />   
                )
              })}                         
            </div>            
        } title = {title}/>
    </div>
  )
}
